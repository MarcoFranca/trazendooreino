import "server-only";

import type {
    CollaboratorApplication,
    Journey,
    Week,
    WeekQuestion,
} from "@/lib/supa-types";
import {
    createSupabaseAdminClient,
    createSupabaseServerClient,
} from "@/lib/supabase/server";

export type JourneyStatus = "available" | "upcoming" | "locked";
export type WeekStatus = "available" | "current" | "upcoming" | "locked";
export type AdminJourneyStatus = "published" | "programmed" | "draft";
export type AdminWeekStatus = "current" | "published" | "programmed" | "draft";

export type JourneyWithWeeks = Journey & {
    weeks: Week[];
};

export type AdminWeek = Week & {
    journeys: { title: string; slug: string } | null;
};

export type UserJourney = Journey & {
    isAccessible: boolean;
    status: JourneyStatus;
    availableAt: string | null;
    totalWeeks: number;
    releasedWeeks: number;
    currentWeek: Week | null;
};

export type UserWeek = Week & {
    isAccessible: boolean;
    status: WeekStatus;
    availableAt: string | null;
};

const SCHEMA_NOT_APPLIED_MESSAGE =
    "Schema nao aplicado. Rode as migrations e o seed do Supabase.";

function isMissingSchemaError(error: unknown) {
    return (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error.code === "PGRST205" || error.code === "42703")
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

function isReleased(value: string | null | undefined) {
    if (!value) {
        return false;
    }

    return new Date(value).getTime() <= Date.now();
}

function isJourneyAccessible(journey: Journey) {
    return !journey.deleted_at && journey.is_published && (!journey.release_at || isReleased(journey.release_at));
}

function getJourneyStatus(journey: Journey): JourneyStatus {
    if (isJourneyAccessible(journey)) {
        return "available";
    }

    if (journey.release_at && !isReleased(journey.release_at)) {
        return "upcoming";
    }

    return "locked";
}

function getWeekStatus(week: Week): WeekStatus {
    if (!week.is_published || week.deleted_at) {
        return "locked";
    }

    if (week.is_current && isReleased(week.release_at)) {
        return "current";
    }

    if (isReleased(week.release_at)) {
        return "available";
    }

    return "upcoming";
}

function isWeekAccessible(week: Week) {
    const status = getWeekStatus(week);
    return status === "available" || status === "current";
}

function getAdminJourneyStatus(journey: Journey): AdminJourneyStatus {
    if (!journey.is_published) {
        return "draft";
    }

    if (journey.release_at && !isReleased(journey.release_at)) {
        return "programmed";
    }

    return "published";
}

function getAdminWeekStatus(week: Week): AdminWeekStatus {
    if (!week.is_published) {
        return "draft";
    }

    if (week.is_current) {
        return "current";
    }

    if (week.release_at && !isReleased(week.release_at)) {
        return "programmed";
    }

    return "published";
}

function enrichUserWeek(week: Week): UserWeek {
    return {
        ...week,
        isAccessible: isWeekAccessible(week),
        status: getWeekStatus(week),
        availableAt: week.release_at,
    };
}

function enrichUserJourney(journey: Journey, weeks: Week[]): UserJourney {
    const releasedWeeks = weeks.filter((week) => isWeekAccessible(week)).length;
    const currentWeek =
        weeks.find((week) => week.is_current && isWeekAccessible(week)) ??
        weeks.find((week) => isWeekAccessible(week)) ??
        null;
    const baseAccessible = isJourneyAccessible(journey);
    const baseStatus = getJourneyStatus(journey);
    const hasVisibleWeeks = weeks.length > 0;

    return {
        ...journey,
        isAccessible: baseAccessible && hasVisibleWeeks,
        status: hasVisibleWeeks ? baseStatus : baseStatus === "upcoming" ? "upcoming" : "locked",
        availableAt: journey.release_at ?? null,
        totalWeeks: weeks.length,
        releasedWeeks,
        currentWeek,
    };
}

async function getPublishedWeeksByJourneyId(journeyId: string) {
    const supabase = await createSupabaseServerClient();
    return safeListQuery<Week>(`getPublishedWeeksByJourneyId:${journeyId}`, async () =>
        await supabase
            .from("weeks")
            .select("*")
            .eq("journey_id", journeyId)
            .eq("is_published", true)
            .is("deleted_at", null)
            .order("week_number", { ascending: true })
            .returns<Week[]>()
    );
}

export async function getAllJourneysForAdmin() {
    const supabase = await createSupabaseServerClient();
    const data = await safeListQuery<JourneyWithWeeks>("getAllJourneysForAdmin", async () =>
        await supabase
            .from("journeys")
            .select("*, weeks(*)")
            .is("deleted_at", null)
            .order("created_at", { ascending: true })
    );

    return data.map((journey) => ({
        ...journey,
        weeks: [...(journey.weeks ?? [])].sort((left, right) =>
            left.week_number.localeCompare(right.week_number)
        ),
    })) as JourneyWithWeeks[];
}

export async function getAllWeeksForAdmin() {
    const supabase = await createSupabaseServerClient();
    const data = await safeListQuery<AdminWeek>("getAllWeeksForAdmin", async () =>
        await supabase
            .from("weeks")
            .select("*, journeys(title, slug)")
            .is("deleted_at", null)
            .order("release_at", { ascending: true, nullsFirst: true })
            .order("week_number", { ascending: true })
    );

    return data.map((week) => ({
        ...week,
        adminStatus: getAdminWeekStatus(week),
    })) as (AdminWeek & { adminStatus: AdminWeekStatus })[];
}

export async function getJourneysForUser() {
    const supabase = await createSupabaseServerClient();
    const journeys = await safeListQuery<Journey>("getJourneysForUser", async () =>
        await supabase
            .from("journeys")
            .select("*")
            .is("deleted_at", null)
            .order("created_at", { ascending: true })
            .returns<Journey[]>()
    );

    const weeksByJourney = await Promise.all(
        journeys.map(async (journey) => [journey.id, await getPublishedWeeksByJourneyId(journey.id)] as const)
    );
    const weekMap = new Map(weeksByJourney);

    return journeys.map((journey) => enrichUserJourney(journey, weekMap.get(journey.id) ?? []));
}

export async function getJourneyForUser(slug: string) {
    const supabase = await createSupabaseServerClient();
    const journey = await safeSingleQuery<Journey>(`getJourneyForUser:${slug}`, async () =>
        await supabase
            .from("journeys")
            .select("*")
            .eq("slug", slug)
            .is("deleted_at", null)
            .maybeSingle<Journey>()
    );

    if (!journey) {
        return null;
    }

    const weeks = await getPublishedWeeksByJourneyId(journey.id);
    return enrichUserJourney(journey, weeks);
}

export async function getWeeksForUser(journeySlug: string) {
    const journey = await getJourneyForUser(journeySlug);

    if (!journey) {
        return [];
    }

    const weeks = await getPublishedWeeksByJourneyId(journey.id);
    return weeks.map(enrichUserWeek);
}

export async function getWeekForUser(journeySlug: string, weekIdentifier: string) {
    const journey = await getJourneyForUser(journeySlug);

    if (!journey) {
        return null;
    }

    const supabase = await createSupabaseServerClient();
    const week = await safeSingleQuery<Week>(
        `getWeekForUser:${journeySlug}:${weekIdentifier}`,
        async () =>
            await supabase
                .from("weeks")
                .select("*")
                .eq("journey_id", journey.id)
                .eq("is_published", true)
                .is("deleted_at", null)
                .or(`week_number.eq.${weekIdentifier},slug.eq.${weekIdentifier}`)
                .maybeSingle<Week>()
    );

    return week ? enrichUserWeek(week) : null;
}

export async function getCurrentJourneyWeek() {
    const supabase = await createSupabaseServerClient();
    return safeSingleQuery<Week>("getCurrentJourneyWeek", async () =>
        await supabase
            .from("weeks")
            .select("*")
            .eq("is_current", true)
            .eq("is_published", true)
            .is("deleted_at", null)
            .lte("release_at", new Date().toISOString())
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
        await supabase
            .from("journeys")
            .select("*")
            .eq("id", id)
            .eq("is_published", true)
            .is("deleted_at", null)
            .maybeSingle<Journey>()
    );
}

export async function getAdminJourneyById(id: string) {
    const supabase = await createSupabaseServerClient();
    return safeSingleQuery<Journey>(`getAdminJourneyById:${id}`, async () =>
        await supabase
            .from("journeys")
            .select("*")
            .eq("id", id)
            .is("deleted_at", null)
            .maybeSingle<Journey>()
    );
}

export async function getAdminWeekById(id: string) {
    const supabase = await createSupabaseServerClient();
    return safeSingleQuery<Week>(`getAdminWeekById:${id}`, async () =>
        await supabase
            .from("weeks")
            .select("*")
            .eq("id", id)
            .is("deleted_at", null)
            .maybeSingle<Week>()
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

export async function getAdminWeeksByJourney(journeyId: string) {
    const weeks = await getAllWeeksForAdmin();
    return weeks.filter((week) => week.journey_id === journeyId);
}

export async function getAdminDashboardStats() {
    const [journeys, weeks, applications] = await Promise.all([
        getAllJourneysForAdmin(),
        getAllWeeksForAdmin(),
        getAdminCollaboratorApplications(),
    ]);

    return {
        journeysTotal: journeys.length,
        journeysPublished: journeys.filter((journey) => journey.is_published).length,
        weeksTotal: weeks.length,
        currentWeek: weeks.find((week) => week.is_current) ?? null,
        pendingCollaborators: applications.filter(
            (application) => application.status === "pending"
        ).length,
    };
}

export async function getPublicReleasedWeekByJourneySlug(
    journeySlug: string,
    weekIdentifier: string
) {
    try {
        const admin = createSupabaseAdminClient();
        const { data: journey, error: journeyError } = await admin
            .from("journeys")
            .select("*")
            .eq("slug", journeySlug)
            .eq("is_published", true)
            .is("deleted_at", null)
            .maybeSingle<Journey>();

        if (journeyError) {
            if (isMissingSchemaError(journeyError)) {
                logSchemaHint(journeyError, `getPublicReleasedWeekByJourneySlug:${journeySlug}`);
                return null;
            }

            logJourneyError(journeyError, `getPublicReleasedWeekByJourneySlug:${journeySlug}`);
            return null;
        }

        if (!journey || !isJourneyAccessible(journey)) {
            return null;
        }

        const { data, error } = await admin
            .from("weeks")
            .select("*")
            .eq("journey_id", journey.id)
            .eq("is_published", true)
            .is("deleted_at", null)
            .or(`week_number.eq.${weekIdentifier},slug.eq.${weekIdentifier}`)
            .lte("release_at", new Date().toISOString())
            .maybeSingle<Week>();

        if (error) {
            if (isMissingSchemaError(error)) {
                logSchemaHint(error, `getPublicReleasedWeekByJourneySlug:${journeySlug}:${weekIdentifier}`);
                return null;
            }

            logJourneyError(error, `getPublicReleasedWeekByJourneySlug:${journeySlug}:${weekIdentifier}`);
            return null;
        }

        return data;
    } catch (error) {
        logJourneyError(error, `getPublicReleasedWeekByJourneySlug:${journeySlug}:${weekIdentifier}`);
        return null;
    }
}

export async function getPublicJourneyPreviewBySlug(slug: string) {
    try {
        const admin = createSupabaseAdminClient();
        const { data: journey, error: journeyError } = await admin
            .from("journeys")
            .select("*")
            .eq("slug", slug)
            .eq("is_published", true)
            .is("deleted_at", null)
            .maybeSingle<Journey>();

        if (journeyError) {
            if (isMissingSchemaError(journeyError)) {
                logSchemaHint(journeyError, `getPublicJourneyPreviewBySlug:${slug}`);
                return null;
            }

            logJourneyError(journeyError, `getPublicJourneyPreviewBySlug:${slug}`);
            return null;
        }

        if (!journey) {
            return null;
        }

        const { data: weeks, error: weeksError } = await admin
            .from("weeks")
            .select("*")
            .eq("journey_id", journey.id)
            .eq("is_published", true)
            .is("deleted_at", null)
            .order("week_number", { ascending: true })
            .returns<Week[]>();

        if (weeksError) {
            if (isMissingSchemaError(weeksError)) {
                logSchemaHint(weeksError, `getPublicJourneyPreviewBySlug:${slug}:weeks`);
                return {
                    journey,
                    weeks: [],
                };
            }

            logJourneyError(weeksError, `getPublicJourneyPreviewBySlug:${slug}:weeks`);
            return {
                journey,
                weeks: [],
            };
        }

        return {
            journey,
            weeks: (weeks ?? []).map(enrichUserWeek),
        };
    } catch (error) {
        logJourneyError(error, `getPublicJourneyPreviewBySlug:${slug}`);
        return null;
    }
}

export async function getPublishedJourneys() {
    return getJourneysForUser();
}

export async function getJourneyBySlug(slug: string) {
    const journey = await getJourneyForUser(slug);
    return journey?.isAccessible ? journey : null;
}

export async function getJourneyWeeks(journeyId: string, includeUnreleased = false) {
    const weeks = await getPublishedWeeksByJourneyId(journeyId);
    return includeUnreleased ? weeks : weeks.filter((week) => isWeekAccessible(week));
}

export async function getJourneyWeeksForDisplay(journeyId: string) {
    const weeks = await getPublishedWeeksByJourneyId(journeyId);
    return weeks.map(enrichUserWeek);
}

export async function getJourneyWeekByNumber(
    journeyId: string,
    weekNumber: string,
    includeUnreleased = false
) {
    const supabase = await createSupabaseServerClient();
    const week = await safeSingleQuery<Week>(
        `getJourneyWeekByNumber:${journeyId}:${weekNumber}`,
        async () =>
            await supabase
                .from("weeks")
                .select("*")
                .eq("journey_id", journeyId)
                .eq("week_number", weekNumber)
                .eq("is_published", true)
                .is("deleted_at", null)
                .maybeSingle<Week>()
    );

    if (!week) {
        return null;
    }

    return includeUnreleased || isWeekAccessible(week) ? week : null;
}

export async function getAdminJourneys() {
    return getAllJourneysForAdmin();
}

export async function getAdminWeeks() {
    return getAllWeeksForAdmin();
}

export {
    getAdminJourneyStatus,
    getAdminWeekStatus,
};
