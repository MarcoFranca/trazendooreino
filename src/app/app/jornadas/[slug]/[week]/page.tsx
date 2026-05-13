import { notFound } from "next/navigation";
import { CalendarDays, Download, PlayCircle } from "lucide-react";

import { submitWeekQuestionAction } from "@/app/actions/journeys";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { ResourceCard } from "@/components/journey/resource-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatDateTime } from "@/lib/format";
import { getJourneyBySlug, getJourneyWeekByNumber } from "@/lib/journeys";

type WeekPageProps = {
    params: Promise<{ slug: string; week: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AuthenticatedWeekPage({
    params,
    searchParams,
}: WeekPageProps) {
    const [{ slug, week }, query] = await Promise.all([params, searchParams]);
    const journey = await getJourneyBySlug(slug);

    if (!journey) {
        notFound();
    }

    const currentWeek = await getJourneyWeekByNumber(journey.id, week);

    if (!currentWeek) {
        notFound();
    }

    const success = typeof query.success === "string" ? query.success : null;
    const error = typeof query.error === "string" ? query.error : null;
    const returnTo = `/app/jornadas/${slug}/${week}`;

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow={`${journey.title} · semana ${currentWeek.week_number}`}
                    title={
                        <>
                            {currentWeek.title}
                            <span className="block text-[#e8d7ad]">
                                Permanecer no texto, olhar para Cristo, discernir o Reino.
                            </span>
                        </>
                    }
                    description={currentWeek.summary ?? ""}
                />

                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                    <SacredCard>
                        <div className="space-y-6">
                            <div>
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Leitura principal
                                </p>
                                <p className="mt-3 text-base leading-8 text-white/70">
                                    {currentWeek.reading}
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4">
                                    <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                        Foco em Cristo
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-white/62">
                                        {currentWeek.christ_focus}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4">
                                    <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                        Foco no Reino
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-white/62">
                                        {currentWeek.kingdom_focus}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-[1.5rem] border border-[#d6b56d]/10 bg-black/24 p-5">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Webinar
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/60">
                                    {formatDateTime(currentWeek.webinar_date)}
                                </p>
                            </div>
                        </div>
                    </SacredCard>

                    <div className="grid gap-4">
                        <ResourceCard
                            icon={Download}
                            title="PDF complementar"
                            text="Material editorial da semana para leitura, anotações e aprofundamento."
                            href={currentWeek.pdf_url}
                        />
                        <ResourceCard
                            icon={PlayCircle}
                            title="Vídeo e gravação"
                            text="Acesse a preparação ou o encontro já gravado."
                            href={currentWeek.video_url}
                        />
                        <ResourceCard
                            icon={CalendarDays}
                            title="Data de liberação"
                            text={formatDateTime(currentWeek.release_at)}
                        />
                    </div>
                </div>

                <SacredCard>
                    <form action={submitWeekQuestionAction} className="space-y-4">
                        <input type="hidden" name="week_id" value={currentWeek.id} />
                        <input type="hidden" name="return_to" value={returnTo} />

                        <div>
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Pergunta da semana
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/56">
                                Envie uma pergunta que nasça do texto, do tema ou da conexão com
                                Cristo e o Reino.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="question">Sua pergunta</Label>
                            <Textarea
                                id="question"
                                name="question"
                                required
                                className="sacred-input min-h-32 rounded-[1.4rem] px-4 py-3"
                            />
                        </div>

                        {success ? (
                            <div className="rounded-2xl border border-emerald-500/18 bg-emerald-500/8 px-4 py-3 text-sm text-[#d7f7de]">
                                {success}
                            </div>
                        ) : null}

                        {error ? (
                            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm text-[#ead8ad]">
                                {error}
                            </div>
                        ) : null}

                        <Button className="cta-shimmer h-12 rounded-full bg-[#d6b56d] px-7 text-sm font-semibold text-black hover:bg-[#e7c979]">
                            Enviar pergunta
                        </Button>
                    </form>
                </SacredCard>
            </section>
        </PageShell>
    );
}
