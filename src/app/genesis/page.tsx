import Link from "next/link";
import { ArrowRight, Crown, ScrollText, Sparkles } from "lucide-react";

import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { WeekCard } from "@/components/journey/week-card";
import { Button } from "@/components/ui/button";
import { getViewer } from "@/lib/auth";
import {
    currentGenesisWeek,
    genesisJourney,
    genesisOutcomes,
    genesisWeeks as fallbackWeeks,
} from "@/lib/genesis-journey-data";
import { formatDateTime } from "@/lib/format";
import type { UserWeek } from "@/lib/journeys";
import { getPublicJourneyPreviewBySlug } from "@/lib/journeys";

export default async function GenesisPage() {
    const [{ user }, preview] = await Promise.all([
        getViewer(),
        getPublicJourneyPreviewBySlug("genesis"),
    ]);

    const previewWeeks = preview?.weeks ?? [];
    const weeks: UserWeek[] =
        previewWeeks.length > 0
            ? previewWeeks
            : fallbackWeeks.map((week) => ({
                  id: week.week,
                  journey_id: "genesis",
                  week_number: week.week,
                  slug: week.week,
                  title: week.title,
                  reading: week.reading,
                  summary: null,
                  content: null,
                  christ_focus: week.christ,
                  kingdom_focus: week.kingdom,
                  pdf_url: null,
                  video_url: null,
                  webinar_date: null,
                  release_at: null,
                  is_current: week.status === "current",
                  is_published: week.status !== "locked",
                  created_at: "",
                  isAccessible: week.status !== "locked",
                  status:
                      week.status === "current"
                          ? "current"
                          : week.status === "available"
                            ? "available"
                            : "upcoming" as const,
                  availableAt: null,
              }));

    const currentPreviewWeek =
        weeks.find((week) => week.status === "current") ??
        weeks.find((week) => week.isAccessible) ??
        null;

    const currentHref = user
        ? currentPreviewWeek
            ? `/app/jornadas/genesis/${currentPreviewWeek.slug ?? currentPreviewWeek.week_number}`
            : "/app/jornadas/genesis"
        : "/genesis/00";
    const seasonHref = user ? "/app/jornadas/genesis" : "/genesis";

    return (
        <PageShell>
            <section className="space-y-12">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                    <div>
                        <SectionHeader
                            eyebrow={`${genesisJourney.subtitle} · ${genesisJourney.duration}`}
                            title={
                                <>
                                    Genesis
                                    <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text text-transparent">
                                        Do Eden a Promessa.
                                    </span>
                                </>
                            }
                            description={genesisJourney.mainText}
                        />

                        <div className="mt-8 border-l border-[#d6b56d]/28 pl-5">
                            <p className="font-scroll text-sm leading-7 tracking-[0.04em] text-[#e8d7ad]">
                                {genesisJourney.identity}
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                className="cta-shimmer h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black shadow-[0_0_40px_rgba(214,181,109,0.2)] hover:bg-[#e7c979]"
                            >
                                <Link href={currentHref}>
                                    Comecar pela semana atual
                                    <ArrowRight className="size-5" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-14 rounded-full border-white/12 bg-white/[0.035] px-8 text-sm text-white backdrop-blur-xl hover:bg-white/[0.075] hover:text-white"
                            >
                                <Link href="#mapa-genesis">Ver mapa completo</Link>
                            </Button>
                        </div>
                    </div>

                    <SacredCard>
                        <div className="mb-7 flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 shadow-[0_0_34px_rgba(214,181,109,0.1)]">
                            <Crown className="size-5 text-[#d6b56d]" />
                        </div>

                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Semana em foco
                        </p>

                        <h2 className="font-display mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                            Semana {currentPreviewWeek?.week_number ?? currentGenesisWeek.week}
                            <span className="block text-[#e8d7ad]">
                                {currentPreviewWeek?.title ?? currentGenesisWeek.title}
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-white/58">
                            Leitura principal:{" "}
                            {currentPreviewWeek?.reading ?? currentGenesisWeek.reading}
                        </p>

                        <div className="mt-8 grid gap-3">
                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Cristo no texto
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/68">
                                    {currentPreviewWeek?.christ_focus ?? currentGenesisWeek.christ}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Reino no texto
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/68">
                                    {currentPreviewWeek?.kingdom_focus ?? currentGenesisWeek.kingdom}
                                </p>
                            </div>
                        </div>
                    </SacredCard>
                </div>

                <section id="mapa-genesis" className="space-y-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mx-auto mb-6 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9">
                            <ScrollText className="size-4.5 text-[#d6b56d]" />
                        </div>

                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Mapa da temporada
                        </p>

                        <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                            15 encontros para atravessar Genesis.
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {weeks.map((week) => (
                            <div key={week.id} className="space-y-3">
                                <WeekCard
                                    slug="genesis"
                                    week={week}
                                    href={
                                        !week.isAccessible
                                            ? seasonHref
                                            : week.week_number === "00"
                                              ? "/genesis/00"
                                              : `/genesis/${week.slug ?? week.week_number}`
                                    }
                                    locked={!week.isAccessible}
                                />
                                {!week.isAccessible && week.availableAt ? (
                                    <p className="px-2 text-xs uppercase tracking-[0.16em] text-white/34">
                                        Liberacao: {formatDateTime(week.availableAt)}
                                    </p>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid gap-5 lg:grid-cols-2">
                    <SacredCard>
                        <Sparkles className="size-5 text-[#d6b56d]" />
                        <h2 className="font-display mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white">
                            O que essa jornada precisa formar em voce.
                        </h2>
                        <p className="mt-6 text-base leading-8 text-white/58">
                            {genesisJourney.objective}
                        </p>
                    </SacredCard>

                    <div className="grid gap-3">
                        {genesisOutcomes.map((outcome) => (
                            <div
                                key={outcome}
                                className="rounded-2xl border border-[#d6b56d]/10 bg-black/34 p-5"
                            >
                                <p className="text-sm leading-7 text-white/58">{outcome}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
