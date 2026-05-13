import "server-only";

import type {
    CollaboratorApplication,
    Journey,
    Week,
    WeekQuestion,
} from "@/lib/supa-types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type JourneyWithWeeks = Journey & {
    weeks: Week[];
};

const SCHEMA_NOT_APPLIED_MESSAGE =
    "Schema nao aplicado. Rode as migrations e o seed do Supabase.";

function isMissingSchemaError(error: unknown) {
    return (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === "PGRST205"
    );
}

function isNoRowsError(error: unknown) {
    return (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === "PGRST116"
    );
}

function logSchemaHint(error: unknown, context: string) {
    console.error(
        `${SCHEMA_NOT_APPLIED_MESSAGE} Run supabase db push and apply the project seed. Context: ${context}.`,
        error
    );
}

function logJourneyError(error: unknown, context: string) {
    console.error(`Supabase journeys query failed. Context: ${context}.`, error);
}

async function safeListQuery<T>(
    context: string,
    query: () => Promise<{ data: T[] | null; error: unknown }>
) {
    try {
        const { data, error } = await query();

        if (error) {
            if (isMissingSchemaError(error)) {
                logSchemaHint(error, context);
                return [];
            }

            if (isNoRowsError(error)) {
                return [];
            }

            logJourneyError(error, context);
            return [];
        }

        return data ?? [];
    } catch (error) {
        if (isMissingSchemaError(error)) {
            logSchemaHint(error, context);
            return [];
        }

        if (isNoRowsError(error)) {
            return [];
        }

        logJourneyError(error, context);
        return [];
    }
}

async function safeSingleQuery<T>(
    context: string,
    query: () => Promise<{ data: T | null; error: unknown }>
) {
    try {
        const { data, error } = await query();

        if (error) {
            if (isMissingSchemaError(error)) {
                logSchemaHint(error, context);
                return null;
            }

            if (isNoRowsError(error)) {
                return null;
            }

            logJourneyError(error, context);
            return null;
        }

        return data;
    } catch (error) {
        if (isMissingSchemaError(error)) {
            logSchemaHint(error, context);
            return null;
        }

        if (isNoRowsError(error)) {
            return null;
        }

        logJourneyError(error, context);
        return null;
    }
}

export async function getPublishedJourneys() {
    const supabase = await createSupabaseServerClient();
    return safeListQuery<Journey>("getPublishedJourneys", async () =>
        await supabase
            .from("journeys")
            .select("*")
            .eq("is_published", true)
            .order("created_at", { ascending: true })
            .returns<Journey[]>()
    );
}

export async function getJourneyBySlug(slug: string) {
    const supabase = await createSupabaseServerClient();
    return safeSingleQuery<Journey>(`getJourneyBySlug:${slug}`, async () =>
        await supabase.from("journeys").select("*").eq("slug", slug).maybeSingle<Journey>()
    );
}

export async function getJourneyWeeks(journeyId: string, includeUnreleased = false) {
    const supabase = await createSupabaseServerClient();
    let query = supabase
        .from("weeks")
        .select("*")
        .eq("journey_id", journeyId)
        .eq("is_published", true)
        .order("week_number", { ascending: true });

    if (!includeUnreleased) {
        query = query.or(`release_at.is.null,release_at.lte.${new Date().toISOString()}`);
    }

    return safeListQuery<Week>(`getJourneyWeeks:${journeyId}`, async () => await query.returns<Week[]>());
}

export async function getJourneyWeekByNumber(
    journeyId: string,
    weekNumber: string,
    includeUnreleased = false
) {
    const supabase = await createSupabaseServerClient();
    let query = supabase
        .from("weeks")
        .select("*")
        .eq("journey_id", journeyId)
        .eq("week_number", weekNumber)
        .eq("is_published", true);

    if (!includeUnreleased) {
        query = query.or(`release_at.is.null,release_at.lte.${new Date().toISOString()}`);
    }

    return safeSingleQuery<Week>(
        `getJourneyWeekByNumber:${journeyId}:${weekNumber}`,
        async () => await query.maybeSingle<Week>()
    );
}

export async function getCurrentJourneyWeek() {
    const supabase = await createSupabaseServerClient();
    return safeSingleQuery<Week>("getCurrentJourneyWeek", async () =>
        await supabase
            .from("weeks")
            .select("*")
            .eq("is_current", true)
            .eq("is_published", true)
            .or(`release_at.is.null,release_at.lte.${new Date().toISOString()}`)
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle<Week>()
    );
}

export async function getCurrentJourneyWithWeek() {
    const currentWeek = await getCurrentJourneyWeek();

    if (!currentWeek) {
        return { journey: null, currentWeek: null };
    }

    const journey = await getJourneyById(currentWeek.journey_id);
    return { journey, currentWeek };
}

export async function getJourneyById(id: string) {
    const supabase = await createSupabaseServerClient();
    return safeSingleQuery<Journey>(`getJourneyById:${id}`, async () =>
        await supabase.from("journeys").select("*").eq("id", id).maybeSingle<Journey>()
    );
}

export async function getViewerQuestions(userId: string) {
    const supabase = await createSupabaseServerClient();
    return safeListQuery<WeekQuestion>(`getViewerQuestions:${userId}`, async () =>
        await supabase
            .from("week_questions")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false })
            .returns<WeekQuestion[]>()
    );
}

export async function getAdminJourneys() {
    const supabase = await createSupabaseServerClient();
    const data = await safeListQuery<JourneyWithWeeks>("getAdminJourneys", async () =>
        await supabase.from("journeys").select("*, weeks(*)").order("created_at", { ascending: true })
    );

    return data as JourneyWithWeeks[];
}

export async function getAdminWeeks() {
    const supabase = await createSupabaseServerClient();
    const data = await safeListQuery<Week & { journeys: { title: string; slug: string } | null }>("getAdminWeeks", async () =>
        await supabase
            .from("weeks")
            .select("*, journeys(title, slug)")
            .order("release_at", { ascending: true, nullsFirst: true })
            .order("week_number", { ascending: true })
    );

    return data as Array<Week & { journeys: { title: string; slug: string } | null }>;
}

export async function getAdminCollaboratorApplications() {
    const supabase = await createSupabaseServerClient();
    return safeListQuery<CollaboratorApplication>("getAdminCollaboratorApplications", async () =>
        await supabase
            .from("collaborator_applications")
            .select("*")
            .order("created_at", { ascending: false })
            .returns<CollaboratorApplication[]>()
    );
}
