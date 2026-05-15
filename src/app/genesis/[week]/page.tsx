import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { genesisWeeks } from "@/lib/genesis-journey-data";
import { getPublicReleasedWeekByJourneySlug } from "@/lib/journeys";

type PublicWeekPageProps = {
    params: Promise<{ week: string }>;
};

export default async function PublicWeekPage({ params }: PublicWeekPageProps) {
    const { week } = await params;
    const publishedWeek = await getPublicReleasedWeekByJourneySlug("genesis", week);
    const fallbackWeek = genesisWeeks.find((entry) => entry.week === week);

    if (!publishedWeek && (!fallbackWeek || fallbackWeek.status === "locked")) {
        notFound();
    }

    const title = publishedWeek?.title ?? fallbackWeek?.title ?? "";
    const reading = publishedWeek?.reading ?? fallbackWeek?.reading ?? "";
    const christFocus = publishedWeek?.christ_focus ?? fallbackWeek?.christ ?? "";
    const kingdomFocus = publishedWeek?.kingdom_focus ?? fallbackWeek?.kingdom ?? "";

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow={`Genesis · semana ${publishedWeek?.week_number ?? fallbackWeek?.week ?? week}`}
                    title={
                        <>
                            {title}
                            <span className="block text-[#e8d7ad]">
                                Uma abertura publica da temporada.
                            </span>
                        </>
                    }
                    description="Esta pagina publica apresenta a direcao da semana. A biblioteca completa, os materiais e o envio de perguntas seguem na area autenticada."
                />

                <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                    <SacredCard>
                        <div className="space-y-6">
                            <div>
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Leitura
                                </p>
                                <p className="mt-3 text-base leading-8 text-white/68">{reading}</p>
                            </div>

                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Cristo no texto
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/62">
                                    {christFocus}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Reino no texto
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/62">
                                    {kingdomFocus}
                                </p>
                            </div>
                        </div>
                    </SacredCard>

                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Proximo passo
                        </p>
                        <p className="mt-5 text-sm leading-8 text-white/60">
                            Se voce deseja seguir a temporada dentro da plataforma, com materiais
                            e semanas liberadas conforme o ritmo da jornada, entre na area
                            autenticada.
                        </p>

                        <Button
                            asChild
                            className="cta-shimmer mt-8 h-12 rounded-full bg-[#d6b56d] px-7 text-sm font-semibold text-black hover:bg-[#e7c979]"
                        >
                            <Link href="/cadastro">Entrar na jornada</Link>
                        </Button>
                    </SacredCard>
                </div>
            </section>
        </PageShell>
    );
}
