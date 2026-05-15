import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, Sparkles } from "lucide-react";

import { StatusBadge } from "@/components/journey/status-badge";
import type { UserWeek } from "@/lib/journeys";
import { cn } from "@/lib/utils";

type WeekCardProps = {
    slug: string;
    week: UserWeek;
    href: string;
    locked?: boolean;
};

export function WeekCard({ slug, week, href, locked = false }: WeekCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative overflow-hidden rounded-[1.65rem] border p-6 transition duration-500",
                locked
                    ? "cursor-not-allowed border-white/8 bg-black/28 opacity-70"
                    : week.is_current
                      ? "border-[#d6b56d]/28 bg-[#d6b56d]/[0.06] shadow-[0_0_44px_rgba(214,181,109,0.07)] hover:border-[#d6b56d]/42"
                      : "border-[#d6b56d]/10 bg-black/36 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.035]"
            )}
        >
            <div className="mb-7 flex items-center justify-between">
                <span className="sacred-inscription text-[10px] text-[#d6b56d]/80">
                    {slug} · semana {week.week_number}
                </span>

                <div className="flex size-8 items-center justify-center rounded-full border border-[#d6b56d]/14 bg-black/20">
                    {locked ? (
                        <Lock className="size-4 text-white/28" />
                    ) : week.is_current ? (
                        <Sparkles className="size-4 text-[#d6b56d]" />
                    ) : (
                        <CheckCircle2 className="size-4 text-[#d6b56d]" />
                    )}
                </div>
            </div>

            <StatusBadge
                status={locked ? "locked" : week.status === "current" ? "current" : week.status}
            />

            <h3 className="font-display mt-5 text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                {week.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/46">{week.reading}</p>

            <div className="mt-6 h-px bg-gradient-to-r from-[#d6b56d]/26 to-transparent" />

            <p className="mt-5 text-sm leading-7 text-white/54">
                <span className="text-[#e8d7ad]/88">Cristo:</span> {week.christ_focus}
            </p>

            <p className="mt-3 text-sm leading-7 text-white/54">
                <span className="text-[#e8d7ad]/88">Reino:</span> {week.kingdom_focus}
            </p>

            {!locked ? (
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-[#e8cc84]">
                    Abrir semana
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </div>
            ) : null}
        </Link>
    );
}
