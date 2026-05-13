import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    Crown,
    Download,
    Flame,
    Orbit,
    ScrollText,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { genesisWeek00 } from "@/lib/genesis-week-00";

export default function GenesisWeek00Page() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#030303] text-white">
                <section className="relative overflow-hidden px-6 py-24 md:py-32">
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(214,181,109,0.18),transparent_28%),linear-gradient(180deg,#070707_0%,#030303_100%)]"
                    />
                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
                    />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-5xl">
                            <div className="flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 shadow-[0_0_40px_rgba(214,181,109,0.12)]">
                                <ScrollText className="size-5 text-[#d6b56d]" />
                            </div>

                            <p className="sacred-inscription mt-8 text-[10px] text-[#d6b56d]">
                                Semana {genesisWeek00.week} · Genesis: do Eden a Promessa
                            </p>

                            <h1 className="font-display mt-6 max-w-5xl text-5xl leading-[0.94] tracking-[-0.06em] text-white md:text-7xl">
                                {genesisWeek00.title}
                            </h1>

                            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
                                {genesisWeek00.subtitle}
                            </p>

                            <div className="mt-10 max-w-3xl rounded-[1.7rem] border border-[#d6b56d]/14 bg-[#d6b56d]/[0.055] p-6 md:p-8">
                                <p className="font-scroll text-[1.15rem] leading-9 tracking-[0.02em] text-[#ead8ad]">
                                    {genesisWeek00.coverPhrase}
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                {genesisWeek00.readings.map((reading) => (
                                    <span
                                        key={reading}
                                        className="rounded-full border border-[#d6b56d]/14 bg-black/28 px-4 py-2 text-sm text-white/58"
                                    >
                                        {reading}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button
                                    asChild
                                    className="cta-shimmer h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black hover:bg-[#e7c979]"
                                >
                                    <Link href="/genesis/01">
                                        Ir para a Semana 01
                                        <ArrowRight className="size-5" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-14 rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] px-8 text-white hover:bg-[#d6b56d]/[0.08]"
                                >
                                    <Link href="/genesis/00/pdf">
                                        Abrir versao em PDF
                                        <Download className="size-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-24 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                        <div className="sacred-card rounded-[1.9rem] p-1">
                            <div className="h-full rounded-[1.65rem] border border-white/8 bg-black/52 p-7 md:p-9">
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Tese central
                                </p>
                                <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                                    A leitura certa nao termina em informacao.
                                </h2>
                                <p className="mt-6 text-base leading-8 text-white/62">
                                    {genesisWeek00.thesis}
                                </p>

                                <div className="mt-10 grid gap-4">
                                    {genesisWeek00.intro.map((paragraph) => (
                                        <p key={paragraph} className="text-sm leading-8 text-white/56">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="editorial-panel rounded-[1.7rem] p-6">
                                <Crown className="size-5 text-[#d6b56d]" />
                                <h3 className="font-display mt-5 text-2xl text-white">
                                    O objetivo desta semana
                                </h3>
                                <div className="mt-5 space-y-3">
                                    {genesisWeek00.objective.map((item) => (
                                        <p key={item} className="text-sm leading-7 text-white/56">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="editorial-panel rounded-[1.7rem] p-6">
                                <BookOpen className="size-5 text-[#d6b56d]" />
                                <h3 className="font-display mt-5 text-2xl text-white">
                                    Leituras principais
                                </h3>
                                <div className="mt-5 grid gap-3">
                                    {genesisWeek00.readings.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-[#d6b56d]/10 bg-black/24 px-4 py-3 text-sm text-white/60"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="editorial-panel rounded-[1.7rem] p-6">
                                <Sparkles className="size-5 text-[#d6b56d]" />
                                <h3 className="font-display mt-5 text-2xl text-white">
                                    Leituras de apoio
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-white/56">
                                    Textos paralelos para manter a leitura alinhada ao Evangelho e ao
                                    Reino.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {genesisWeek00.supportReadings.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-[#d6b56d]/14 bg-[#d6b56d]/[0.05] px-4 py-2 text-sm text-white/58"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-24 md:py-28">
                    <div className="mx-auto max-w-7xl space-y-6">
                        {genesisWeek00.sections.map((section, index) => {
                            const iconClass = "size-5 text-[#d6b56d]";
                            const Icon =
                                index === 0
                                    ? Crown
                                    : index === 1
                                      ? ShieldCheck
                                      : index === 2
                                        ? Flame
                                        : index === 3
                                          ? Orbit
                                          : Sparkles;

                            return (
                                <div
                                    key={section.id}
                                    className="grid gap-5 rounded-[2rem] border border-[#d6b56d]/12 bg-black/34 p-6 md:p-8 lg:grid-cols-[0.34fr_0.66fr]"
                                >
                                    <div>
                                        <div className="flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9">
                                            <Icon className={iconClass} />
                                        </div>
                                        <p className="sacred-inscription mt-6 text-[10px] text-[#d6b56d]">
                                            {section.eyebrow}
                                        </p>
                                        <h2 className="font-display mt-5 text-3xl leading-tight tracking-[-0.04em] text-white md:text-4xl">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-5">
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph} className="text-base leading-8 text-white/60">
                                                {paragraph}
                                            </p>
                                        ))}

                                        {section.bullets ? (
                                            <div className="grid gap-3 md:grid-cols-2">
                                                {section.bullets.map((item) => (
                                                    <div
                                                        key={item}
                                                        className="rounded-[1.35rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4 text-sm leading-7 text-white/58"
                                                    >
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null}

                                        {section.questions ? (
                                            <div className="rounded-[1.45rem] border border-[#d6b56d]/12 bg-black/24 p-5">
                                                <p className="sacred-inscription text-[9px] text-[#d6b56d]">
                                                    Perguntas de leitura
                                                </p>
                                                <div className="mt-4 space-y-3">
                                                    {section.questions.map((question) => (
                                                        <p
                                                            key={question}
                                                            className="text-sm leading-7 text-white/58"
                                                        >
                                                            {question}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="px-6 py-24 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
                        <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/30 p-7 md:p-8">
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Os filtros da jornada
                            </p>
                            <div className="mt-7 grid gap-3">
                                {genesisWeek00.filters.map((item, index) => (
                                    <div
                                        key={item}
                                        className="rounded-[1.35rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-4"
                                    >
                                        <p className="text-sm leading-7 text-white/58">
                                            <span className="mr-2 text-[#e8cc84]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-5">
                            <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/30 p-7 md:p-8">
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    O que esta jornada e
                                </p>
                                <div className="mt-6 space-y-3">
                                    {genesisWeek00.whatItIs.map((item) => (
                                        <p key={item} className="text-sm leading-7 text-white/58">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/30 p-7 md:p-8">
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    O que esta jornada nao e
                                </p>
                                <div className="mt-6 space-y-3">
                                    {genesisWeek00.whatItIsNot.map((item) => (
                                        <p key={item} className="text-sm leading-7 text-white/58">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-24 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="rounded-[2rem] border border-[#d6b56d]/12 bg-black/32 p-7 md:p-10">
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Exercicio de leitura
                            </p>
                            <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.04em] text-white md:text-5xl">
                                A Palavra primeiro, antes de qualquer comentario.
                            </h2>

                            <div className="mt-10 grid gap-5 lg:grid-cols-2">
                                {genesisWeek00.exercises.map((exercise) => (
                                    <div
                                        key={exercise.title}
                                        className="rounded-[1.5rem] border border-[#d6b56d]/10 bg-[#d6b56d]/[0.04] p-5"
                                    >
                                        <h3 className="font-display text-2xl text-white">
                                            {exercise.title}
                                        </h3>
                                        <div className="mt-5 space-y-3">
                                            {exercise.prompts.map((prompt) => (
                                                <p key={prompt} className="text-sm leading-7 text-white/58">
                                                    {prompt}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-24 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/30 p-7 md:p-8">
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Perguntas de reflexao
                            </p>
                            <div className="mt-6 grid gap-3">
                                {genesisWeek00.reflectionQuestions.map((question) => (
                                    <div
                                        key={question}
                                        className="rounded-[1.25rem] border border-[#d6b56d]/10 bg-black/22 p-4 text-sm leading-7 text-white/58"
                                    >
                                        {question}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-5">
                            <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-black/30 p-7 md:p-8">
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Para meditar
                                </p>
                                <div className="mt-6 space-y-4">
                                    {genesisWeek00.meditation.map((line) => (
                                        <p key={line} className="font-scroll text-lg leading-8 text-[#ead8ad]/88">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[1.9rem] border border-[#d6b56d]/12 bg-[#d6b56d]/[0.05] p-7 md:p-8">
                                <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                    Oracao da semana
                                </p>
                                <div className="mt-6 space-y-4">
                                    {genesisWeek00.prayer.map((line) => (
                                        <p key={line} className="text-base leading-8 text-white/66">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 pb-24 pt-8 md:pb-28">
                    <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d6b56d]/12 bg-[radial-gradient(circle_at_top,rgba(214,181,109,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-8 text-center md:p-12">
                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Fecho da semana
                        </p>
                        <h2 className="font-display mx-auto mt-6 max-w-4xl text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                            {genesisWeek00.finalStatement}
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/58">
                            Quando a lente e ajustada, Genesis deixa de ser apenas o livro dos
                            comecos e passa a ser o inicio da historia que caminha para Cristo.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Button
                                asChild
                                className="cta-shimmer h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black hover:bg-[#e7c979]"
                            >
                                <Link href={genesisWeek00.nextWeek.href}>
                                    Continuar para a Semana 01
                                    <ArrowRight className="size-5" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-14 rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] px-8 text-white hover:bg-[#d6b56d]/[0.08]"
                            >
                                <Link href="/genesis/00/pdf">
                                    Abrir o material para impressao
                                    <Download className="size-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}
