import Link from "next/link";

import {
    ArrowRight,
    CheckCircle2,
    Crown,
    Flame,
    ScrollText,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import { genesisWeek00 } from "@/lib/genesis-week-00";

export default function GenesisWeek00Page() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#030303] text-white">
                {/* HERO */}
                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
                        style={{
                            backgroundImage: "url('/images/study-table.png')",
                            backgroundPosition: "center center",
                        }}
                    />

                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,3,0.82)_0%,rgba(3,3,3,0.68)_36%,rgba(3,3,3,0.88)_78%,#030303_100%)]"
                    />

                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(214,181,109,0.18),transparent_34%)]"
                    />

                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.032] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
                    />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-4xl">
                            <div className="mb-7 flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 shadow-[0_0_34px_rgba(214,181,109,0.1)]">
                                <ScrollText className="size-5 text-[#d6b56d]" />
                            </div>

                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Semana {genesisWeek00.week}
                            </p>

                            <h1 className="font-display mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-7xl">
                                Como ler as Escrituras
                                <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text pb-2 text-transparent">
                                    com Cristo no centro.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/64 md:text-lg">
                                {genesisWeek00.subtitle}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                {genesisWeek00.reading.map((text) => (
                                    <span
                                        key={text}
                                        className="rounded-full border border-[#d6b56d]/14 bg-black/28 px-4 py-2 text-sm text-white/58"
                                    >
                                        {text}
                                    </span>
                                ))}
                            </div>

                            <Button className="cta-shimmer mt-10 h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black shadow-[0_0_40px_rgba(214,181,109,0.2)] hover:bg-[#e7c979]">
                                Baixar PDF da semana
                                <ArrowRight className="size-5" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* MANIFESTO */}
                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.35fr]">
                            <div className="sacred-card rounded-[1.9rem] p-1">
                                <div className="relative h-full overflow-hidden rounded-[1.65rem] border border-white/8 bg-black/54 p-7 md:p-8">
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.11),transparent_42%)]"
                                    />

                                    <div className="relative">
                                        <div className="mb-8 flex items-center justify-between">
                                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                                A lente da jornada
                                            </p>

                                            <div className="flex size-10 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10">
                                                <Crown className="size-4.5 text-[#d6b56d]" />
                                            </div>
                                        </div>

                                        <div className="h-px w-full bg-gradient-to-r from-[#d6b56d]/35 via-[#d6b56d]/12 to-transparent" />

                                        <h2 className="font-display mt-8 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-[2.45rem]">
                                            A Bíblia não é uma coleção de histórias.
                                            <span className="block text-[#e8d7ad]">
                                                É uma única narrativa de redenção.
                                            </span>
                                        </h2>

                                        <p className="mt-7 text-base leading-8 text-white/58">
                                            {genesisWeek00.bigIdea}
                                        </p>

                                        <div className="mt-9 rounded-[1.45rem] border border-[#d6b56d]/14 bg-[#d6b56d]/[0.055] p-6">
                                            <p className="font-scroll text-[1.05rem] leading-8 tracking-[0.025em] text-[#ead8ad]/88">
                                                {genesisWeek00.manifesto}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {genesisWeek00.filters.map((filter, index) => (
                                    <div
                                        key={filter.title}
                                        className={[
                                            "group relative overflow-hidden rounded-[1.65rem] border border-[#d6b56d]/10 bg-black/38 p-6 backdrop-blur-[2px]",
                                            index === genesisWeek00.filters.length - 1
                                                ? "md:col-span-2"
                                                : "",
                                        ].join(" ")}
                                    >
                                        <div className="relative">
                                            <div className="mb-7 flex items-center justify-between">
                                                <div className="flex size-10 items-center justify-center rounded-full border border-[#d6b56d]/16 bg-[#d6b56d]/9">
                                                    <ShieldCheck className="size-4.5 text-[#d6b56d]" />
                                                </div>

                                                <span className="sacred-inscription text-[10px] text-white/24">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            <h3 className="font-display text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                                                {filter.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-white/54">
                                                {filter.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* O QUE NÃO É */}
                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div className="relative mx-auto max-w-5xl">
                        <div className="rounded-[2rem] border border-[#d6b56d]/12 bg-black/40 p-8 backdrop-blur-[2px] md:p-10">
                            <div className="flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9">
                                <Flame className="size-5 text-[#d6b56d]" />
                            </div>

                            <h2 className="font-display mt-7 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                                O que essa jornada não é.
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
                                A jornada não foi criada para interpretações livres ou especulações espirituais.
                                O texto governa a leitura.
                            </p>

                            <div className="mt-10 grid gap-3">
                                {genesisWeek00.whatItIsNot.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-4 rounded-2xl border border-[#d6b56d]/10 bg-black/26 p-5"
                                    >
                                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#d6b56d]" />

                                        <p className="text-sm leading-7 text-white/58">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* RECURSOS */}
                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div className="relative mx-auto max-w-5xl text-center">
                        <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9">
                            <Sparkles className="size-5 text-[#d6b56d]" />
                        </div>

                        <p className="sacred-inscription mt-6 text-[10px] text-[#d6b56d]">
                            Recursos da semana
                        </p>

                        <h2 className="font-display mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                            Cada semana entrega uma estrutura completa.
                        </h2>

                        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
                            {genesisWeek00.resources.map((resource) => (
                                <span
                                    key={resource}
                                    className="rounded-full border border-[#d6b56d]/14 bg-black/28 px-4 py-2 text-sm text-white/58"
                                >
                                    {resource}
                                </span>
                            ))}
                        </div>

                        <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-[#d6b56d]/42 to-transparent" />

                        <Link href={genesisWeek00.nextWeek.href}>
                            <Button className="cta-shimmer mt-10 h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black shadow-[0_0_40px_rgba(214,181,109,0.2)] hover:bg-[#e7c979]">
                                Entrar em Gênesis 1–2
                                <ArrowRight className="size-5" />
                            </Button>
                        </Link>

                        <p className="mt-7 text-sm tracking-[0.03em] text-white/34">
                            Semana 01 · {genesisWeek00.nextWeek.title}
                        </p>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}
