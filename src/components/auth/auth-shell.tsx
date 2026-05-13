import type { ReactNode } from "react";

import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";

type AuthShellProps = {
    eyebrow: string;
    title: ReactNode;
    description: ReactNode;
    children: ReactNode;
};

export function AuthShell({
    eyebrow,
    title,
    description,
    children,
}: AuthShellProps) {
    return (
        <section className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_0.85fr]">
            <div>
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />
                <div className="mt-8 border-l border-[#d6b56d]/24 pl-5">
                    <p className="font-scroll text-sm leading-7 tracking-[0.04em] text-[#e8d7ad]">
                        O acesso existe para sustentar formação, permanência no texto e comunhão ao redor do Reino.
                    </p>
                </div>
            </div>

            <SacredCard>{children}</SacredCard>
        </section>
    );
}
