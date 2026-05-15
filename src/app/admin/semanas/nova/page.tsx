import { createWeekAction } from "@/app/actions/admin";
import { WeekForm } from "@/components/admin/week-form";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { getAdminJourneys } from "@/lib/journeys";

type NewWeekPageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function NewWeekPage({ searchParams }: NewWeekPageProps) {
    const [params, journeys] = await Promise.all([searchParams, getAdminJourneys()]);
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Nova semana"
                    title="Criar uma semana editorial."
                    description="Semanas aparecem para usuarios apenas quando publicadas e liberadas pela data."
                />

                {error ? (
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm text-[#ead8ad]">
                        {error}
                    </div>
                ) : null}

                <SacredCard>
                    <WeekForm
                        action={createWeekAction}
                        journeys={journeys}
                        submitLabel="Criar semana"
                    />
                </SacredCard>
            </section>
        </PageShell>
    );
}
