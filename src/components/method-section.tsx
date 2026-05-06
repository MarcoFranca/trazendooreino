import { Card, CardContent } from "@/components/ui/card";

const steps = [
    "Ler o texto",
    "Discernir o Reino",
    "Encontrar Cristo",
    "Confrontar o coração",
    "Responder em graça, fé e obediência",
];

export function MethodSection() {
    return (
        <section id="metodo" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Método Reino nas Escrituras
                    </p>
                    <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                        Um caminho simples. Uma formação profunda.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Cada encontro segue uma estrutura clara para que a leitura bíblica não fique rasa,
                        solta ou apenas informativa.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-5">
                    {steps.map((step, index) => (
                        <Card key={step} className="border-white/10 bg-white/[0.03]">
                            <CardContent className="p-6">
                                <div className="mb-8 flex size-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold tracking-[-0.02em]">{step}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}