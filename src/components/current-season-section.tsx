import { ArrowRight, CalendarDays, Download, MessageCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CurrentSeasonSection() {
    return (
        <section id="genesis" className="px-6 py-24">
            <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-primary/15 via-white/[0.04] to-transparent p-8 md:p-12">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                            Temporada atual
                        </p>
                        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                            Gênesis: Do Éden à Promessa
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Em Gênesis vemos Deus como Criador e Rei, o homem criado à sua imagem,
                            a queda que rompe a comunhão, a promessa da Semente, a formação da linhagem
                            da aliança e a providência de Deus conduzindo a história até Cristo.
                        </p>

                        <Button className="mt-10 h-14 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                            Começar por Gênesis
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            ["Baixar PDF da semana", "Material complementar para estudo e anotações.", Download],
                            ["Assistir vídeo", "Introdução curta para entrar no tema da semana.", PlayCircle],
                            ["Enviar pergunta", "Mande sua dúvida para a próxima live.", MessageCircle],
                            ["Próxima live", "Acompanhe a exposição e as perguntas da comunidade.", CalendarDays],
                        ].map(([title, text, Icon]) => (
                            <div key={title as string} className="rounded-3xl border border-white/10 bg-black/25 p-6">
                                <Icon className="size-6 text-primary" />
                                <h3 className="mt-6 text-xl font-semibold">{title as string}</h3>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}