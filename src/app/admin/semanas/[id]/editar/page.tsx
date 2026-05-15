import { notFound } from "next/navigation";

import { updateWeekAction, uploadWeekPdfAction } from "@/app/actions/admin";
import { WeekForm } from "@/components/admin/week-form";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAdminJourneys, getAdminWeekById } from "@/lib/journeys";

type EditWeekPageProps = {
    params: Promise<{ id: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function EditWeekPage({ params, searchParams }: EditWeekPageProps) {
    const { id } = await params;
    const [query, journeys, week] = await Promise.all([
        searchParams,
        getAdminJourneys(),
        getAdminWeekById(id),
    ]);
    const error = typeof query.error === "string" ? query.error : null;
    const success = typeof query.success === "string" ? query.success : null;

    if (!week) {
        notFound();
    }

    const journey = journeys.find((item) => item.id === week.journey_id);

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Editar semana"
                    title={week.title}
                    description="Atualize conteudo, release, PDF oficial e estado de publicacao."
                />

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

                <SacredCard>
                    <WeekForm
                        action={updateWeekAction}
                        journeys={journeys}
                        week={week}
                        submitLabel="Atualizar semana"
                    />
                </SacredCard>

                <SacredCard>
                    <form action={uploadWeekPdfAction} className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                        <input type="hidden" name="week_id" value={id} />
                        <input type="hidden" name="journey_slug" value={journey?.slug ?? "jornada"} />
                        <input type="hidden" name="week_slug" value={week.slug ?? week.week_number} />
                        <div className="space-y-2">
                            <Label htmlFor="pdf">PDF oficial da semana</Label>
                            <Input
                                id="pdf"
                                name="pdf"
                                type="file"
                                accept="application/pdf"
                                className="sacred-input h-11 rounded-xl px-4 py-2"
                            />
                            <p className="text-xs leading-6 text-white/40">
                                Bucket: weekly-pdfs. O link publico sera gravado em pdf_url.
                            </p>
                        </div>
                        <Button className="h-11 rounded-full bg-[#d6b56d] px-6 text-black hover:bg-[#e7c979]">
                            Enviar PDF
                        </Button>
                    </form>
                </SacredCard>
            </section>
        </PageShell>
    );
}
