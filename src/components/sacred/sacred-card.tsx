import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SacredCardProps = {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
};

export function SacredCard({
    children,
    className,
    innerClassName,
}: SacredCardProps) {
    return (
        <div className={cn("sacred-card rounded-[1.9rem] p-1", className)}>
            <div
                className={cn(
                    "relative overflow-hidden rounded-[1.65rem] border border-white/8 bg-black/50 p-6 md:p-8",
                    innerClassName
                )}
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.11),transparent_42%)]"
                />
                <div className="relative">{children}</div>
            </div>
        </div>
    );
}
