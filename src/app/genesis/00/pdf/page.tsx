import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenText } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PdfCallout } from "@/components/pdf/pdf-callout";
import { PdfCover } from "@/components/pdf/pdf-cover";
import { PdfPageShell } from "@/components/pdf/pdf-page-shell";
import { PdfPrintButton } from "@/components/pdf/pdf-print-button";
import { PdfQuestion } from "@/components/pdf/pdf-question";
import { PdfSection } from "@/components/pdf/pdf-section";
import { Button } from "@/components/ui/button";
import { genesisWeek00 } from "@/lib/genesis-week-00";

export default function GenesisWeek00PdfPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#050403] text-white">
                <div className="print-hide border-b border-[#d6b56d]/10 bg-black/40 px-6 py-5">
                    <div className="mx-auto flex max-w-[210mm] flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                Material imprimivel · Semana 00
                            </p>
                            <p className="mt-2 text-sm text-white/56">
                                Versao pensada para salvar como PDF pelo navegador, com ritmo
                                editorial e margens de impressao.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-[#d6b56d]/18 bg-[#d6b56d]/[0.04] text-white hover:bg-[#d6b56d]/[0.08]"
                            >
                                <Link href="/genesis/00">
                                    <ArrowLeft className="size-4" />
                                    Voltar para a semana
                                </Link>
                            </Button>
                            <PdfPrintButton />
                        </div>
                    </div>
                </div>

                <PdfPageShell>
                    <PdfCover
                        eyebrow="Jornada pelas Escrituras do Reino · Temporada 1"
                        title={genesisWeek00.title}
                        subtitle={genesisWeek00.subtitle}
                        phrase={genesisWeek00.coverPhrase}
                    />

                    <PdfSection eyebrow="Sumario visual" title="O caminho desta semana">
                        <div className="grid gap-4 md:grid-cols-2">
                            <PdfCallout title="Leituras principais">
                                <div className="space-y-2">
                                    {genesisWeek00.readings.map((reading) => (
                                        <p key={reading.reference} className="text-sm leading-7 text-white/64">
                                            <span className="text-[#e8cc84]">{reading.reference}</span>
                                            <span className="block text-white/56">{reading.description}</span>
                                        </p>
                                    ))}
                                </div>
                            </PdfCallout>

                            <PdfCallout title="Leituras de apoio">
                                <div className="space-y-2">
                                    {genesisWeek00.supportReadings.map((reading) => (
                                        <p key={reading.reference} className="text-sm leading-7 text-white/64">
                                            <span className="text-[#e8cc84]">{reading.reference}</span>
                                            <span className="block text-white/56">{reading.description}</span>
                                        </p>
                                    ))}
                                </div>
                            </PdfCallout>
                        </div>

                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            <PdfCallout title="Linha editorial">
                                <p className="text-sm leading-7 text-white/64">
                                    Cristo no centro. Escritura como regra. Reino como mensagem.
                                </p>
                            </PdfCallout>
                            <PdfCallout title="Resposta esperada">
                                <p className="text-sm leading-7 text-white/64">
                                    Arrependimento, fe, obediencia e transformacao.
                                </p>
                            </PdfCallout>
                            <PdfCallout title="Proxima porta">
                                <p className="text-sm leading-7 text-white/64">
                                    Semana 01 · Deus Criador e o homem como imagem.
                                </p>
                            </PdfCallout>
                        </div>
                    </PdfSection>

                    <PdfSection
                        eyebrow="Abertura"
                        title="Bem-vindo a uma leitura que deseja formar o coracao"
                        breakBefore
                    >
                        <div className="space-y-5">
                            {genesisWeek00.intro.map((paragraph) => (
                                <p key={paragraph} className="text-base leading-8 text-white/68">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <PdfCallout title="Objetivo desta semana">
                            <div className="grid gap-3 md:grid-cols-2">
                                {genesisWeek00.objective.map((item) => (
                                    <p key={item} className="text-sm leading-7 text-white/64">
                                        {item}
                                    </p>
                                ))}
                                {genesisWeek00.objectiveClosing.map((item) => (
                                    <p key={item} className="text-sm leading-7 text-[#ead8ad]">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </PdfCallout>
                    </PdfSection>

                    <PdfSection eyebrow="Preparacao" title="Por que comecar com uma Semana 00?">
                        <div className="grid gap-5">
                            {genesisWeek00.studyBlocks.map((block) => (
                                <PdfCallout key={block.title} title={block.title}>
                                    <div className="space-y-3">
                                        {block.body.map((paragraph) => (
                                            <p key={paragraph} className="text-sm leading-7 text-white/64">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    {block.bullets ? (
                                        <div className="mt-5 grid gap-2 md:grid-cols-2">
                                            {block.bullets.map((item) => (
                                                <p key={item} className="text-sm leading-7 text-white/58">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    ) : null}
                                    {block.questions ? (
                                        <div className="mt-5 space-y-2">
                                            {block.questions.map((question) => (
                                                <p key={question} className="text-sm leading-7 text-[#ead8ad]">
                                                    {question}
                                                </p>
                                            ))}
                                        </div>
                                    ) : null}
                                </PdfCallout>
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Tese central" title="A leitura correta nos leva a Cristo">
                        <blockquote className="font-scroll border-l border-[#d6b56d]/30 pl-5 text-[1.18rem] leading-9 text-[#ead8ad]">
                            {genesisWeek00.thesis}
                        </blockquote>

                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            {genesisWeek00.sections.slice(0, 2).map((section) => (
                                <PdfCallout key={section.id} title={section.eyebrow}>
                                    <h3 className="font-display text-2xl text-white">{section.title}</h3>
                                    <div className="mt-4 space-y-3">
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph} className="text-sm leading-7 text-white/64">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </PdfCallout>
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Guardioes da jornada" title="O Evangelho, o Reino e a graca">
                        <div className="grid gap-4 md:grid-cols-2">
                            {genesisWeek00.sections.slice(2).map((section) => (
                                <PdfCallout key={section.id} title={section.eyebrow}>
                                    <h3 className="font-display text-2xl text-white">{section.title}</h3>
                                    <div className="mt-4 space-y-3">
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph} className="text-sm leading-7 text-white/64">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    {section.bullets ? (
                                        <div className="mt-4 space-y-2">
                                            {section.bullets.map((bullet) => (
                                                <p key={bullet} className="text-sm leading-7 text-white/58">
                                                    {bullet}
                                                </p>
                                            ))}
                                        </div>
                                    ) : null}
                                </PdfCallout>
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Filtros" title="Perguntas que devem governar toda interpretacao" breakBefore>
                        <div className="grid gap-4 md:grid-cols-2">
                            {genesisWeek00.filters.map((filter, index) => (
                                <PdfCallout
                                    key={filter.question}
                                    title={`Filtro ${String(index + 1).padStart(2, "0")}`}
                                >
                                    <p className="text-sm leading-7 text-white/70">{filter.question}</p>
                                    <p className="mt-2 text-sm leading-7 text-white/54">{filter.detail}</p>
                                </PdfCallout>
                            ))}
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <PdfCallout title="O que esta jornada e">
                                <div className="space-y-2">
                                    {genesisWeek00.whatItIs.map((item) => (
                                        <p key={item} className="text-sm leading-7 text-white/64">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </PdfCallout>
                            <PdfCallout title="O que esta jornada nao e">
                                <div className="space-y-2">
                                    {genesisWeek00.whatItIsNot.map((item) => (
                                        <p key={item} className="text-sm leading-7 text-white/64">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </PdfCallout>
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Metodo semanal" title="Como leremos cada semana" breakBefore>
                        <div className="grid gap-4 md:grid-cols-2">
                            {genesisWeek00.weeklyStructure.map((item, index) => (
                                <PdfCallout
                                    key={item.title}
                                    title={`${String(index + 1).padStart(2, "0")} · ${item.title}`}
                                >
                                    <div className="space-y-3">
                                        {item.body.map((paragraph) => (
                                            <p key={paragraph} className="text-sm leading-7 text-white/64">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    {item.bullets ? (
                                        <div className="mt-4 grid gap-2 md:grid-cols-2">
                                            {item.bullets.map((bullet) => (
                                                <p key={bullet} className="text-sm leading-7 text-white/56">
                                                    {bullet}
                                                </p>
                                            ))}
                                        </div>
                                    ) : null}
                                </PdfCallout>
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Leituras complementares" title="Contexto que ilumina, sem governar">
                        <div className="space-y-4">
                            {genesisWeek00.complementaryReadings.intro.map((paragraph) => (
                                <p key={paragraph} className="text-base leading-8 text-white/66">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <PdfCallout title="Podem incluir">
                                {genesisWeek00.complementaryReadings.mayInclude.map((item) => (
                                    <p key={item} className="text-sm leading-7 text-white/60">
                                        {item}
                                    </p>
                                ))}
                            </PdfCallout>
                            <PdfCallout title="Podem iluminar">
                                {genesisWeek00.complementaryReadings.mayIlluminate.map((item) => (
                                    <p key={item} className="text-sm leading-7 text-white/60">
                                        {item}
                                    </p>
                                ))}
                            </PdfCallout>
                            <PdfCallout title="Recusadas quando">
                                {genesisWeek00.complementaryReadings.rejectedWhen.map((item) => (
                                    <p key={item} className="text-sm leading-7 text-white/60">
                                        {item}
                                    </p>
                                ))}
                            </PdfCallout>
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Primeira temporada" title={genesisWeek00.firstSeason.title}>
                        <div className="space-y-4">
                            {genesisWeek00.firstSeason.intro.map((paragraph) => (
                                <p key={paragraph} className="text-base leading-8 text-white/66">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            {genesisWeek00.firstSeason.foundations.map((foundation) => (
                                <PdfCallout key={foundation}>
                                    <p className="text-sm leading-7 text-white/62">{foundation}</p>
                                </PdfCallout>
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Mapa da temporada" title="Genesis: do Eden a Promessa">
                        <div className="grid gap-3">
                            {genesisWeek00.seasonMap.map((item) => (
                                <div
                                    key={item.week}
                                    className="pdf-keep-together rounded-[18px] border border-[#d6b56d]/12 bg-black/22 p-5"
                                >
                                    <p className="sacred-inscription text-[9px] text-[#d6b56d]">
                                        Semana {item.week}
                                    </p>
                                    <h3 className="font-display mt-3 text-2xl text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-white/60">{item.theme}</p>
                                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/34">
                                        {item.reading}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Exercicio de leitura" title="Lucas 24:44-48 diante dos seus olhos" breakBefore>
                        <div className="grid gap-4">
                            {genesisWeek00.exercises.map((exercise) => (
                                <PdfCallout key={exercise.title} title={exercise.title}>
                                    <div className="space-y-3">
                                        {exercise.prompts.map((prompt) => (
                                            <p key={prompt} className="text-sm leading-7 text-white/64">
                                                {prompt}
                                            </p>
                                        ))}
                                    </div>
                                </PdfCallout>
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Reflexao pessoal" title="Espaco para responder com honestidade">
                        <div className="grid gap-4">
                            {genesisWeek00.reflectionQuestions.map((question, index) => (
                                <PdfQuestion key={question} index={index + 1} question={question} />
                            ))}
                        </div>
                    </PdfSection>

                    <PdfSection eyebrow="Meditacao e oracao" title="Nao lemos para dominar o texto" breakBefore>
                        <div className="grid gap-5 md:grid-cols-[0.92fr_1.08fr]">
                            <PdfCallout title="Para meditar">
                                <div className="space-y-4">
                                    {genesisWeek00.meditation.map((line) => (
                                        <p key={line} className="font-scroll text-lg leading-8 text-[#ead8ad]">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </PdfCallout>

                            <PdfCallout title="Oracao da semana">
                                <div className="space-y-3">
                                    {genesisWeek00.prayer.map((line) => (
                                        <p key={line} className="text-sm leading-7 text-white/66">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </PdfCallout>
                        </div>

                        <blockquote className="mt-8 rounded-[18px] border border-[#d6b56d]/14 bg-[#d6b56d]/[0.05] p-6 text-center">
                            <p className="font-display text-2xl leading-tight tracking-[-0.03em] text-white">
                                {genesisWeek00.finalStatement}
                            </p>
                        </blockquote>
                    </PdfSection>

                    <section className="pdf-sheet relative overflow-hidden rounded-[24px] border border-[#d6b56d]/24 bg-[#0a0806] px-7 py-10 text-center md:px-10 md:py-14">
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(214,181,109,0.16),transparent_34%)]"
                        />
                        <div className="relative mx-auto max-w-3xl">
                            <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/10">
                                <BookOpenText className="size-5 text-[#d6b56d]" />
                            </div>
                            <p className="sacred-inscription mt-6 text-[10px] text-[#d6b56d]">
                                Contracapa
                            </p>
                            <div className="mt-7 space-y-4">
                                {genesisWeek00.backCover.map((paragraph) => (
                                    <p key={paragraph} className="text-base leading-8 text-white/64">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="print-hide mt-10 flex flex-wrap justify-center gap-4">
                                <Button
                                    asChild
                                    className="rounded-full bg-[#d6b56d] px-6 text-black hover:bg-[#e7c979]"
                                >
                                    <Link href={genesisWeek00.nextWeek.href}>
                                        Seguir para a Semana 01
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                                <PdfPrintButton />
                            </div>
                        </div>
                    </section>
                </PdfPageShell>
            </main>

            <SiteFooter />
        </>
    );
}
