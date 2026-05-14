import Link from "next/link";
import { Archive, Eye, EyeOff, Layers3, Pencil, Plus } from "lucide-react";

import {
    deleteJourneyAction,
    toggleJourneyPublishedAction,
} from "@/app/actions/admin";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { getAdminJourneys } from "@/lib/journeys";

type AdminJourneysProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminJourneysPage({ searchParams }: AdminJourneysProps) {
    const [params, journeys] = await Promise.all([searchParams, getAdminJourneys()]);
    const success = typeof params.success === "string" ? params.success : null;
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <section className="space-y-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <SectionHeader
                        eyebrow="Admin · jornadas"
                        title="Biblioteca editorial da plataforma."
                        description="Cadastre, publique, arquive e acompanhe as semanas ligadas a cada jornada."
                    />
                    <Button asChild className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                        <Link href="/admin/jornadas/nova">
                            <Plus className="size-4" />
                            Nova jornada
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

                <div className="space-y-4">
                    {journeys.map((journey) => (
                        <SacredCard key={journey.id}>
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                        {journey.is_published ? "Publicada" : "Rascunho"} · {journey.slug}
                                    </p>
                                    <h2 className="font-display mt-3 text-3xl text-white">
                                        {journey.title}
                                    </h2>
                                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/52">
                                        {journey.description ?? "Sem descricao editorial."}
                                    </p>
                                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/30">
                                        {journey.weeks.length} semanas cadastradas
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Button asChild variant="outline" className="rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] text-white hover:bg-[#d6b56d]/[0.08]">
                                        <Link href={`/admin/jornadas/${journey.id}/semanas`}>
                                            <Layers3 className="size-4" />
                                            Semanas
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] text-white hover:bg-[#d6b56d]/[0.08]">
                                        <Link href={`/admin/jornadas/${journey.id}/editar`}>
                                            <Pencil className="size-4" />
                                            Editar
                                        </Link>
                                    </Button>
                                    <form action={toggleJourneyPublishedAction}>
                                        <input type="hidden" name="id" value={journey.id} />
                                        <input
                                            type="hidden"
                                            name="is_published"
                                            value={String(journey.is_published)}
                                        />
                                        <Button variant="outline" className="rounded-full border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]">
                                            {journey.is_published ? (
                                                <EyeOff className="size-4" />
                                            ) : (
                                                <Eye className="size-4" />
                                            )}
                                            {journey.is_published ? "Despublicar" : "Publicar"}
                                        </Button>
                                    </form>
                                    <form action={deleteJourneyAction}>
                                        <input type="hidden" name="id" value={journey.id} />
                                        <Button variant="destructive" className="rounded-full px-4">
                                            <Archive className="size-4" />
                                            Arquivar
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </SacredCard>
                    ))}
                </div>

                {!journeys.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Nenhuma jornada cadastrada
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            Crie a primeira jornada para iniciar o fluxo editorial de semanas.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
