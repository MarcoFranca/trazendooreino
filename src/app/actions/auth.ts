"use server";

import { redirect } from "next/navigation";

import { ensureProfileForUser } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

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

    if (data.session && data.user) {
        await ensureProfileForUser(data.user);
        redirect("/app");
    }

    redirect(
        buildRedirect(
            "/login",
            "success",
            "Cadastro recebido. Confirme seu email para liberar a entrada, se essa etapa estiver ativa no Supabase."
        )
    );
}

export async function logoutAction() {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect("/");
}
