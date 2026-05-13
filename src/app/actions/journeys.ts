"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireUser } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function backTo(path: string, message: string, type: "error" | "success" = "success") {
    const params = new URLSearchParams({ [type]: message });
    return `${path}?${params.toString()}`;
}

export async function submitWeekQuestionAction(formData: FormData) {
    const { user } = await requireUser();
    const question = String(formData.get("question") ?? "").trim();
    const weekId = String(formData.get("week_id") ?? "");
    const returnTo = String(formData.get("return_to") ?? "/app");

    if (!question || !weekId) {
        redirect(backTo(returnTo, "Escreva sua pergunta antes de enviar.", "error"));
    }

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("week_questions").insert({
        week_id: weekId,
        user_id: user.id,
        question,
    });

    if (error) {
        redirect(backTo(returnTo, error.message, "error"));
    }

    revalidatePath(returnTo);
    redirect(backTo(returnTo, "Pergunta recebida com reverência."));
}
