import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Lock, Sparkles } from "lucide-react";

import { StatusBadge } from "@/components/journey/status-badge";
import { formatDateTime } from "@/lib/format";
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
                "group relative flex min-h-[28rem] flex-col overflow-hidden rounded-[1.9rem] border p-6 transition duration-500 md:p-7",
                locked
                    ? "border-white/8 bg-black/24 opacity-86"
                    : week.is_current
                      ? "border-[#d6b56d]/28 bg-[#d6b56d]/[0.06] shadow-[0_0_44px_rgba(214,181,109,0.07)] hover:border-[#d6b56d]/42 hover:bg-[#d6b56d]/[0.075]"
                      : "border-[#d6b56d]/10 bg-black/34 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.035]"
            )}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,181,109,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)] opacity-70"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-10 top-[4.9rem] h-px bg-gradient-to-r from-[#d6b56d]/20 via-[#d6b56d]/10 to-transparent"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-[2.4rem] border-b border-l border-white/7"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 h-20 w-28 rounded-tr-[2rem] border-r border-t border-white/7"
            />

            <div className="relative mb-7 flex items-start justify-between gap-4">
                <div>
                    <span className="sacred-inscription text-[10px] text-[#d6b56d]/80">
                        {slug} / semana {week.week_number}
                    </span>
                    <div className="mt-4">
                        <StatusBadge
                            status={locked ? "locked" : week.status === "current" ? "current" : week.status}
                        />
                    </div>
                </div>

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

            <div className="relative flex flex-1 flex-col">
                <h3 className="font-display text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                    {week.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-white/48">{week.reading}</p>

                <div className="mt-8 h-px bg-gradient-to-r from-[#d6b56d]/24 to-transparent" />

                <p className="mt-6 text-sm leading-8 text-white/54">
                    <span className="text-[#e8d7ad]/88">Cristo:</span> {week.christ_focus}
                </p>

                <p className="mt-3 text-sm leading-8 text-white/54">
                    <span className="text-[#e8d7ad]/88">Reino:</span> {week.kingdom_focus}
                </p>

                <div className="mt-auto pt-8">
                    {locked && week.availableAt ? (
                        <div className="rounded-[1.35rem] border border-white/8 bg-black/22 px-4 py-3">
                            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#e8d7ad]/66">
                                <Clock3 className="size-3.5" />
                                Liberacao
                            </div>
                            <p className="mt-2 text-sm leading-7 text-white/56">
                                {formatDateTime(week.availableAt)}
                            </p>
                        </div>
                    ) : null}

                    <div
                        className={cn(
                            "mt-5 inline-flex items-center gap-2 rounded-[1.8rem] border px-5 py-3 text-sm transition duration-500",
                            locked
                                ? "border-white/8 bg-black/20 text-white/40"
                                : "border-[#d6b56d]/14 bg-[#d6b56d]/[0.05] text-[#e8cc84] group-hover:border-[#d6b56d]/24 group-hover:bg-[#d6b56d]/[0.08]"
                        )}
                    >
                        {locked ? "Aguardando abertura" : "Abrir semana"}
                        {!locked ? (
                            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                        ) : null}
                    </div>
                </div>
            </div>
        </Link>
    );
}
