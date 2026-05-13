"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function normalizeNullable(value: FormDataEntryValue | null) {
    const parsed = String(value ?? "").trim();
    return parsed || null;
}

function toBoolean(value: FormDataEntryValue | null) {
    return value === "on";
}

function revalidateAdmin() {
    revalidatePath("/admin");
    revalidatePath("/admin/jornadas");
    revalidatePath("/admin/semanas");
    revalidatePath("/app");
    revalidatePath("/app/jornadas");
}

export async function saveJourneyAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();

    const id = normalizeNullable(formData.get("id"));
    const payload = {
        slug: String(formData.get("slug") ?? "").trim(),
        title: String(formData.get("title") ?? "").trim(),
        subtitle: normalizeNullable(formData.get("subtitle")),
        description: normalizeNullable(formData.get("description")),
        cover_image: normalizeNullable(formData.get("cover_image")),
        is_published: toBoolean(formData.get("is_published")),
    };

    if (!payload.slug || !payload.title) {
        redirect("/admin/jornadas?error=Informe%20slug%20e%20titulo.");
    }

    const query = id
        ? supabase.from("journeys").update(payload).eq("id", id)
        : supabase.from("journeys").insert(payload);

    const { error } = await query;

    if (error) {
        redirect(`/admin/jornadas?error=${encodeURIComponent(error.message)}`);
    }

    revalidateAdmin();
    redirect("/admin/jornadas?success=Jornada%20salva.");
}

export async function saveWeekAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();

    const id = normalizeNullable(formData.get("id"));
    const payload = {
        journey_id: String(formData.get("journey_id") ?? "").trim(),
        week_number: String(formData.get("week_number") ?? "").trim(),
        title: String(formData.get("title") ?? "").trim(),
        reading: normalizeNullable(formData.get("reading")),
        summary: normalizeNullable(formData.get("summary")),
        christ_focus: normalizeNullable(formData.get("christ_focus")),
        kingdom_focus: normalizeNullable(formData.get("kingdom_focus")),
        pdf_url: normalizeNullable(formData.get("pdf_url")),
        video_url: normalizeNullable(formData.get("video_url")),
        webinar_date: normalizeNullable(formData.get("webinar_date")),
        release_at: normalizeNullable(formData.get("release_at")),
        is_current: toBoolean(formData.get("is_current")),
        is_published: toBoolean(formData.get("is_published")),
    };

    if (!payload.journey_id || !payload.week_number || !payload.title) {
        redirect("/admin/semanas?error=Informe%20jornada,%20semana%20e%20titulo.");
    }

    if (payload.is_current) {
        await supabase
            .from("weeks")
            .update({ is_current: false })
            .eq("journey_id", payload.journey_id);
    }

    const query = id
        ? supabase.from("weeks").update(payload).eq("id", id)
        : supabase.from("weeks").insert(payload);

    const { error } = await query;

    if (error) {
        redirect(`/admin/semanas?error=${encodeURIComponent(error.message)}`);
    }

    revalidateAdmin();
    redirect("/admin/semanas?success=Semana%20salva.");
}

export async function setCurrentWeekAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();

    const weekId = String(formData.get("week_id") ?? "");
    const journeyId = String(formData.get("journey_id") ?? "");

    await supabase.from("weeks").update({ is_current: false }).eq("journey_id", journeyId);
    const { error } = await supabase
        .from("weeks")
        .update({ is_current: true })
        .eq("id", weekId);

    if (error) {
        redirect(`/admin/semanas?error=${encodeURIComponent(error.message)}`);
    }

    revalidateAdmin();
    redirect("/admin/semanas?success=Semana%20atual%20definida.");
}

export async function updateApplicationStatusAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();

    const id = String(formData.get("id") ?? "");
    const status = String(formData.get("status") ?? "");

    const { error } = await supabase
        .from("collaborator_applications")
        .update({ status })
        .eq("id", id);

    if (error) {
        redirect(`/admin/colaboradores?error=${encodeURIComponent(error.message)}`);
    }

    revalidatePath("/admin/colaboradores");
    redirect("/admin/colaboradores?success=Status%20atualizado.");
}
