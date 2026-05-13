import { applyCollaboratorAction } from "@/app/actions/collaborators";
import { PageShell } from "@/components/sacred/page-shell";
import { SacredCard } from "@/components/sacred/sacred-card";
import { SectionHeader } from "@/components/sacred/section-header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type CollaboratePageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const criteria = [
    "Ser cristão.",
    "Estar disponível para duas reuniões por mês fora do horário comercial.",
    "Ter clareza sobre o propósito do Reino.",
    "Servir com maturidade, excelência e constância.",
];

export default async function CollaboratePage({
    searchParams,
}: CollaboratePageProps) {
    const params = await searchParams;
    const success = typeof params.success === "string" ? params.success : null;
    const error = typeof params.error === "string" ? params.error : null;

    return (
        <PageShell>
            <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <SectionHeader
                        eyebrow="Chamado ao serviço"
                        title={
                            <>
                                O Reino não avança por audiência,
                                <span className="block text-[#e8d7ad]">
                                    mas por servos disponíveis, maduros e alinhados ao propósito.
                                </span>
                            </>
                        }
                        description="Esta não é uma inscrição genérica. É um pedido de discernimento para quem deseja servir com temor, constância e maturidade no que está sendo construído."
                    />

                    <div className="mt-10 rounded-[1.8rem] border border-[#d6b56d]/12 bg-black/30 p-7">
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Critérios da aplicação
                        </p>

                        <div className="mt-6 space-y-4">
                            {criteria.map((item, index) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-[#d6b56d]/10 bg-black/22 px-5 py-4"
                                >
                                    <p className="text-sm leading-7 text-white/60">
                                        <span className="text-[#e8cc84]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>{" "}
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <SacredCard>
                    <form action={applyCollaboratorAction} className="space-y-5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    required
                                    className="sacred-input h-12 rounded-2xl px-4"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="sacred-input h-12 rounded-2xl px-4"
                                />
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="whatsapp">WhatsApp</Label>
                                <Input
                                    id="whatsapp"
                                    name="whatsapp"
                                    className="sacred-input h-12 rounded-2xl px-4"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="city">Cidade</Label>
                                <Input
                                    id="city"
                                    name="city"
                                    className="sacred-input h-12 rounded-2xl px-4"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="church">Igreja ou comunidade</Label>
                            <Input
                                id="church"
                                name="church"
                                className="sacred-input h-12 rounded-2xl px-4"
                            />
                        </div>

                        <div className="space-y-4 rounded-[1.5rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.03] p-5">
                            <div className="flex items-start gap-3">
                                <Checkbox id="is_christian" name="is_christian" />
                                <Label htmlFor="is_christian" className="leading-7 text-white/70">
                                    Sou cristão.
                                </Label>
                            </div>

                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="available_for_meetings"
                                    name="available_for_meetings"
                                />
                                <Label
                                    htmlFor="available_for_meetings"
                                    className="leading-7 text-white/70"
                                >
                                    Tenho disponibilidade para duas reuniões mensais fora do
                                    horário comercial.
                                </Label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="kingdom_purpose">
                                Como você entende o propósito do Reino?
                            </Label>
                            <Textarea
                                id="kingdom_purpose"
                                name="kingdom_purpose"
                                required
                                className="sacred-input min-h-32 rounded-[1.4rem] px-4 py-3"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="skills">
                                Quais dons ou habilidades você acredita poder servir no projeto?
                            </Label>
                            <Textarea
                                id="skills"
                                name="skills"
                                required
                                className="sacred-input min-h-32 rounded-[1.4rem] px-4 py-3"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="why_join">Por que deseja participar?</Label>
                            <Textarea
                                id="why_join"
                                name="why_join"
                                required
                                className="sacred-input min-h-32 rounded-[1.4rem] px-4 py-3"
                            />
                        </div>

                        {success ? (
                            <div className="rounded-2xl border border-emerald-500/18 bg-emerald-500/8 px-4 py-3 text-sm leading-7 text-[#d7f7de]">
                                {success}
                            </div>
                        ) : null}

                        {error ? (
                            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/8 px-4 py-3 text-sm leading-7 text-[#ead8ad]">
                                {error}
                            </div>
                        ) : null}

                        <Button className="cta-shimmer h-12 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black hover:bg-[#e7c979]">
                            Enviar aplicação
                        </Button>
                    </form>
                </SacredCard>
            </section>
        </PageShell>
    );
}
