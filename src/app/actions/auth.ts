"use server";

import { redirect } from "next/navigation";

import { createSupabaseAdminClient, createSupabaseServerClient } from "@/lib/supabase/server";

function buildRedirect(path: string, key: "error" | "success", message: string) {
    const params = new URLSearchParams({ [key]: message });
    return `${path}?${params.toString()}`;
}

export async function loginAction(formData: FormData) {
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const next = String(formData.get("next") ?? "/app");

    if (!email || !password) {
        redirect(buildRedirect("/login", "error", "Informe email e senha."));
    }

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        redirect(buildRedirect("/login", "error", error.message));
    }

    redirect(next.startsWith("/") ? next : "/app");
}

export async function signupAction(formData: FormData) {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!name || !email || !password) {
        redirect(buildRedirect("/cadastro", "error", "Preencha nome, email e senha."));
    }

    const supabase = await createSupabaseServerClient();
    const admin = createSupabaseAdminClient();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            },
        },
    });

    if (error) {
        redirect(buildRedirect("/cadastro", "error", error.message));
    }

    if (data.user?.id) {
        await admin.from("profiles").upsert({
            id: data.user.id,
            name,
            email,
        });
    }

    redirect("/app");
}

export async function logoutAction() {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect("/");
}
