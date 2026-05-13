import "server-only";

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

import { getSupabaseEnv } from "@/lib/supabase/shared";

function getSupabaseSecretKey() {
    const secretKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!secretKey) {
        throw new Error(
            "Missing SUPABASE_SERVICE_ROLE_KEY. Use the Supabase Secret key (sb_secret_...) and keep it server-only."
        );
    }

    if (!secretKey.startsWith("sb_secret_")) {
        console.warn(
            "SUPABASE_SERVICE_ROLE_KEY should receive the Supabase Secret key (sb_secret_...)."
        );
    }

    return secretKey;
}

export async function createSupabaseServerClient() {
    const cookieStore = await cookies();
    const { url, publishableKey } = getSupabaseEnv();

    return createServerClient(url, publishableKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        cookieStore.set(name, value, options);
                    });
                } catch {
                    // Server Components can't always write cookies. Middleware and Server Actions cover refreshes.
                }
            },
        },
    });
}

export function createSupabaseAdminClient() {
    const { url } = getSupabaseEnv();
    const secretKey = getSupabaseSecretKey();

    return createClient(url, secretKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
}
