import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/server";

function isDevelopment() {
    return process.env.NODE_ENV === "development";
}

function isConfigured(value: string | undefined) {
    return Boolean(value && value.trim().length > 0);
}

async function getTableCount(table: "journeys" | "weeks" | "profiles") {
    const supabase = createSupabaseAdminClient();
    const { count, error } = await supabase
        .from(table)
        .select("id", { head: true, count: "exact" })
        .limit(1);

    if (!error) {
        return { exists: true, count: count ?? 0, error: null };
    }

    if (error.code === "PGRST205") {
        return {
            exists: false,
            count: null,
            error: "Schema nao aplicado. Rode as migrations e o seed antes de testar o healthcheck.",
        };
    }

    throw error;
}

async function getFunctionValue<T>(fnName: string) {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase.rpc(fnName);

    if (!error) {
        return { value: data as T, error: null };
    }

    if (error.code === "PGRST205") {
        return {
            value: null,
            error: "Schema nao aplicado. Rode as migrations e o seed antes de testar o healthcheck.",
        };
    }

    if (error.code === "42883") {
        return {
            value: null,
            error: `Funcao ${fnName} ainda nao aplicada. Rode o db push.`,
        };
    }

    throw error;
}

export async function GET() {
    if (!isDevelopment()) {
        return NextResponse.json({ error: "Not found." }, { status: 404 });
    }

    const supabaseUrlConfigured = isConfigured(process.env.NEXT_PUBLIC_SUPABASE_URL);
    const publishableKeyConfigured = isConfigured(
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const secretKeyConfigured = isConfigured(process.env.SUPABASE_SERVICE_ROLE_KEY);

    const response = {
        supabaseUrlConfigured,
        publishableKeyConfigured,
        secretKeyConfigured,
        journeysTableExists: false,
        weeksTableExists: false,
        profilesTableExists: false,
        authUsersCount: null as number | null,
        profilesCount: null as number | null,
        journeysCount: null as number | null,
        weeksCount: null as number | null,
        missingProfilesCount: null as number | null,
        hasProfilesTrigger: false,
        error: null as string | null,
    };

    if (!supabaseUrlConfigured || !publishableKeyConfigured || !secretKeyConfigured) {
        response.error =
            "Missing Supabase environment variables. Check .env.local before testing Supabase health.";
        return NextResponse.json(response, { status: 200 });
    }

    try {
        const [journeys, weeks, profiles, authUsers, missingProfiles, triggerState] =
            await Promise.all([
                getTableCount("journeys"),
                getTableCount("weeks"),
                getTableCount("profiles"),
                getFunctionValue<number>("auth_users_count"),
                getFunctionValue<number>("count_missing_profiles"),
                getFunctionValue<boolean>("has_profiles_trigger"),
            ]);

        response.journeysTableExists = journeys.exists;
        response.weeksTableExists = weeks.exists;
        response.profilesTableExists = profiles.exists;
        response.journeysCount = journeys.count;
        response.weeksCount = weeks.count;
        response.profilesCount = profiles.count;
        response.authUsersCount = authUsers.value ?? null;
        response.missingProfilesCount = missingProfiles.value ?? null;
        response.hasProfilesTrigger = triggerState.value ?? false;
        response.error =
            journeys.error ??
            weeks.error ??
            profiles.error ??
            authUsers.error ??
            missingProfiles.error ??
            triggerState.error ??
            null;

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown Supabase health error.";
        response.error = message;
        return NextResponse.json(response, { status: 500 });
    }
}
