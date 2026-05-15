import Link from "next/link";
import { notFound } from "next/navigation";
import { Pencil, Plus } from "lucide-react";

import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/format";
import { getAdminJourneyById, getAdminWeeksByJourney } from "@/lib/journeys";

type JourneyWeeksPageProps = {
    params: Promise<{ id: string }>;
};

export default async function JourneyWeeksPage({ params }: JourneyWeeksPageProps) {
    const { id } = await params;
    const [journey, weeks] = await Promise.all([
        getAdminJourneyById(id),
        getAdminWeeksByJourney(id),
    ]);

    if (!journey) {
        notFound();
    }

    return (
        <PageShell>
            <section className="space-y-10">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <SectionHeader
                        eyebrow="Semanas da jornada"
                        title={journey.title}
                        description="Acompanhe liberacao, publicacao e materiais oficiais desta jornada."
                    />
                    <Button asChild className="h-11 rounded-full bg-[#d6b56d] text-black hover:bg-[#e7c979]">
                        <Link href="/admin/semanas/nova">
                            <Plus className="size-4" />
                            Nova semana
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-4">
                    {weeks.map((week) => (
                        <SacredCard key={week.id}>
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                        Semana {week.week_number} · {week.is_published ? "publicada" : "rascunho"}
                                    </p>
                                    <h2 className="font-display mt-3 text-2xl text-white">
                                        {week.title}
                                    </h2>
                                    <p className="mt-2 text-sm text-white/50">
                                        Liberacao: {formatDateTime(week.release_at)}
                                    </p>
                                </div>
                                <Button asChild variant="outline" className="rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] text-white hover:bg-[#d6b56d]/[0.08]">
                                    <Link href={`/admin/semanas/${week.id}/editar`}>
                                        <Pencil className="size-4" />
                                        Editar
                                    </Link>
                                </Button>
                            </div>
                        </SacredCard>
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
