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
import { genesisWeek00 } from "@/lib/genesis-week-00";
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
    const showGenesisWeek00DeepDive =
        slug === "genesis" &&
        (currentWeek.slug === "00" || currentWeek.week_number === "00");

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

                {showGenesisWeek00DeepDive ? (
                    <div className="space-y-6">
                        <SacredCard>
                            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                                <div>
                                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                        Se aprofunde
                                    </p>
                                    <h2 className="font-display mt-5 text-4xl leading-tight tracking-[-0.04em] text-white">
                                        O estudo completo desta semana continua alem do resumo.
                                    </h2>
                                    <p className="mt-5 text-sm leading-8 text-white/58">
                                        A Semana 00 nao serve apenas como abertura da jornada. Ela
                                        ajusta a lente com que todo Genesis sera lido: Cristo no
                                        centro, Escritura como regra, Reino como mensagem e
                                        transformacao como fruto.
                                    </p>
                                </div>

                                <div className="rounded-[1.7rem] border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-6">
                                    <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                        Tese central
                                    </p>
                                    <p className="mt-4 text-base leading-8 text-[#ead8ad]/84">
                                        {genesisWeek00.thesis}
                                    </p>
                                </div>
                            </div>
                        </SacredCard>

                        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                            <SacredCard>
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Antes de seguir
                                </p>
                                <div className="mt-5 space-y-4">
                                    {genesisWeek00.intro.map((paragraph) => (
                                        <p key={paragraph} className="text-sm leading-8 text-white/60">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </SacredCard>

                            <SacredCard>
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Leituras que orientam a lente
                                </p>
                                <div className="mt-5 grid gap-3">
                                    {genesisWeek00.readings.map((reading) => (
                                        <div
                                            key={reading.reference}
                                            className="rounded-[1.35rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4"
                                        >
                                            <p className="text-sm text-[#e8cc84]">{reading.reference}</p>
                                            <p className="mt-2 text-sm leading-7 text-white/56">
                                                {reading.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </SacredCard>
                        </div>

                        <div className="grid gap-5">
                            {genesisWeek00.sections.map((section) => (
                                <SacredCard key={section.id}>
                                    <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
                                        <div>
                                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                                {section.eyebrow}
                                            </p>
                                            <h3 className="font-display mt-5 text-3xl leading-tight tracking-[-0.04em] text-white">
                                                {section.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-5">
                                            {section.body.map((paragraph) => (
                                                <p
                                                    key={paragraph}
                                                    className="text-sm leading-8 text-white/60"
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}

                                            {section.bullets ? (
                                                <div className="grid gap-3 md:grid-cols-2">
                                                    {section.bullets.map((item) => (
                                                        <div
                                                            key={item}
                                                            className="rounded-[1.25rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4 text-sm leading-7 text-white/58"
                                                        >
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : null}

                                            {section.questions ? (
                                                <div className="rounded-[1.45rem] border border-[#d6b56d]/12 bg-black/24 p-5">
                                                    <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                                        Perguntas de leitura
                                                    </p>
                                                    <div className="mt-4 space-y-3">
                                                        {section.questions.map((item) => (
                                                            <p
                                                                key={item}
                                                                className="text-sm leading-7 text-white/58"
                                                            >
                                                                {item}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </SacredCard>
                            ))}
                        </div>

                        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
                            <SacredCard>
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Filtros da jornada
                                </p>
                                <div className="mt-5 grid gap-3">
                                    {genesisWeek00.filters.map((filter, index) => (
                                        <div
                                            key={filter.question}
                                            className="rounded-[1.3rem] border border-[#d6b56d]/10 bg-black/22 p-4"
                                        >
                                            <p className="text-sm leading-7 text-white/72">
                                                <span className="mr-2 text-[#e8cc84]">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                {filter.question}
                                            </p>
                                            <p className="mt-2 text-sm leading-7 text-white/52">
                                                {filter.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </SacredCard>

                            <div className="grid gap-5">
                                <SacredCard>
                                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                        Perguntas de reflexao
                                    </p>
                                    <div className="mt-5 grid gap-3">
                                        {genesisWeek00.reflectionQuestions.slice(0, 5).map((question) => (
                                            <div
                                                key={question}
                                                className="rounded-[1.25rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4 text-sm leading-7 text-white/58"
                                            >
                                                {question}
                                            </div>
                                        ))}
                                    </div>
                                </SacredCard>

                                <SacredCard>
                                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                        Oracao da semana
                                    </p>
                                    <div className="mt-5 space-y-3">
                                        {genesisWeek00.prayer.slice(0, 6).map((line) => (
                                            <p key={line} className="text-sm leading-8 text-white/62">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-6 rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] text-white hover:bg-[#d6b56d]/[0.08]"
                                    >
                                        <Link href="/genesis/00/pdf">Abrir material editorial completo</Link>
                                    </Button>
                                </SacredCard>
                            </div>
                        </div>
                    </div>
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
