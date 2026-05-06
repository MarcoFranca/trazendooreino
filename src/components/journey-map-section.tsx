import { genesisWeeks } from "@/lib/journey-data";
import { Badge } from "@/components/ui/badge";

export function JourneyMapSection() {
    return (
        <section id="mapa" className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                        Mapa da temporada
                    </p>
                    <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                        O caminho de Gênesis.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Do Éden à promessa, cada semana revela um movimento da história:
                        criação, queda, promessa, aliança, providência, perdão e redenção.
                    </p>
                </div>

                <div className="mt-16 space-y-4">
                    {genesisWeeks.map((item) => (
                        <div
                            key={item.week}
                            className="group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-primary/30 hover:bg-primary/[0.06] md:grid-cols-[120px_1fr_1fr_1fr]"
                        >
                            <div>
                                <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/10">
                                    Semana {item.week}
                                </Badge>
                                <p className="mt-3 text-sm text-muted-foreground">{item.reading}</p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                    Tema
                                </p>
                                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                    Cristo
                                </p>
                                <p className="mt-2 text-sm leading-6 text-foreground/85">{item.christ}</p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                    Reino
                                </p>
                                <p className="mt-2 text-sm leading-6 text-foreground/85">{item.kingdom}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}