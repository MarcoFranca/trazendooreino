import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";

import type { Profile } from "@/lib/supa-types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const getViewer = cache(async () => {
    const supabase = await createSupabaseServerClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return { user: null, profile: null as Profile | null };
    }

    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle<Profile>();

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
