import { notFound } from "next/navigation";

import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { WeekCard } from "@/components/journey/week-card";
import { getJourneyBySlug, getJourneyWeeks } from "@/lib/journeys";

type JourneyDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function JourneyDetailPage({
    params,
}: JourneyDetailPageProps) {
    const { slug } = await params;
    const journey = await getJourneyBySlug(slug);

    if (!journey) {
        notFound();
    }

    const weeks = await getJourneyWeeks(journey.id);

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow={journey.subtitle ?? "Jornada"}
                    title={
                        <>
                            {journey.title}
                            <span className="block text-[#e8d7ad]">
                                Semanas liberadas para a caminhada.
                            </span>
                        </>
                    }
                    description={journey.description ?? ""}
                />

                <SacredCard>
                    <p className="text-sm leading-8 text-white/58">
                        Aqui você encontra apenas o que já foi publicado e liberado. O ritmo
                        da jornada continua respeitando tempo, maturação e permanência no
                        texto.
                    </p>
                </SacredCard>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {weeks.map((week) => (
                        <WeekCard
                            key={week.id}
                            slug={journey.slug}
                            week={week}
                            href={`/app/jornadas/${journey.slug}/${week.week_number}`}
                        />
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
