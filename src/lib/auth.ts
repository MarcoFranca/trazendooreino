import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";

import type { Profile } from "@/lib/supa-types";
import {
    createSupabaseAdminClient,
    createSupabaseServerClient,
} from "@/lib/supabase/server";

const AUTH_SCHEMA_HINT =
    "Supabase schema not applied. Run the project migrations and seed before loading authenticated pages.";

function isSupabaseError(error: unknown): error is { code?: string; message?: string } {
    return typeof error === "object" && error !== null;
}

function isMissingSchemaError(error: unknown) {
    return isSupabaseError(error) && error.code === "PGRST205";
}

function isMissingSessionError(error: unknown) {
    return (
        typeof error === "object" &&
        error !== null &&
        "name" in error &&
        error.name === "AuthSessionMissingError"
    );
}

function logAuthError(context: string, error: unknown) {
    if (isMissingSchemaError(error)) {
        console.error(`${AUTH_SCHEMA_HINT} Context: ${context}.`, error);
        return;
    }

    if (isMissingSessionError(error)) {
        return;
    }

    console.error(`Supabase auth/profile error. Context: ${context}.`, error);
}

function getProfileName(user: Pick<User, "email" | "user_metadata">) {
    const metadataName =
        typeof user.user_metadata?.name === "string" ? user.user_metadata.name.trim() : "";
    const emailFallback = user.email ? user.email.split("@")[0] : "";

    return metadataName || emailFallback || "";
}

async function readProfileForUser(userId: string) {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle<Profile>();

    if (error) {
        logAuthError(`readProfileForUser:${userId}`, error);
        return null;
    }

    return data;
}

export const getCurrentUser = cache(async () => {
    const supabase = await createSupabaseServerClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error) {
        logAuthError("getCurrentUser", error);
        return null;
    }

    return user ?? null;
});

export async function ensureProfileForUser(userArg?: User | null) {
    const user = userArg ?? (await getCurrentUser());

    if (!user) {
        return null;
    }

    const existingProfile = await readProfileForUser(user.id);

    if (existingProfile) {
        return existingProfile;
    }

    try {
        const admin = createSupabaseAdminClient();
        const { data, error } = await admin
            .from("profiles")
            .upsert(
                {
                    id: user.id,
                    email: user.email ?? null,
                    name: getProfileName(user),
                    role: "user",
                },
                { onConflict: "id" }
            )
            .select("*")
            .maybeSingle<Profile>();

        if (error) {
            logAuthError(`ensureProfileForUser:${user.id}`, error);
            return null;
        }

        return data;
    } catch (error) {
        logAuthError(`ensureProfileForUser:${user.id}`, error);
        return null;
    }
}

export const getCurrentProfile = cache(async () => {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    const profile = await readProfileForUser(user.id);

    if (profile) {
        return profile;
    }

    return ensureProfileForUser(user);
});

export const getViewer = cache(async () => {
    const user = await getCurrentUser();

    if (!user) {
        return { user: null, profile: null as Profile | null };
    }

    const profile = await getCurrentProfile();
    return { user, profile };
});

export async function requireUser() {
    const viewer = await getViewer();

    if (!viewer.user) {
        redirect("/login");
    }

    return viewer;
}

export async function requireAdmin() {
    const viewer = await requireUser();

    if (viewer.profile?.role !== "admin") {
        redirect("/app");
    }

    return viewer;
}
