// Domain-level DTOs used by UI and server loaders.
// The generated database contract lives in src/lib/database.types.ts.
export type ProfileRole = "user" | "admin";
export type ApplicationStatus = "pending" | "approved" | "rejected";

export type Profile = {
    id: string;
    name: string | null;
    email: string | null;
    role: ProfileRole;
    created_at: string;
};

export type Journey = {
    id: string;
    slug: string;
    title: string;
    subtitle: string | null;
    description: string | null;
    cover_image: string | null;
    is_published: boolean;
    created_at: string;
};

export type Week = {
    id: string;
    journey_id: string;
    week_number: string;
    title: string;
    reading: string | null;
    summary: string | null;
    christ_focus: string | null;
    kingdom_focus: string | null;
    pdf_url: string | null;
    video_url: string | null;
    webinar_date: string | null;
    release_at: string | null;
    is_current: boolean;
    is_published: boolean;
    created_at: string;
};

export type WeekQuestion = {
    id: string;
    week_id: string;
    user_id: string;
    question: string;
    created_at: string;
};

export type CollaboratorApplication = {
    id: string;
    name: string;
    email: string;
    whatsapp: string | null;
    church: string | null;
    city: string | null;
    is_christian: boolean | null;
    available_for_meetings: boolean | null;
    kingdom_purpose: string | null;
    skills: string | null;
    why_join: string | null;
    status: ApplicationStatus;
    created_at: string;
};
