"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth";
import {
    createSupabaseAdminClient,
    createSupabaseServerClient,
} from "@/lib/supabase/server";

function normalizeNullable(value: FormDataEntryValue | null) {
    const parsed = String(value ?? "").trim();
    return parsed || null;
}

function toBoolean(value: FormDataEntryValue | null) {
    return value === "on" || value === "true";
}

function redirectWith(path: string, type: "error" | "success", message: string) {
    redirect(`${path}?${new URLSearchParams({ [type]: message }).toString()}`);
}

function revalidateEditorialPaths() {
    [
        "/",
        "/admin",
        "/admin/jornadas",
        "/admin/semanas",
        "/app",
        "/app/jornadas",
        "/genesis",
        "/genesis/00",
    ].forEach((path) => revalidatePath(path));
}

function journeyPayload(formData: FormData) {
    return {
        slug: String(formData.get("slug") ?? "").trim(),
        title: String(formData.get("title") ?? "").trim(),
        subtitle: normalizeNullable(formData.get("subtitle")),
        description: normalizeNullable(formData.get("description")),
        cover_image: normalizeNullable(formData.get("cover_image")),
        is_published: toBoolean(formData.get("is_published")),
    };
}

function weekPayload(formData: FormData) {
    return {
        journey_id: String(formData.get("journey_id") ?? "").trim(),
        week_number: String(formData.get("week_number") ?? "").trim(),
        slug: String(formData.get("slug") ?? "").trim(),
        title: String(formData.get("title") ?? "").trim(),
        reading: normalizeNullable(formData.get("reading")),
        summary: normalizeNullable(formData.get("summary")),
        content: normalizeNullable(formData.get("content")),
        christ_focus: normalizeNullable(formData.get("christ_focus")),
        kingdom_focus: normalizeNullable(formData.get("kingdom_focus")),
        pdf_url: normalizeNullable(formData.get("pdf_url")),
        video_url: normalizeNullable(formData.get("video_url")),
        webinar_date: normalizeNullable(formData.get("webinar_date")),
        release_at: normalizeNullable(formData.get("release_at")),
        is_current: toBoolean(formData.get("is_current")),
        is_published: toBoolean(formData.get("is_published")),
    };
}

export async function createJourneyAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const payload = journeyPayload(formData);

    if (!payload.slug || !payload.title) {
        redirectWith("/admin/jornadas/nova", "error", "Informe slug e titulo.");
    }

    const { error } = await supabase.from("journeys").insert(payload);

    if (error) {
        redirectWith("/admin/jornadas/nova", "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/jornadas", "success", "Jornada criada.");
}

export async function updateJourneyAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const id = String(formData.get("id") ?? "");
    const payload = journeyPayload(formData);

    if (!id || !payload.slug || !payload.title) {
        redirectWith("/admin/jornadas", "error", "Dados da jornada incompletos.");
    }

    const { error } = await supabase.from("journeys").update(payload).eq("id", id);

    if (error) {
        redirectWith(`/admin/jornadas/${id}/editar`, "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/jornadas", "success", "Jornada atualizada.");
}

export async function deleteJourneyAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const id = String(formData.get("id") ?? "");

    const { error } = await supabase
        .from("journeys")
        .update({ deleted_at: new Date().toISOString(), is_published: false })
        .eq("id", id);

    if (error) {
        redirectWith("/admin/jornadas", "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/jornadas", "success", "Jornada arquivada.");
}

export async function toggleJourneyPublishedAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const id = String(formData.get("id") ?? "");
    const isPublished = toBoolean(formData.get("is_published"));

    const { error } = await supabase
        .from("journeys")
        .update({ is_published: !isPublished })
        .eq("id", id);

    if (error) {
        redirectWith("/admin/jornadas", "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/jornadas", "success", "Publicacao da jornada atualizada.");
}

export async function createWeekAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const payload = weekPayload(formData);

    if (!payload.journey_id || !payload.week_number || !payload.slug || !payload.title) {
        redirectWith("/admin/semanas/nova", "error", "Informe jornada, semana, slug e titulo.");
    }

    if (payload.is_current) {
        await supabase
            .from("weeks")
            .update({ is_current: false })
            .eq("journey_id", payload.journey_id);
    }

    const { error } = await supabase.from("weeks").insert(payload);

    if (error) {
        redirectWith("/admin/semanas/nova", "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/semanas", "success", "Semana criada.");
}

export async function updateWeekAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const id = String(formData.get("id") ?? "");
    const payload = weekPayload(formData);

    if (!id || !payload.journey_id || !payload.week_number || !payload.slug || !payload.title) {
        redirectWith("/admin/semanas", "error", "Dados da semana incompletos.");
    }

    if (payload.is_current) {
        await supabase
            .from("weeks")
            .update({ is_current: false })
            .eq("journey_id", payload.journey_id);
    }

    const { error } = await supabase.from("weeks").update(payload).eq("id", id);

    if (error) {
        redirectWith(`/admin/semanas/${id}/editar`, "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/semanas", "success", "Semana atualizada.");
}

export async function deleteWeekAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const id = String(formData.get("id") ?? "");

    const { error } = await supabase
        .from("weeks")
        .update({
            deleted_at: new Date().toISOString(),
            is_current: false,
            is_published: false,
        })
        .eq("id", id);

    if (error) {
        redirectWith("/admin/semanas", "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/semanas", "success", "Semana arquivada.");
}

export async function toggleWeekPublishedAction(formData: FormData) {
    await requireAdmin();
    const supabase = await createSupabaseServerClient();
    const id = String(formData.get("id") ?? "");
    const isPublished = toBoolean(formData.get("is_published"));

    const { error } = await supabase
        .from("weeks")
        .update({ is_published: !isPublished })
        .eq("id", id);

    if (error) {
        redirectWith("/admin/semanas", "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/semanas", "success", "Publicacao da semana atualizada.");
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
        redirectWith("/admin/semanas", "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith("/admin/semanas", "success", "Semana atual definida.");
}

export async function uploadWeekPdfAction(formData: FormData) {
    await requireAdmin();
    const admin = createSupabaseAdminClient();
    const weekId = String(formData.get("week_id") ?? "");
    const journeySlug = String(formData.get("journey_slug") ?? "jornada").trim();
    const weekSlug = String(formData.get("week_slug") ?? "semana").trim();
    const file = formData.get("pdf");

    if (!(file instanceof File) || file.size === 0 || !weekId) {
        redirectWith(`/admin/semanas/${weekId}/editar`, "error", "Selecione um PDF valido.");
    }

    const pdfFile = file as File;

    if (pdfFile.type && pdfFile.type !== "application/pdf") {
        redirectWith(`/admin/semanas/${weekId}/editar`, "error", "Envie apenas arquivos PDF.");
    }

    const safeName = `${journeySlug}/${weekSlug}-${Date.now()}.pdf`;
    const { error: uploadError } = await admin.storage
        .from("weekly-pdfs")
        .upload(safeName, pdfFile, {
            contentType: "application/pdf",
            upsert: true,
        });

    if (uploadError) {
        redirectWith(`/admin/semanas/${weekId}/editar`, "error", uploadError.message);
    }

    const { data } = admin.storage.from("weekly-pdfs").getPublicUrl(safeName);
    const { error } = await admin
        .from("weeks")
        .update({ pdf_url: data.publicUrl })
        .eq("id", weekId);

    if (error) {
        redirectWith(`/admin/semanas/${weekId}/editar`, "error", error.message);
    }

    revalidateEditorialPaths();
    redirectWith(`/admin/semanas/${weekId}/editar`, "success", "PDF enviado.");
}

export async function saveJourneyAction(formData: FormData) {
    const id = normalizeNullable(formData.get("id"));
    return id ? updateJourneyAction(formData) : createJourneyAction(formData);
}

export async function saveWeekAction(formData: FormData) {
    const id = normalizeNullable(formData.get("id"));
    return id ? updateWeekAction(formData) : createWeekAction(formData);
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
        redirectWith("/admin/colaboradores", "error", error.message);
    }

    revalidatePath("/admin");
    revalidatePath("/admin/colaboradores");
    redirectWith("/admin/colaboradores", "success", "Status atualizado.");
}
