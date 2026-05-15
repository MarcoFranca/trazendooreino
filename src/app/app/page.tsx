import Link from "next/link";
import { ArrowRight, BookOpen, MessageCircle, ScrollText } from "lucide-react";

import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { getViewer } from "@/lib/auth";
import { formatLongDate } from "@/lib/format";
import {
    getCurrentJourneyWithWeek,
    getJourneysForUser,
    getViewerQuestions,
} from "@/lib/journeys";

export default async function AppHomePage() {
    const [{ profile }, currentState, journeys] = await Promise.all([
        getViewer(),
        getCurrentJourneyWithWeek(),
        getJourneysForUser(),
    ]);

    const questions = profile ? await getViewerQuestions(profile.id) : [];
    const currentHref =
        currentState.journey && currentState.currentWeek
            ? `/app/jornadas/${currentState.journey.slug}/${currentState.currentWeek.week_number}`
            : "/app/jornadas";

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Área da jornada"
                    title={
                        <>
                            Paz para continuar.
                            <span className="block text-[#e8d7ad]">
                                {profile?.name ?? "Sua casa de leitura"} dentro da plataforma.
                            </span>
                        </>
                    }
                    description="Aqui a jornada segue com permanência, ritmo, material complementar e espaço para perguntas que nascem do texto."
                />

                <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Semana em foco
                        </p>

                        {currentState.journey && currentState.currentWeek ? (
                            <>
                                <h2 className="font-display mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                                    {currentState.journey.title}
                                    <span className="block text-[#e8d7ad]">
                                        Semana {currentState.currentWeek.week_number} ·{" "}
                                        {currentState.currentWeek.title}
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                    {currentState.currentWeek.summary}
                                </p>

                                <div className="mt-8 grid gap-3 md:grid-cols-2">
                                    <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                        <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                            Leitura
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/68">
                                            {currentState.currentWeek.reading}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                        <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                            Liberada em
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/68">
                                            {formatLongDate(currentState.currentWeek.release_at)}
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    asChild
                                    className="cta-shimmer mt-8 h-12 rounded-full bg-[#d6b56d] px-7 text-sm font-semibold text-black hover:bg-[#e7c979]"
                                >
                                    <Link href={currentHref}>
                                        Continuar semana atual
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                            </>
                        ) : (
                            <p className="mt-6 text-sm leading-7 text-white/56">
                                Ainda não há uma semana atual publicada. Assim que a próxima
                                liberação estiver pronta, ela aparecerá aqui.
                            </p>
                        )}
                    </SacredCard>

                    <div className="grid gap-4">
                        <div className="editorial-panel rounded-[1.7rem] p-6">
                            <BookOpen className="size-5 text-[#d6b56d]" />
                            <h3 className="font-display mt-5 text-2xl text-white">
                                Jornadas disponíveis
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-white/56">
                                {journeys.length} jornadas cadastradas visiveis, com estados de abertura e liberacao.
                            </p>
                            <Link
                                href="/app/jornadas"
                                className="mt-6 inline-flex items-center gap-2 text-sm text-[#e8cc84]"
                            >
                                Ver jornadas
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        <div className="editorial-panel rounded-[1.7rem] p-6">
                            <MessageCircle className="size-5 text-[#d6b56d]" />
                            <h3 className="font-display mt-5 text-2xl text-white">
                                Suas perguntas
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-white/56">
                                {questions.length} perguntas enviadas a partir das semanas já
                                percorridas.
                            </p>
                        </div>

                        <div className="editorial-panel rounded-[1.7rem] p-6">
                            <ScrollText className="size-5 text-[#d6b56d]" />
                            <h3 className="font-display mt-5 text-2xl text-white">
                                Caminho da temporada
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-white/56">
                                A temporada atual continua pública como convite e, aqui dentro,
                                se torna biblioteca viva.
                            </p>
                        </div>
                    </div>
                </div>

                {questions.length ? (
                    <div className="space-y-4">
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Últimas perguntas enviadas
                        </p>

                        <div className="grid gap-4 md:grid-cols-3">
                            {questions.slice(0, 3).map((question) => (
                                <div
                                    key={question.id}
                                    className="rounded-[1.5rem] border border-[#d6b56d]/10 bg-black/28 p-5"
                                >
                                    <p className="text-sm leading-7 text-white/60">
                                        {question.question}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </section>
        </PageShell>
    );
}
