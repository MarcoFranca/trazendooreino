import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

const AUTH_ROUTES = ["/app", "/admin"];
const GUEST_ONLY_ROUTES = ["/login", "/cadastro"];

export async function middleware(request: NextRequest) {
    const response = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value);
                        response.cookies.set(name, value, options);
                    });
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const pathname = request.nextUrl.pathname;
    const isProtectedRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
    const isGuestOnlyRoute = GUEST_ONLY_ROUTES.some((route) =>
        pathname.startsWith(route)
    );

    if (!user && isProtectedRoute) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("next", pathname);
        return NextResponse.redirect(url);
    }

    if (user && isGuestOnlyRoute) {
        const url = request.nextUrl.clone();
        url.pathname = "/app";
        url.search = "";
        return NextResponse.redirect(url);
    }

    return response;
}

export const config = {
    matcher: ["/app/:path*", "/admin/:path*", "/login", "/cadastro"],
};
