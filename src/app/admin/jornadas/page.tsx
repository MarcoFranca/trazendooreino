import { saveJourneyAction } from "@/app/actions/admin";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getAdminJourneys } from "@/lib/journeys";

type AdminJourneysProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminJourneysPage({
    searchParams,
}: AdminJourneysProps) {
    const [params, journeys] = await Promise.all([searchParams, getAdminJourneys()]);
    const success = typeof params.success === "string" ? params.success : null;
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Admin · jornadas"
                    title="Criar, editar e publicar jornadas."
                    description="Os formulários podem ser simples neste primeiro passo, mas já mantêm a atmosfera escura, silenciosa e editorial do projeto."
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
                    <form action={saveJourneyAction} className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug</Label>
                            <Input id="slug" name="slug" required className="sacred-input h-11 rounded-xl px-4" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="title">Título</Label>
                            <Input id="title" name="title" required className="sacred-input h-11 rounded-xl px-4" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subtitle">Subtítulo</Label>
                            <Input id="subtitle" name="subtitle" className="sacred-input h-11 rounded-xl px-4" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cover_image">Imagem de capa</Label>
                            <Input id="cover_image" name="cover_image" className="sacred-input h-11 rounded-xl px-4" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea id="description" name="description" className="sacred-input min-h-28 rounded-[1.2rem] px-4 py-3" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="inline-flex items-center gap-3 text-sm text-white/70">
                                <input type="checkbox" name="is_published" className="size-4" />
                                Publicar jornada
                            </label>
                        </div>
                        <Button className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                            Salvar jornada
                        </Button>
                    </form>
                </SacredCard>

                <div className="space-y-5">
                    {journeys.map((journey) => (
                        <SacredCard key={journey.id}>
                            <form action={saveJourneyAction} className="grid gap-5 md:grid-cols-2">
                                <input type="hidden" name="id" value={journey.id} />
                                <div className="space-y-2">
                                    <Label>Slug</Label>
                                    <Input name="slug" defaultValue={journey.slug} required className="sacred-input h-11 rounded-xl px-4" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Título</Label>
                                    <Input name="title" defaultValue={journey.title} required className="sacred-input h-11 rounded-xl px-4" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Subtítulo</Label>
                                    <Input name="subtitle" defaultValue={journey.subtitle ?? ""} className="sacred-input h-11 rounded-xl px-4" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Imagem de capa</Label>
                                    <Input name="cover_image" defaultValue={journey.cover_image ?? ""} className="sacred-input h-11 rounded-xl px-4" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Descrição</Label>
                                    <Textarea name="description" defaultValue={journey.description ?? ""} className="sacred-input min-h-28 rounded-[1.2rem] px-4 py-3" />
                                </div>
                                <div className="md:col-span-2 flex items-center justify-between">
                                    <label className="inline-flex items-center gap-3 text-sm text-white/70">
                                        <input
                                            type="checkbox"
                                            name="is_published"
                                            defaultChecked={journey.is_published}
                                            className="size-4"
                                        />
                                        Publicada
                                    </label>
                                    <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                                        {journey.weeks.length} semanas
                                    </p>
                                </div>
                                <Button className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                                    Atualizar jornada
                                </Button>
                            </form>
                        </SacredCard>
                    ))}
                </div>

                {!journeys.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Nenhuma jornada cadastrada
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            O formulario acima pode ser usado para criar a primeira jornada sem
                            depender de dados previos.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
