import { saveWeekAction, setCurrentWeekAction } from "@/app/actions/admin";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toDatetimeLocalValue } from "@/lib/format";
import { getAdminJourneys, getAdminWeeks } from "@/lib/journeys";

type AdminWeeksProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminWeeksPage({ searchParams }: AdminWeeksProps) {
    const [params, journeys, weeks] = await Promise.all([
        searchParams,
        getAdminJourneys(),
        getAdminWeeks(),
    ]);
    const success = typeof params.success === "string" ? params.success : null;
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Admin · semanas"
                    title="Liberar semanas com ordem e ritmo."
                    description="Aqui a equipe define release, recursos, publicação e a semana atual da jornada."
                />

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

                <SacredCard>
                    <form action={saveWeekAction} className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="journey_id">Jornada</Label>
                            <select
                                id="journey_id"
                                name="journey_id"
                                required
                                className="sacred-input h-11 w-full rounded-xl px-4"
                                disabled={!journeys.length}
                            >
                                <option value="">Selecione uma jornada</option>
                                {journeys.map((journey) => (
                                    <option key={journey.id} value={journey.id}>
                                        {journey.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="week_number">Semana</Label>
                            <Input id="week_number" name="week_number" required className="sacred-input h-11 rounded-xl px-4" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="title">Título</Label>
                            <Input id="title" name="title" required className="sacred-input h-11 rounded-xl px-4" />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="reading">Leitura</Label>
                            <Input id="reading" name="reading" className="sacred-input h-11 rounded-xl px-4" />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="summary">Resumo</Label>
                            <Textarea id="summary" name="summary" className="sacred-input min-h-24 rounded-[1.2rem] px-4 py-3" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="christ_focus">Foco em Cristo</Label>
                            <Textarea id="christ_focus" name="christ_focus" className="sacred-input min-h-24 rounded-[1.2rem] px-4 py-3" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="kingdom_focus">Foco no Reino</Label>
                            <Textarea id="kingdom_focus" name="kingdom_focus" className="sacred-input min-h-24 rounded-[1.2rem] px-4 py-3" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="pdf_url">PDF URL</Label>
                            <Input id="pdf_url" name="pdf_url" className="sacred-input h-11 rounded-xl px-4" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="video_url">Vídeo URL</Label>
                            <Input id="video_url" name="video_url" className="sacred-input h-11 rounded-xl px-4" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="webinar_date">Data do webinário</Label>
                            <Input id="webinar_date" name="webinar_date" type="datetime-local" className="sacred-input h-11 rounded-xl px-4" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="release_at">Liberação</Label>
                            <Input id="release_at" name="release_at" type="datetime-local" className="sacred-input h-11 rounded-xl px-4" />
                        </div>

                        <div className="md:col-span-2 flex flex-wrap gap-6">
                            <label className="inline-flex items-center gap-3 text-sm text-white/70">
                                <input type="checkbox" name="is_current" className="size-4" />
                                Marcar como semana atual
                            </label>
                            <label className="inline-flex items-center gap-3 text-sm text-white/70">
                                <input type="checkbox" name="is_published" className="size-4" />
                                Publicar semana
                            </label>
                        </div>

                        <Button className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                            Salvar semana
                        </Button>
                    </form>
                </SacredCard>

                {!journeys.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Crie uma jornada antes da primeira semana
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            As semanas dependem de uma jornada existente. Publique a estrutura da
                            jornada em Admin / Jornadas e depois volte aqui.
                        </p>
                    </SacredCard>
                ) : null}

                <div className="space-y-5">
                    {weeks.map((week) => (
                        <SacredCard key={week.id}>
                            <div className="space-y-5">
                                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                            {week.journeys?.title ?? "Jornada"} · semana {week.week_number}
                                        </p>
                                        <h2 className="font-display mt-3 text-2xl text-white">
                                            {week.title}
                                        </h2>
                                    </div>

                                    <form action={setCurrentWeekAction}>
                                        <input type="hidden" name="week_id" value={week.id} />
                                        <input type="hidden" name="journey_id" value={week.journey_id} />
                                        <Button
                                            variant="outline"
                                            className="rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] px-5 text-white hover:bg-[#d6b56d]/[0.08]"
                                        >
                                            {week.is_current ? "Semana atual" : "Definir como atual"}
                                        </Button>
                                    </form>
                                </div>

                                <form action={saveWeekAction} className="grid gap-5 md:grid-cols-2">
                                    <input type="hidden" name="id" value={week.id} />
                                    <input type="hidden" name="journey_id" value={week.journey_id} />
                                    <div className="space-y-2">
                                        <Label>Semana</Label>
                                        <Input name="week_number" defaultValue={week.week_number} required className="sacred-input h-11 rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Título</Label>
                                        <Input name="title" defaultValue={week.title} required className="sacred-input h-11 rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label>Leitura</Label>
                                        <Input name="reading" defaultValue={week.reading ?? ""} className="sacred-input h-11 rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label>Resumo</Label>
                                        <Textarea name="summary" defaultValue={week.summary ?? ""} className="sacred-input min-h-24 rounded-[1.2rem] px-4 py-3" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Foco em Cristo</Label>
                                        <Textarea name="christ_focus" defaultValue={week.christ_focus ?? ""} className="sacred-input min-h-24 rounded-[1.2rem] px-4 py-3" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Foco no Reino</Label>
                                        <Textarea name="kingdom_focus" defaultValue={week.kingdom_focus ?? ""} className="sacred-input min-h-24 rounded-[1.2rem] px-4 py-3" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>PDF URL</Label>
                                        <Input name="pdf_url" defaultValue={week.pdf_url ?? ""} className="sacred-input h-11 rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Vídeo URL</Label>
                                        <Input name="video_url" defaultValue={week.video_url ?? ""} className="sacred-input h-11 rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Data do webinário</Label>
                                        <Input name="webinar_date" type="datetime-local" defaultValue={toDatetimeLocalValue(week.webinar_date)} className="sacred-input h-11 rounded-xl px-4" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Liberação</Label>
                                        <Input name="release_at" type="datetime-local" defaultValue={toDatetimeLocalValue(week.release_at)} className="sacred-input h-11 rounded-xl px-4" />
                                    </div>
                                    <div className="md:col-span-2 flex flex-wrap gap-6">
                                        <label className="inline-flex items-center gap-3 text-sm text-white/70">
                                            <input type="checkbox" name="is_current" defaultChecked={week.is_current} className="size-4" />
                                            Semana atual
                                        </label>
                                        <label className="inline-flex items-center gap-3 text-sm text-white/70">
                                            <input type="checkbox" name="is_published" defaultChecked={week.is_published} className="size-4" />
                                            Publicada
                                        </label>
                                    </div>
                                    <Button className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                                        Atualizar semana
                                    </Button>
                                </form>
                            </div>
                        </SacredCard>
                    ))}
                </div>

                {!weeks.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Nenhuma semana cadastrada
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            Quando a primeira semana for criada, esta area passara a mostrar os
                            formularios de edicao e o controle de semana atual.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
