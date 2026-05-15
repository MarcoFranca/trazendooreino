import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Download, PlayCircle } from "lucide-react";

import { submitWeekQuestionAction } from "@/app/actions/journeys";
import { StatusBadge } from "@/components/journey/status-badge";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { ResourceCard } from "@/components/journey/resource-card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatDateTime } from "@/lib/format";
import { getJourneyForUser, getWeekForUser } from "@/lib/journeys";

type WeekPageProps = {
    params: Promise<{ slug: string; week: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AuthenticatedWeekPage({
    params,
    searchParams,
}: WeekPageProps) {
    const [{ slug, week }, query] = await Promise.all([params, searchParams]);
    const journey = await getJourneyForUser(slug);

    if (!journey) {
        notFound();
    }

    const currentWeek = await getWeekForUser(slug, week);

    if (!currentWeek) {
        notFound();
    }

    if (!journey.isAccessible || !currentWeek.isAccessible) {
        return (
            <PageShell>
                <section className="space-y-10">
                    <SectionHeader
                        eyebrow={`${journey.title} · semana ${currentWeek.week_number}`}
                        title={
                            <>
                                {currentWeek.title}
                                <span className="block text-[#e8d7ad]">
                                    Esta semana ainda nao foi aberta.
                                </span>
                            </>
                        }
                        description={currentWeek.summary ?? ""}
                    />

                    <SacredCard>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <StatusBadge
                                status={
                                    currentWeek.status === "upcoming"
                                        ? "upcoming"
                                        : "locked"
                                }
                            />
                            {currentWeek.availableAt ? (
                                <p className="text-sm leading-7 text-[#e8d7ad]">
                                    Esta semana sera aberta em{" "}
                                    {formatDateTime(currentWeek.availableAt)}.
                                </p>
                            ) : null}
                        </div>

                        <p className="mt-6 text-sm leading-8 text-white/58">
                            O mapa editorial ja esta preparado, mas o conteudo completo desta
                            semana sera liberado somente quando chegar o tempo definido para a
                            jornada.
                        </p>

                        <Button
                            asChild
                            variant="outline"
                            className="mt-8 rounded-full border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                        >
                            <Link href={`/app/jornadas/${journey.slug}`}>Voltar para a jornada</Link>
                        </Button>
                    </SacredCard>
                </section>
            </PageShell>
        );
    }

    const success = typeof query.success === "string" ? query.success : null;
    const error = typeof query.error === "string" ? query.error : null;
    const returnTo = `/app/jornadas/${slug}/${currentWeek.slug ?? currentWeek.week_number}`;

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
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Leitura principal
                                </p>
                                <StatusBadge
                                    status={
                                        currentWeek.status === "current"
                                            ? "current"
                                            : "available"
                                    }
                                />
                            </div>

                            <p className="text-base leading-8 text-white/70">
                                {currentWeek.reading ?? "Leitura ainda nao informada."}
                            </p>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4">
                                    <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                        Foco em Cristo
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-white/62">
                                        {currentWeek.christ_focus ??
                                            "O foco em Cristo sera adicionado pela equipe editorial."}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4">
                                    <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                        Foco no Reino
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-white/62">
                                        {currentWeek.kingdom_focus ??
                                            "O foco no Reino sera adicionado pela equipe editorial."}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-[1.5rem] border border-[#d6b56d]/10 bg-black/24 p-5">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Webinar
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/60">
                                    {currentWeek.webinar_date
                                        ? formatDateTime(currentWeek.webinar_date)
                                        : "Data ainda nao definida."}
                                </p>
                            </div>
                        </div>
                    </SacredCard>

                    <div className="grid gap-4">
                        <ResourceCard
                            icon={Download}
                            title="Baixar PDF"
                            text={
                                currentWeek.pdf_url
                                    ? "Material oficial da semana para leitura e estudo."
                                    : "PDF em preparacao."
                            }
                            href={currentWeek.pdf_url}
                        />
                        <ResourceCard
                            icon={PlayCircle}
                            title="Assistir encontro"
                            text={
                                currentWeek.video_url
                                    ? "Acesse a preparacao ou o encontro gravado."
                                    : "Encontro em preparacao."
                            }
                            href={currentWeek.video_url}
                        />
                        <ResourceCard
                            icon={CalendarDays}
                            title="Data de liberacao"
                            text={
                                currentWeek.release_at
                                    ? formatDateTime(currentWeek.release_at)
                                    : "Liberacao ainda nao definida."
                            }
                        />
                    </div>
                </div>

                {currentWeek.content ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Conteudo da semana
                        </p>
                        <div className="mt-5 space-y-4">
                            {currentWeek.content.split("\n").map((paragraph) =>
                                paragraph.trim() ? (
                                    <p key={paragraph} className="text-sm leading-8 text-white/60">
                                        {paragraph}
                                    </p>
                                ) : null
                            )}
                        </div>
                    </SacredCard>
                ) : null}

                <SacredCard>
                    <form action={submitWeekQuestionAction} className="space-y-4">
                        <input type="hidden" name="week_id" value={currentWeek.id} />
                        <input type="hidden" name="return_to" value={returnTo} />

                        <div>
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Pergunta da semana
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/56">
                                Envie uma pergunta que nasca do texto, do tema ou da conexao com
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
