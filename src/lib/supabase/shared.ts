export function getSupabaseEnv() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !publishableKey) {
        throw new Error(
            "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY with your Supabase Publishable key."
        );
    }

    if (!publishableKey.startsWith("sb_publishable_")) {
        console.warn(
            "NEXT_PUBLIC_SUPABASE_ANON_KEY should receive the Supabase Publishable key (sb_publishable_...)."
        );
    }

    return { url, publishableKey };
}
