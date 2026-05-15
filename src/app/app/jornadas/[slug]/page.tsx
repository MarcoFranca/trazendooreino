import Link from "next/link";
import { notFound } from "next/navigation";

import { StatusBadge } from "@/components/journey/status-badge";
import { WeekCard } from "@/components/journey/week-card";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { formatLongDate } from "@/lib/format";
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
    const heroBackground = journey.cover_image
        ? `linear-gradient(135deg, rgba(3,3,3,0.92), rgba(3,3,3,0.70)), url(${journey.cover_image})`
        : "linear-gradient(135deg, rgba(3,3,3,0.92), rgba(3,3,3,0.70))";

    if (!journey.isAccessible) {
        return (
            <PageShell>
                <section className="space-y-10">
                    <div
                        className="relative overflow-hidden rounded-[2.2rem] border border-[#d6b56d]/12 p-8 md:p-10"
                        style={{
                            backgroundImage: heroBackground,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,181,109,0.15),transparent_34%)]"
                        />
                        <div className="relative">
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
                        </div>
                    </div>

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
                <div
                    className="relative overflow-hidden rounded-[2.2rem] border border-[#d6b56d]/12 p-8 md:p-10"
                    style={{
                        backgroundImage: heroBackground,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,181,109,0.16),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.35))]"
                    />
                    <div className="relative">
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
                    </div>
                </div>

                <SacredCard>
                    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div>
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Mapa editorial da jornada
                            </p>
                            <p className="mt-4 text-sm leading-8 text-white/58">
                                Cada semana aparece desde ja no mapa, mas a leitura completa so e
                                aberta quando chega sua data. Assim, a jornada preserva contexto,
                                ritmo e expectativa sem perder profundidade.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Semana em destaque
                                </p>
                                {journey.currentWeek ? <StatusBadge status="current" /> : null}
                            </div>
                            <p className="font-display mt-4 text-2xl text-white">
                                {journey.currentWeek?.title ?? "Aguardando definicao editorial"}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/56">
                                {journey.currentWeek?.summary ??
                                    "Quando uma semana estiver marcada como atual, ela aparecera aqui como ponto de partida da jornada."}
                            </p>
                        </div>
                    </div>
                </SacredCard>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {weeks.map((week) => {
                        const locked = !week.isAccessible;

                        return (
                            <WeekCard
                                key={week.id}
                                slug={journey.slug}
                                week={week}
                                href={`/app/jornadas/${journey.slug}/${week.slug ?? week.week_number}`}
                                locked={locked}
                            />
                        );
                    })}
                </div>

                {!weeks.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Aguardando calendario
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            Esta jornada aparece na plataforma, mas ainda nao possui semanas
                            publicadas para o usuario.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
