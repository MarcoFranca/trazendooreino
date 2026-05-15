import { notFound } from "next/navigation";

import { updateJourneyAction } from "@/app/actions/admin";
import { JourneyForm } from "@/components/admin/journey-form";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { getAdminJourneyById } from "@/lib/journeys";

type EditJourneyPageProps = {
    params: Promise<{ id: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function EditJourneyPage({
    params,
    searchParams,
}: EditJourneyPageProps) {
    const [{ id }, query] = await Promise.all([params, searchParams]);
    const journey = await getAdminJourneyById(id);
    const error = typeof query.error === "string" ? query.error : null;

    if (!journey) {
        notFound();
    }

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Editar jornada"
                    title={journey.title}
                    description="Ajuste metadados, capa e publicacao da jornada."
                />

                {error ? (
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm text-[#ead8ad]">
                        {error}
                    </div>
                ) : null}

                <SacredCard>
                    <JourneyForm
                        action={updateJourneyAction}
                        journey={journey}
                        submitLabel="Atualizar jornada"
                    />
                </SacredCard>
            </section>
        </PageShell>
    );
}
