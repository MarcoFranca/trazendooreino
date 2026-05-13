import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

type PageShellProps = {
    children: ReactNode;
    className?: string;
};

export async function PageShell({ children, className }: PageShellProps) {
    return (
        <>
            <SiteHeader />
            <main
                className={cn(
                    "relative overflow-hidden bg-[#030303] px-6 pb-24 pt-18 text-white md:pb-32 md:pt-24",
                    className
                )}
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.09),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(214,181,109,0.05),transparent_44%)]"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(rgba(214,181,109,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(214,181,109,0.05)_1px,transparent_1px)] [background-size:88px_88px]"
                />
                <div className={cn("relative mx-auto max-w-7xl", className)}>{children}</div>
            </main>
            <SiteFooter />
        </>
    );
}
