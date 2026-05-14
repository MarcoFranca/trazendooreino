import { notFound } from "next/navigation";

import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { WeekCard } from "@/components/journey/week-card";
import { formatDateTime, isReleased } from "@/lib/format";
import { getJourneyBySlug, getJourneyWeeksForDisplay } from "@/lib/journeys";

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

    const weeks = await getJourneyWeeksForDisplay(journey.id);

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
                    {weeks.map((week) => {
                        const locked = !isReleased(week.release_at);

                        return (
                            <div key={week.id} className="space-y-3">
                                <WeekCard
                                    slug={journey.slug}
                                    week={week}
                                    href={
                                        locked
                                            ? `/app/jornadas/${journey.slug}`
                                            : `/app/jornadas/${journey.slug}/${week.week_number}`
                                    }
                                    locked={locked}
                                />
                                {locked ? (
                                    <p className="px-2 text-xs uppercase tracking-[0.16em] text-white/34">
                                        Liberacao: {formatDateTime(week.release_at)}
                                    </p>
                                ) : null}
                            </div>
                        );
                    })}
                </div>

                {!weeks.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Aguardando liberacao
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            Esta jornada ja existe, mas ainda nao possui semanas publicadas ou
                            liberadas para a area autenticada.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
