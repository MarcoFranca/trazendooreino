import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { genesisWeeks } from "@/lib/genesis-journey-data";

type PublicWeekPageProps = {
    params: Promise<{ week: string }>;
};

export default async function PublicWeekPage({ params }: PublicWeekPageProps) {
    const { week } = await params;
    const item = genesisWeeks.find((entry) => entry.week === week);

    if (!item || item.status === "locked") {
        notFound();
    }

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow={`Gênesis · semana ${item.week}`}
                    title={
                        <>
                            {item.title}
                            <span className="block text-[#e8d7ad]">
                                Uma abertura pública da temporada.
                            </span>
                        </>
                    }
                    description="Esta página pública apresenta a direção da semana. A biblioteca completa, os materiais e o envio de perguntas seguem na área autenticada."
                />

                <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                    <SacredCard>
                        <div className="space-y-6">
                            <div>
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Leitura
                                </p>
                                <p className="mt-3 text-base leading-8 text-white/68">
                                    {item.reading}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Cristo no texto
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/62">
                                    {item.christ}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                    Reino no texto
                                </p>
                                <p className="mt-2 text-sm leading-7 text-white/62">
                                    {item.kingdom}
                                </p>
                            </div>
                        </div>
                    </SacredCard>

                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Próximo passo
                        </p>
                        <p className="mt-5 text-sm leading-8 text-white/60">
                            Se você deseja seguir a temporada dentro da plataforma, com materiais
                            e semanas liberadas conforme o ritmo da jornada, entre na área
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
