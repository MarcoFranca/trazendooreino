import { pillars } from "@/lib/journey-data";
import { Card, CardContent } from "@/components/ui/card";

export function DiscernmentSection() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Filtros de discernimento
                    </p>
                    <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                        Profundidade sem confusão. Reverência sem especulação.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        A jornada usa conexões cristocêntricas com cuidado: afirmação direta,
                        promessa messiânica, tipologia, tema bíblico progressivo e aplicação espiritual.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {pillars.map((pillar) => (
                        <Card key={pillar.title} className="border-white/10 bg-white/[0.03]">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                    {pillar.text}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}