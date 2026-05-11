import {
    ArrowRight,
    CalendarDays,
    Download,
    MessageCircle,
    PlayCircle,
    Sprout,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const resources = [
    {
        title: "PDF da semana",
        text: "Material complementar para estudo, anotações e permanência no texto.",
        icon: Download,
    },
    {
        title: "Vídeo de preparação",
        text: "Uma introdução curta para entrar no tema com reverência e clareza.",
        icon: PlayCircle,
    },
    {
        title: "Enviar pergunta",
        text: "Compartilhe sua dúvida para aprofundarmos na próxima live.",
        icon: MessageCircle,
    },
    {
        title: "Próxima live",
        text: "Acompanhe a exposição, o contexto bíblico e as respostas da comunidade.",
        icon: CalendarDays,
    },
];

export function CurrentSeasonSection() {
    return (
        <section
            id="genesis"
            className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:py-32"
        >
            {/* imagem de fundo */}
            <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center "
                style={{
                    backgroundImage: "url('/images/eden-season.png')",
                    backgroundPosition: "center center",
                }}
            />

            {/* camada escura */}
            {/*<div*/}
            {/*    aria-hidden*/}
            {/*    className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,3,0.82)_0%,rgba(3,3,3,0.68)_36%,rgba(3,3,3,0.84)_78%,#030303_100%)]"*/}
            {/*/>*/}

            {/* glow */}
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(214,181,109,0.16),transparent_34%),radial-gradient(circle_at_50%_68%,rgba(214,181,109,0.05),transparent_46%)]"
            />

            {/* vinheta */}
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.58)_82%,rgba(0,0,0,0.9)_100%)]"
            />

            {/*/!* textura *!/*/}
            {/*<div*/}
            {/*    aria-hidden*/}
            {/*    className="absolute inset-0 opacity-[0.032] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"*/}
            {/*/>*/}

            {/* linha superior */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="sacred-card rounded-[2rem] p-1">
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/0 bg-black/54 p-7 backdrop-blur-[2px] md:p-10 lg:p-12">
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(214,181,109,0.12),transparent_38%)]"
                        />

                        <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                            <div>
                                <div className="mb-7 flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 shadow-[0_0_34px_rgba(214,181,109,0.1)]">
                                    <Sprout className="size-5 text-[#d6b56d]" />
                                </div>

                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Temporada atual
                                </p>

                                <h2 className="font-display mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
                                    Gênesis
                                    <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text text-transparent">
                                        Do jardim à promessa do Rei.
                                    </span>
                                </h2>

                                <p className="mt-7 max-w-xl text-base leading-8 text-white/62">
                                    Em Gênesis vemos o Reino em seu início: criação, comunhão,
                                    queda, promessa, aliança e providência. Cada capítulo prepara
                                    o caminho para a redenção que culmina em Cristo.
                                </p>

                                <div className="mt-8 border-l border-[#d6b56d]/26 pl-5">
                                    <p className="font-scroll text-sm leading-7 tracking-[0.04em] text-[#e8d7ad]">
                                        Antes da queda, havia comunhão. Depois da queda, Deus
                                        anunciou promessa.
                                    </p>
                                </div>

                                <Button className="cta-shimmer mt-10 h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black shadow-[0_0_38px_rgba(214,181,109,0.2)] hover:bg-[#e7c979]">
                                    Entrar na temporada
                                    <ArrowRight className="size-5" />
                                </Button>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {resources.map(({ title, text, icon: Icon }) => (
                                    <div
                                        key={title}
                                        className="group relative overflow-hidden rounded-[1.55rem] border border-[#d6b56d]/10 bg-black/40 p-6 backdrop-blur-[2px] transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.04]"
                                    >
                                        <div
                                            aria-hidden
                                            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.1),transparent_46%)] opacity-0 transition duration-500 group-hover:opacity-100"
                                        />

                                        <div className="relative">
                                            <div className="flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/16 bg-[#d6b56d]/9 shadow-[0_0_26px_rgba(214,181,109,0.08)]">
                                                <Icon className="size-5 text-[#d6b56d]" />
                                            </div>

                                            <h3 className="font-display mt-6 text-[1.45rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                                                {title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-white/54">
                                                {text}
                                            </p>

                                            <div className="mt-7 h-px w-full bg-gradient-to-r from-[#d6b56d]/24 to-transparent opacity-55" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030303] to-transparent"
            />
        </section>
    );
}