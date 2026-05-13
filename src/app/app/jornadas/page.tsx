import Link from "next/link";

import { PageShell } from "@/components/sacred/page-shell";
import { SectionHeader } from "@/components/sacred/section-header";
import { getPublishedJourneys } from "@/lib/journeys";

export default async function JourneysPage() {
    const journeys = await getPublishedJourneys();

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Biblioteca viva"
                    title={
                        <>
                            Jornadas publicadas.
                            <span className="block text-[#e8d7ad]">
                                Cada trilha foi pensada como formação, não consumo.
                            </span>
                        </>
                    }
                    description="Escolha a jornada, percorra as semanas já abertas e aprofunde-se com o ritmo editorial da plataforma."
                />

                <div className="grid gap-5 lg:grid-cols-2">
                    {journeys.map((journey) => (
                        <Link
                            key={journey.id}
                            href={`/app/jornadas/${journey.slug}`}
                            className="group overflow-hidden rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/34 p-7 transition duration-500 hover:border-[#d6b56d]/28 hover:bg-[#d6b56d]/[0.04]"
                        >
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                {journey.subtitle ?? "Jornada"}
                            </p>

                            <h2 className="font-display mt-5 text-3xl font-semibold text-white">
                                {journey.title}
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-white/58">
                                {journey.description}
                            </p>

                            <span className="mt-8 inline-flex text-sm text-[#e8cc84]">
                                Abrir jornada
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
