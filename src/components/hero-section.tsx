"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen, Crown, Flame, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HERO_BACKGROUND_IMAGE = "/images/gloria-bg.png";

const sacredDust = [
    { left: "9%", top: "28%", size: 2, delay: 0.2, duration: 13 },
    { left: "18%", top: "62%", size: 2, delay: 1.1, duration: 15 },
    { left: "31%", top: "21%", size: 2, delay: 0.7, duration: 14 },
    { left: "45%", top: "76%", size: 2, delay: 1.6, duration: 16 },
    { left: "61%", top: "32%", size: 2, delay: 0.4, duration: 14 },
    { left: "74%", top: "58%", size: 2, delay: 1.3, duration: 17 },
    { left: "88%", top: "24%", size: 2, delay: 0.9, duration: 15 },
];

const journeyMarks = [
    {
        label: "Leitura",
        value: "Gênesis 1–2",
        icon: BookOpen,
    },
    {
        label: "Cristo revelado",
        value: "O Verbo por quem tudo foi criado",
        icon: Sparkles,
    },
    {
        label: "Reino",
        value: "Deus governa sobre tudo o que existe",
        icon: Crown,
    },
] satisfies Array<{
    label: string;
    value: string;
    icon: LucideIcon;
}>;

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
};

export function HeroSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative isolate overflow-hidden bg-[#030303] px-6 py-20 text-white md:py-24">
            <div aria-hidden className="absolute inset-0 -z-50 bg-[#030303]" />

            <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 1.06 }}
                animate={
                    reduceMotion
                        ? { opacity: 0.48, scale: 1.06 }
                        : {
                              opacity: [0.6, 0.9, 0.6],
                              scale: [1.06, 1.1, 1.06],
                              y: [0, 10, 0],
                          }
                }
                transition={{
                    duration: 38,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -inset-10 -z-40 bg-cover bg-center brightness-[0.58] contrast-[1.12] saturate-[0.82]"
                style={{
                    backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`,
                    backgroundPosition: "center top",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.82) 36%, rgba(0,0,0,0.34) 70%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.82) 36%, rgba(0,0,0,0.34) 70%, transparent 100%)",
                }}
            />

            <div
                aria-hidden
                className="absolute inset-0 -z-30 bg-[linear-gradient(to_bottom,rgba(3,3,3,0.10)_0%,rgba(3,3,3,0.20)_28%,rgba(3,3,3,0.30)_44%,rgba(3,3,3,0.97)_100%)]"
            />

            <div
                aria-hidden
                className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_8%,rgba(255,232,179,0.35),transparent_26%),radial-gradient(circle_at_50%_42%,rgba(191,145,72,0.08),transparent_42%)]"
            />

            <motion.div
                aria-hidden
                animate={
                    reduceMotion
                        ? { opacity: 0.14 }
                        : {
                              opacity: [0.08, 0.17, 0.1],
                              scaleX: [0.94, 1.05, 0.94],
                          }
                }
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-1/2 top-0 -z-20 h-[76vh] w-[28rem] -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,243,213,0.26),rgba(214,181,109,0.06)_44%,transparent_82%)] blur-3xl"
            />

            <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.72)_88%,rgba(0,0,0,0.96)_100%)]"
            />

            <div aria-hidden className="noise-layer absolute inset-0 -z-10" />

            {sacredDust.map((particle, index) => (
                <motion.span
                    key={index}
                    aria-hidden
                    className="absolute z-0 rounded-full bg-[#e7c979]"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                        boxShadow: "0 0 18px rgba(231, 201, 121, 0.62)",
                    }}
                    animate={
                        reduceMotion
                            ? { opacity: 0.26 }
                            : {
                                  y: [0, -26, 0],
                                  opacity: [0.06, 0.54, 0.06],
                                  scale: [0.8, 1.22, 0.8],
                              }
                    }
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-10rem)] max-w-6xl items-center gap-10 lg:grid-cols-[0.96fr_0.86fr]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.12 }}
                    className="max-w-3xl"
                >
                    <motion.div variants={fadeUp} transition={{ duration: 0.75 }}>
                        <Badge className="mb-6 rounded-full border-[#d6b56d]/25 bg-[#d6b56d]/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#e8cc84] shadow-[0_0_28px_rgba(214,181,109,0.1)] hover:bg-[#d6b56d]/10">
                            Temporada 1 · Gênesis: Do Éden à Promessa
                        </Badge>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.75 }}
                        className="mb-4 max-w-xl text-xs uppercase tracking-[0.32em] text-white/38"
                    >
                        Uma jornada pelas Escrituras
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="font-display scroll-texture max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.028em] text-white md:text-6xl lg:text-[4.35rem]"
                    >
                        Atravesse a história.
                        <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text pb-[0.08em] text-transparent">
                            Contemple o Rei.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mt-6 max-w-xl text-base leading-8 text-white/60 md:text-[1rem]"
                    >
                        Uma jornada bíblica, livro por livro, para enxergar Cristo em toda
                        a Escritura, compreender o Reino de Deus e responder com
                        arrependimento, fé e transformação pela graça.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="cta-shimmer h-[50px] rounded-full bg-[#d6b56d] px-7 text-sm font-semibold text-black shadow-[0_0_38px_rgba(214,181,109,0.22)] transition hover:bg-[#e7c979]"
                        >
                            <Link href="/cadastro">
                                Entrar na Jornada
                                <ArrowRight className="size-4" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-[50px] rounded-full border-white/12 bg-white/[0.035] px-7 text-sm text-white backdrop-blur-xl hover:bg-white/[0.075] hover:text-white"
                        >
                            <Link href="/genesis">Ver a temporada atual</Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mt-9 flex max-w-xl flex-col gap-2.5 border-l border-[#d6b56d]/24 pl-4"
                    >
                        <p className="font-scroll text-sm leading-7 tracking-[0.05em] text-[#e8d7ad]">
                            “No princípio era o Verbo.”
                        </p>

                        <p className="max-w-lg text-sm leading-7 text-white/44">
                            Antes da queda, antes da promessa, antes da história humana,
                            Cristo já estava no centro da criação.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 36, scale: 0.97, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.22 }}
                    className="relative hidden lg:block"
                >
                    <motion.div
                        aria-hidden
                        animate={
                            reduceMotion
                                ? { opacity: 0.24 }
                                : {
                                      opacity: [0.12, 0.28, 0.12],
                                      scale: [0.98, 1.05, 0.98],
                                  }
                        }
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -inset-12 rounded-full bg-[#d6b56d]/16 blur-[120px]"
                    />

                    <div className="sacred-card relative rounded-[1.65rem] p-1">
                        <div className="relative rounded-[1.45rem] border border-white/8 bg-black/38 p-6">
                            <div className="mb-6 flex items-start justify-between gap-6">
                                <div>
                                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                                        Semana atual
                                    </p>

                                    <h2 className="font-display mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.025em] text-white">
                                        Deus Criador e o homem como imagem
                                    </h2>
                                </div>

                                <motion.div
                                    animate={
                                        reduceMotion
                                            ? { y: 0 }
                                            : {
                                                  y: [0, -5, 0],
                                                  rotate: [0, 1.5, 0],
                                              }
                                    }
                                    transition={{
                                        duration: 5.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#d6b56d]/24 bg-[#d6b56d]/10 shadow-[0_0_28px_rgba(214,181,109,0.16)]"
                                >
                                    <Flame className="size-5 text-[#e8cc84]" />
                                </motion.div>
                            </div>

                            <div className="space-y-3">
                                {journeyMarks.map(({ label, value, icon: Icon }) => (
                                    <div
                                        key={label}
                                        className="group relative overflow-hidden rounded-2xl border border-white/9 bg-white/[0.028] p-4 transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.045]"
                                    >
                                        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#d6b56d]/48 to-transparent opacity-0 transition group-hover:opacity-100" />

                                        <div className="flex gap-3.5">
                                            <Icon className="mt-1 size-4.5 shrink-0 text-[#d6b56d]" />

                                            <div>
                                                <p className="sacred-inscription text-[9px] text-white/36">
                                                    {label}
                                                </p>

                                                <p className="mt-1.5 text-sm leading-6 text-white/78">
                                                    {value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#d6b56d]/28 to-transparent" />

                            <div className="rounded-2xl border border-[#d6b56d]/14 bg-[#d6b56d]/[0.06] p-4">
                                <p className="text-sm leading-7 text-[#ead8ad]/90">
                                    O objetivo não é apenas entender o texto. É ser conduzido por
                                    ele até Cristo, confrontado pela verdade e reposicionado
                                    diante do Reino.
                                </p>
                            </div>

                            <p className="mt-6 text-center text-[10px] uppercase tracking-[0.24em] text-white/28">
                                Éden · Queda · Promessa · Cristo · Reino
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#030303] to-transparent"
            />
        </section>
    );
}
