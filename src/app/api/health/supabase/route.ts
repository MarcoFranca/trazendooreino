import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/server";

function isDevelopment() {
    return process.env.NODE_ENV === "development";
}

function isConfigured(value: string | undefined) {
    return Boolean(value && value.trim().length > 0);
}

async function tableExists(table: "journeys" | "weeks" | "profiles") {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase
        .from(table)
        .select("id", { head: true, count: "exact" })
        .limit(1);

    if (!error) {
        return { exists: true, error: null };
    }

    if (error.code === "PGRST205") {
        return {
            exists: false,
            error: "Supabase schema not applied yet. Run the initial migration and seed workflow.",
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
        error: null as string | null,
    };

    if (!supabaseUrlConfigured || !publishableKeyConfigured || !secretKeyConfigured) {
        response.error =
            "Missing Supabase environment variables. Check .env.local before testing Supabase health.";
        return NextResponse.json(response, { status: 200 });
    }

    try {
        const [journeys, weeks, profiles] = await Promise.all([
            tableExists("journeys"),
            tableExists("weeks"),
            tableExists("profiles"),
        ]);

        response.journeysTableExists = journeys.exists;
        response.weeksTableExists = weeks.exists;
        response.profilesTableExists = profiles.exists;
        response.error = journeys.error ?? weeks.error ?? profiles.error ?? null;

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown Supabase health error.";
        response.error = message;
        return NextResponse.json(response, { status: 500 });
    }
}
