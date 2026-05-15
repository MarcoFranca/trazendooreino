import Link from "next/link";
import { notFound } from "next/navigation";

import { StatusBadge } from "@/components/journey/status-badge";
import { WeekCard } from "@/components/journey/week-card";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { formatDateTime, formatLongDate } from "@/lib/format";
import { getJourneyForUser, getWeeksForUser } from "@/lib/journeys";

type JourneyDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function JourneyDetailPage({
    params,
}: JourneyDetailPageProps) {
    const { slug } = await params;
    const journey = await getJourneyForUser(slug);

    if (!journey) {
        notFound();
    }

    const weeks = await getWeeksForUser(slug);

    if (!journey.isAccessible) {
        return (
            <PageShell>
                <section className="space-y-10">
                    <SectionHeader
                        eyebrow={journey.subtitle ?? "Jornada"}
                        title={
                            <>
                                {journey.title}
                                <span className="block text-[#e8d7ad]">
                                    Esta jornada ainda sera aberta.
                                </span>
                            </>
                        }
                        description={journey.description ?? ""}
                    />

                    <SacredCard>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <StatusBadge
                                status={journey.status === "upcoming" ? "upcoming" : "locked"}
                            />
                            {journey.availableAt ? (
                                <p className="text-sm leading-7 text-[#e8d7ad]">
                                    Abertura prevista para {formatLongDate(journey.availableAt)}.
                                </p>
                            ) : null}
                        </div>

                        <p className="mt-6 max-w-3xl text-sm leading-8 text-white/58">
                            O conteudo desta jornada ja foi planejado na biblioteca editorial,
                            mas o acesso completo ainda nao foi liberado. Quando a abertura
                            chegar, as semanas serao desbloqueadas dentro desta mesma pagina.
                        </p>

                        <Button
                            asChild
                            variant="outline"
                            className="mt-8 rounded-full border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                        >
                            <Link href="/app/jornadas">Voltar para jornadas</Link>
                        </Button>
                    </SacredCard>
                </section>
            </PageShell>
        );
    }

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow={journey.subtitle ?? "Jornada"}
                    title={
                        <>
                            {journey.title}
                            <span className="block text-[#e8d7ad]">
                                Semanas abertas, programadas e em maturacao.
                            </span>
                        </>
                    }
                    description={journey.description ?? ""}
                />

                <SacredCard>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="text-sm leading-8 text-white/58">
                            Esta jornada revela tudo o que ja foi preparado, mas libera cada
                            semana no seu tempo. O conteudo futuro aparece bloqueado com sua data.
                        </p>
                        {journey.currentWeek ? <StatusBadge status="current" /> : null}
                    </div>
                </SacredCard>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {weeks.map((week) => {
                        const locked = !week.isAccessible;

                        return (
                            <div key={week.id} className="space-y-3">
                                <WeekCard
                                    slug={journey.slug}
                                    week={week}
                                    href={
                                        locked
                                            ? `/app/jornadas/${journey.slug}/${week.slug ?? week.week_number}`
                                            : `/app/jornadas/${journey.slug}/${week.slug ?? week.week_number}`
                                    }
                                    locked={locked}
                                />
                                {locked && week.availableAt ? (
                                    <p className="px-2 text-xs uppercase tracking-[0.16em] text-white/34">
                                        Liberacao: {formatDateTime(week.availableAt)}
                                    </p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>

                {!weeks.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Aguardando calendario
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            Esta jornada ja foi aberta, mas ainda nao possui semanas publicadas.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
