import Link from "next/link";
import { Archive, Eye, EyeOff, FileText, Pencil, Plus, RadioTower } from "lucide-react";

import {
    deleteWeekAction,
    setCurrentWeekAction,
    toggleWeekPublishedAction,
} from "@/app/actions/admin";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { formatDateTime, isReleased } from "@/lib/format";
import { getAdminJourneys, getAdminWeeks } from "@/lib/journeys";

type AdminWeeksProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminWeeksPage({ searchParams }: AdminWeeksProps) {
    const [params, journeys, allWeeks] = await Promise.all([
        searchParams,
        getAdminJourneys(),
        getAdminWeeks(),
    ]);
    const success = typeof params.success === "string" ? params.success : null;
    const error = typeof params.error === "string" ? params.error : null;
    const journeyFilter = typeof params.journey === "string" ? params.journey : "";
    const weeks = journeyFilter
        ? allWeeks.filter((week) => week.journey_id === journeyFilter)
        : allWeeks;

    return (
        <PageShell>
            <section className="space-y-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <SectionHeader
                        eyebrow="Admin · semanas"
                        title="Calendario editorial das semanas."
                        description="Controle publicacao, liberacao, PDF oficial, video e semana atual."
                    />
                    <Button asChild className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                        <Link href="/admin/semanas/nova">
                            <Plus className="size-4" />
                            Nova semana
                        </Link>
                    </Button>
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

                <form className="rounded-[1.5rem] border border-[#d6b56d]/12 bg-black/30 p-5">
                    <label className="grid gap-2 text-sm text-white/62 md:max-w-md">
                        Filtrar por jornada
                        <select
                            name="journey"
                            defaultValue={journeyFilter}
                            className="sacred-input h-11 rounded-xl px-4"
                        >
                            <option value="">Todas as jornadas</option>
                            {journeys.map((journey) => (
                                <option key={journey.id} value={journey.id}>
                                    {journey.title}
                                </option>
                            ))}
                        </select>
                    </label>
                    <Button className="mt-4 h-10 rounded-full bg-[#d6b56d] px-5 text-black hover:bg-[#e7c979]">
                        Aplicar filtro
                    </Button>
                </form>

                <div className="space-y-4">
                    {weeks.map((week) => {
                        const released = isReleased(week.release_at);

                        return (
                            <SacredCard key={week.id}>
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                    <div>
                                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                            {week.journeys?.title ?? "Jornada"} · semana {week.week_number}
                                        </p>
                                        <h2 className="font-display mt-3 text-3xl text-white">
                                            {week.title}
                                        </h2>
                                        <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-white/34">
                                            <span>{week.is_published ? "publicada" : "rascunho"}</span>
                                            <span>{released ? "liberada" : "agendada"}</span>
                                            {week.is_current ? <span>semana atual</span> : null}
                                            {week.pdf_url ? <span>pdf pronto</span> : <span>sem pdf</span>}
                                        </div>
                                        <p className="mt-3 text-sm leading-7 text-white/50">
                                            Liberacao: {formatDateTime(week.release_at)}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {week.pdf_url ? (
                                            <Button asChild variant="outline" className="rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] text-white hover:bg-[#d6b56d]/[0.08]">
                                                <a href={week.pdf_url} target="_blank" rel="noreferrer">
                                                    <FileText className="size-4" />
                                                    PDF
                                                </a>
                                            </Button>
                                        ) : null}
                                        <Button asChild variant="outline" className="rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] text-white hover:bg-[#d6b56d]/[0.08]">
                                            <Link href={`/admin/semanas/${week.id}/editar`}>
                                                <Pencil className="size-4" />
                                                Editar
                                            </Link>
                                        </Button>
                                        <form action={setCurrentWeekAction}>
                                            <input type="hidden" name="week_id" value={week.id} />
                                            <input type="hidden" name="journey_id" value={week.journey_id} />
                                            <Button variant="outline" className="rounded-full border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]">
                                                <RadioTower className="size-4" />
                                                {week.is_current ? "Atual" : "Marcar atual"}
                                            </Button>
                                        </form>
                                        <form action={toggleWeekPublishedAction}>
                                            <input type="hidden" name="id" value={week.id} />
                                            <input
                                                type="hidden"
                                                name="is_published"
                                                value={String(week.is_published)}
                                            />
                                            <Button variant="outline" className="rounded-full border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]">
                                                {week.is_published ? (
                                                    <EyeOff className="size-4" />
                                                ) : (
                                                    <Eye className="size-4" />
                                                )}
                                                {week.is_published ? "Despublicar" : "Publicar"}
                                            </Button>
                                        </form>
                                        <form action={deleteWeekAction}>
                                            <input type="hidden" name="id" value={week.id} />
                                            <Button variant="destructive" className="rounded-full px-4">
                                                <Archive className="size-4" />
                                                Arquivar
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </SacredCard>
                        );
                    })}
                </div>

                {!weeks.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Nenhuma semana encontrada
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            Crie uma semana ou ajuste o filtro de jornada.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
