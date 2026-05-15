import { createJourneyAction } from "@/app/actions/admin";
import { JourneyForm } from "@/components/admin/journey-form";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";

type NewJourneyPageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function NewJourneyPage({ searchParams }: NewJourneyPageProps) {
    const params = await searchParams;
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Nova jornada"
                    title="Criar um novo arco editorial."
                    description="A jornada so aparece para usuarios quando estiver publicada."
                />

                {error ? (
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm text-[#ead8ad]">
                        {error}
                    </div>
                ) : null}

                <SacredCard>
                    <JourneyForm action={createJourneyAction} submitLabel="Criar jornada" />
                </SacredCard>
            </section>
        </PageShell>
    );
}
