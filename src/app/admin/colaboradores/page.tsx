import { updateApplicationStatusAction } from "@/app/actions/admin";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/format";
import { getAdminCollaboratorApplications } from "@/lib/journeys";

type AdminCollaboratorsProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function AdminCollaboratorsPage({
    searchParams,
}: AdminCollaboratorsProps) {
    const [params, applications] = await Promise.all([
        searchParams,
        getAdminCollaboratorApplications(),
    ]);
    const success = typeof params.success === "string" ? params.success : null;
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <section className="space-y-10">
                <SectionHeader
                    eyebrow="Admin · colaboradores"
                    title="Aplicações para servir no projeto."
                    description="A leitura desta área deve permanecer criteriosa, calma e seletiva, em coerência com a seriedade do convite."
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

                <div className="space-y-5">
                    {applications.map((application) => (
                        <SacredCard key={application.id}>
                            <div className="space-y-5">
                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                            {application.status}
                                        </p>
                                        <h2 className="font-display mt-3 text-2xl text-white">
                                            {application.name}
                                        </h2>
                                        <p className="mt-2 text-sm leading-7 text-white/56">
                                            {application.email} · {application.whatsapp || "sem WhatsApp"} ·{" "}
                                            {application.city || "cidade não informada"}
                                        </p>
                                        <p className="text-xs uppercase tracking-[0.22em] text-white/28">
                                            {formatDateTime(application.created_at)}
                                        </p>
                                    </div>

                                    <div className="flex gap-2">
                                        <form action={updateApplicationStatusAction}>
                                            <input type="hidden" name="id" value={application.id} />
                                            <input type="hidden" name="status" value="approved" />
                                            <Button className="rounded-full bg-[#d6b56d] px-5 text-black hover:bg-[#e7c979]">
                                                Aprovar
                                            </Button>
                                        </form>

                                        <form action={updateApplicationStatusAction}>
                                            <input type="hidden" name="id" value={application.id} />
                                            <input type="hidden" name="status" value="rejected" />
                                            <Button
                                                variant="outline"
                                                className="rounded-full border-white/12 bg-white/[0.04] px-5 text-white hover:bg-white/[0.08]"
                                            >
                                                Rejeitar
                                            </Button>
                                        </form>
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="rounded-[1.3rem] border border-[#d6b56d]/10 bg-black/20 p-4">
                                        <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                            Igreja ou comunidade
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/60">
                                            {application.church || "Não informado"}
                                        </p>
                                    </div>

                                    <div className="rounded-[1.3rem] border border-[#d6b56d]/10 bg-black/20 p-4">
                                        <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                            Critérios declarados
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/60">
                                            Cristão: {application.is_christian ? "sim" : "não"} ·
                                            reuniões:{" "}
                                            {application.available_for_meetings ? "sim" : "não"}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div className="rounded-[1.3rem] border border-[#d6b56d]/10 bg-black/20 p-4">
                                        <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                            Propósito do Reino
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/60">
                                            {application.kingdom_purpose}
                                        </p>
                                    </div>

                                    <div className="rounded-[1.3rem] border border-[#d6b56d]/10 bg-black/20 p-4">
                                        <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                            Dons e habilidades
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/60">
                                            {application.skills}
                                        </p>
                                    </div>

                                    <div className="rounded-[1.3rem] border border-[#d6b56d]/10 bg-black/20 p-4">
                                        <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                            Por que deseja participar
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-white/60">
                                            {application.why_join}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SacredCard>
                    ))}
                </div>

                {!applications.length ? (
                    <SacredCard>
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Nenhuma aplicacao recebida
                        </p>
                        <p className="mt-4 text-sm leading-8 text-white/58">
                            Esta area permanece silenciosa ate que novas candidaturas sejam
                            enviadas pela pagina de colaboradores.
                        </p>
                    </SacredCard>
                ) : null}
            </section>
        </PageShell>
    );
}
