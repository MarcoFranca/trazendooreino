import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    CalendarDays,
    CheckCircle2,
    Crown,
    Download,
    Flame,
    Lock,
    MessageCircle,
    PlayCircle,
    ScrollText,
    Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
    currentGenesisWeek,
    genesisJourney,
    genesisOutcomes,
    genesisResources,
    genesisWeeks,
} from "@/lib/genesis-journey-data";

export default function GenesisPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#030303] text-white">
                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
                        style={{
                            backgroundImage: "url('/images/eden-season.png')",
                            backgroundPosition: "center center",
                        }}
                    />

                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,3,0.18)_0%,rgba(3,3,3,0.28)_36%,rgba(3,3,3,0.38)_78%,#030303_100%)]"
                    />

                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(214,181,109,0.18),transparent_34%),radial-gradient(circle_at_50%_70%,rgba(214,181,109,0.06),transparent_46%)]"
                    />

                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.58)_82%,rgba(0,0,0,0.9)_100%)]"
                    />

                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.032] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
                    />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-4xl">
                            <div className="mb-7 flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 shadow-[0_0_34px_rgba(214,181,109,0.1)]">
                                <Crown className="size-5 text-[#d6b56d]" />
                            </div>

                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                {genesisJourney.subtitle} · {genesisJourney.duration}
                            </p>

                            <h1 className="font-display mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-7xl">
                                Gênesis
                                <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text pb-2 text-transparent">
                                    Do Éden à Promessa.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 md:text-lg">
                                {genesisJourney.mainText}
                            </p>

                            <div className="mt-9 border-l border-[#d6b56d]/28 pl-5">
                                <p className="font-scroll text-sm leading-7 tracking-[0.04em] text-[#e8d7ad]">
                                    {genesisJourney.identity}
                                </p>
                            </div>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <Button className="cta-shimmer h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black shadow-[0_0_40px_rgba(214,181,109,0.2)] hover:bg-[#e7c979]">
                                    Começar pela semana atual
                                    <ArrowRight className="size-5" />
                                </Button>

                                <Button
                                    variant="outline"
                                    className="h-14 rounded-full border-white/12 bg-white/[0.035] px-8 text-sm text-white backdrop-blur-xl hover:bg-white/[0.075] hover:text-white"
                                >
                                    Ver mapa completo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.08),transparent_34%)]"
                    />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.35fr]">
                            <div className="sacred-card rounded-[1.9rem] p-1">
                                <div className="relative h-full overflow-hidden rounded-[1.65rem] border border-white/8 bg-black/54 p-7 md:p-8">
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.11),transparent_42%)]"
                                    />

                                    <div className="relative">
                                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                            Semana atual
                                        </p>

                                        <h2 className="font-display mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                                            Semana {currentGenesisWeek.week}
                                            <span className="block text-[#e8d7ad]">
                                                {currentGenesisWeek.title}
                                            </span>
                                        </h2>

                                        <p className="mt-6 text-sm leading-7 text-white/58">
                                            Leitura principal: {currentGenesisWeek.reading}
                                        </p>

                                        <div className="mt-8 grid gap-3">
                                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                                    Cristo no texto
                                                </p>
                                                <p className="mt-2 text-sm leading-7 text-white/68">
                                                    {currentGenesisWeek.christ}
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-4">
                                                <p className="sacred-inscription text-[9px] text-[#d6b56d]/80">
                                                    Reino no texto
                                                </p>
                                                <p className="mt-2 text-sm leading-7 text-white/68">
                                                    {currentGenesisWeek.kingdom}
                                                </p>
                                            </div>
                                        </div>

                                        <Button className="cta-shimmer mt-9 h-13 rounded-full bg-[#d6b56d] px-7 text-sm font-semibold text-black hover:bg-[#e7c979]">
                                            Acessar semana
                                            <ArrowRight className="size-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    ["PDF complementar", "Baixar material da semana.", Download],
                                    ["Vídeo de preparação", "Assistir introdução da semana.", PlayCircle],
                                    ["Enviar pergunta", "Mandar dúvida para a live.", MessageCircle],
                                    ["Próxima live", "Acompanhar aprofundamento ao vivo.", CalendarDays],
                                ].map(([title, text, Icon]) => (
                                    <div
                                        key={title as string}
                                        className="group relative overflow-hidden rounded-[1.65rem] border border-[#d6b56d]/10 bg-black/38 p-6 backdrop-blur-[2px] transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.04]"
                                    >
                                        <div className="relative">
                                            <div className="flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/16 bg-[#d6b56d]/9">
                                                <Icon className="size-5 text-[#d6b56d]" />
                                            </div>

                                            <h3 className="font-display mt-6 text-[1.45rem] font-semibold tracking-[-0.03em] text-white">
                                                {title as string}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-white/54">
                                                {text as string}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mapa-genesis" className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.032] [background-image:linear-gradient(rgba(214,181,109,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(214,181,109,0.045)_1px,transparent_1px)] [background-size:88px_88px]"
                    />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mx-auto mb-6 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9">
                                <ScrollText className="size-4.5 text-[#d6b56d]" />
                            </div>

                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Mapa da temporada
                            </p>

                            <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                                15 encontros para atravessar Gênesis.
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/58">
                                Cada semana possui leitura, tema, conexão com Cristo e foco no Reino.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {genesisWeeks.map((week) => {
                                const isCurrent = week.status === "current";
                                const isLocked = week.status === "locked";

                                return (
                                    <div
                                        key={week.week}
                                        className={[
                                            "group relative overflow-hidden rounded-[1.65rem] border p-6 transition duration-500",
                                            isCurrent
                                                ? "border-[#d6b56d]/28 bg-[#d6b56d]/[0.065] shadow-[0_0_44px_rgba(214,181,109,0.07)]"
                                                : "border-[#d6b56d]/10 bg-black/36 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.035]",
                                        ].join(" ")}
                                    >
                                        <div className="mb-7 flex items-center justify-between">
                                            <span className="sacred-inscription text-[10px] text-[#d6b56d]/80">
                                                Semana {week.week}
                                            </span>

                                            <div className="flex size-8 items-center justify-center rounded-full border border-[#d6b56d]/14 bg-black/20">
                                                {isLocked ? (
                                                    <Lock className="size-4 text-white/28" />
                                                ) : (
                                                    <CheckCircle2 className="size-4 text-[#d6b56d]" />
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="font-display text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                                            {week.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-white/46">
                                            {week.reading}
                                        </p>

                                        <div className="mt-6 h-px bg-gradient-to-r from-[#d6b56d]/26 to-transparent" />

                                        <p className="mt-5 text-sm leading-7 text-white/54">
                                            <span className="text-[#e8d7ad]/88">Cristo:</span>{" "}
                                            {week.christ}
                                        </p>

                                        <p className="mt-3 text-sm leading-7 text-white/54">
                                            <span className="text-[#e8d7ad]/88">Reino:</span>{" "}
                                            {week.kingdom}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid gap-5 lg:grid-cols-2">
                            <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/38 p-8 backdrop-blur-[2px] md:p-10">
                                <Flame className="size-6 text-[#d6b56d]" />

                                <h2 className="font-display mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                                    O que essa jornada precisa formar em você.
                                </h2>

                                <p className="mt-6 text-base leading-8 text-white/58">
                                    {genesisJourney.objective}
                                </p>
                            </div>

                            <div className="grid gap-3">
                                {genesisOutcomes.map((outcome) => (
                                    <div
                                        key={outcome}
                                        className="rounded-2xl border border-[#d6b56d]/10 bg-black/34 p-5"
                                    >
                                        <p className="text-sm leading-7 text-white/58">{outcome}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-14 rounded-[1.9rem] border border-[#d6b56d]/12 bg-[#d6b56d]/[0.045] p-8 text-center md:p-10">
                            <Sparkles className="mx-auto size-6 text-[#d6b56d]" />

                            <h3 className="font-display mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl">
                                Cada semana entrega uma estrutura completa.
                            </h3>

                            <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
                                {genesisResources.map((resource) => (
                                    <span
                                        key={resource}
                                        className="rounded-full border border-[#d6b56d]/14 bg-black/28 px-4 py-2 text-sm text-white/58"
                                    >
                                        {resource}
                                    </span>
                                ))}
                            </div>

                            <Button className="cta-shimmer mt-10 h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black hover:bg-[#e7c979]">
                                Entrar na Jornada Gênesis
                                <ArrowRight className="size-5" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}