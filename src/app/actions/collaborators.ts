"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

function collaborateRedirect(type: "error" | "success", message: string) {
    const params = new URLSearchParams({ [type]: message });
    return `/colaborar?${params.toString()}`;
}

export async function applyCollaboratorAction(formData: FormData) {
    const payload = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        whatsapp: String(formData.get("whatsapp") ?? "").trim(),
        church: String(formData.get("church") ?? "").trim(),
        city: String(formData.get("city") ?? "").trim(),
        is_christian: formData.get("is_christian") === "on",
        available_for_meetings: formData.get("available_for_meetings") === "on",
        kingdom_purpose: String(formData.get("kingdom_purpose") ?? "").trim(),
        skills: String(formData.get("skills") ?? "").trim(),
        why_join: String(formData.get("why_join") ?? "").trim(),
    };

    if (
        !payload.name ||
        !payload.email ||
        !payload.kingdom_purpose ||
        !payload.skills ||
        !payload.why_join
    ) {
        redirect(
            collaborateRedirect(
                "error",
                "Preencha os campos essenciais antes de enviar sua aplicação."
            )
        );
    }

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("collaborator_applications").insert(payload);

    if (error) {
        redirect(collaborateRedirect("error", error.message));
    }

    revalidatePath("/colaborar");
    redirect(
        collaborateRedirect(
            "success",
            "Recebemos sua aplicação. Ela será discernida com atenção, seriedade e oração."
        )
    );
}
