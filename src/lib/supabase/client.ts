"use client";

import { createBrowserClient } from "@supabase/ssr";

import { getSupabaseEnv } from "@/lib/supabase/shared";

export function createSupabaseBrowserClient() {
    const { url, publishableKey } = getSupabaseEnv();

    return createBrowserClient(url, publishableKey);
}
