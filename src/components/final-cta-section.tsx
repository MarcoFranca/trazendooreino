import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-primary/20 bg-primary/10 p-10 text-center md:p-16">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    O convite
                </p>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                    Não leia apenas para saber mais. Caminhe para ser transformado.
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                    Entre na jornada, acompanhe a leitura semanal, baixe os materiais,
                    envie suas perguntas e caminhe com outros discípulos pelas Escrituras do Reino.
                </p>

                <Button className="mt-10 h-14 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                    Entrar na Jornada
                    <ArrowRight className="size-5" />
                </Button>
            </div>
        </section>
    );
}