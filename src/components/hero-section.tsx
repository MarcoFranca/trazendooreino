"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen, Flame, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HERO_BACKGROUND_IMAGE = "/images/gloria-bg.png";

const particles = [
    { left: "8%", top: "22%", delay: 0, duration: 7 },
    { left: "18%", top: "68%", delay: 1.2, duration: 8 },
    { left: "34%", top: "18%", delay: 0.7, duration: 9 },
    { left: "48%", top: "74%", delay: 1.8, duration: 7.5 },
    { left: "66%", top: "26%", delay: 0.4, duration: 8.5 },
    { left: "78%", top: "62%", delay: 1.5, duration: 9.5 },
    { left: "90%", top: "32%", delay: 0.9, duration: 7.8 },
];

const proofCards = [
    ["15 encontros", "Do Éden à Promessa"],
    ["Cristo no centro", "Sem alegorias forçadas"],
    ["Reino como mensagem", "Da criação à redenção"],
];

const focusItems: Array<{
    label: string;
    value: string;
    icon: LucideIcon;
}> = [
    {
        label: "Leitura principal",
        value: "Gênesis 1–2",
        icon: BookOpen,
    },
    {
        label: "Foco em Cristo",
        value: "O Verbo por quem tudo foi criado",
        icon: Sparkles,
    },
    {
        label: "Foco no Reino",
        value: "Deus governa a criação",
        icon: Flame,
    },
];

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
            {/* Base escura */}
            <div aria-hidden className="absolute inset-0 -z-30 bg-[#050505]" />

            {/* Imagem de glória como camada atmosférica */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 0.75, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute -inset-6 -z-20 bg-cover bg-center blur-[2px] brightness-[0.72] contrast-[1.05] saturate-[0.85]"
                style={{
                    backgroundImage: `url('${HERO_BACKGROUND_IMAGE}')`,
                    backgroundPosition: "center top",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.86) 34%, rgba(0,0,0,0.34) 68%, transparent 94%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.86) 34%, rgba(0,0,0,0.34) 68%, transparent 94%)",
                }}
            />

            {/* Overlay para controlar a literalidade da imagem */}
            <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.68)_42%,rgba(5,5,5,0.96)_100%)]"
            />

            {/* Aura dourada sobre a imagem */}
            <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_15%,rgba(214,181,109,0.28),transparent_32%),radial-gradient(circle_at_78%_40%,rgba(214,181,109,0.09),transparent_30%)]"
            />

            {/* Grid e textura */}
            <div aria-hidden className="sacred-grid absolute inset-0 -z-10 opacity-35" />
            <div aria-hidden className="noise-layer absolute inset-0 -z-10" />

            {/* Luz de glória central */}
            <motion.div
                aria-hidden
                animate={{
                    opacity: [0.24, 0.42, 0.24],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[2%] -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]"
            />

            {/* Feixe vertical */}
            <motion.div
                aria-hidden
                animate={{
                    opacity: [0.1, 0.22, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-1/2 top-0 -z-10 h-[75vh] w-[38vw] -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,246,220,0.22),transparent_72%)] blur-3xl"
            />

            {/* Partículas */}
            {particles.map((particle, index) => (
                <motion.span
                    key={index}
                    aria-hidden
                    className="absolute z-0 size-1 rounded-full bg-primary/70 shadow-[0_0_18px_rgba(214,181,109,0.75)]"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -22, 0],
                        opacity: [0.16, 0.72, 0.16],
                        scale: [0.85, 1.22, 0.85],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Vinheta final */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.68)_100%)]"
            />

            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.12 }}
                >
                    <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
                        <Badge className="font-sacred mb-7 rounded-full border-primary/30 bg-primary/10 px-4 py-2 text-[11px] tracking-[0.08em] text-primary shadow-[0_0_30px_rgba(214,181,109,0.12)] hover:bg-primary/10">
                            Temporada 1 · Gênesis: Do Éden à Promessa
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="font-display scroll-texture max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.025em] text-foreground md:text-6xl lg:text-[4.25rem]"
                    >
                        <span className="block">Caminhe pelas Escrituras</span>
                        <span className="block">até enxergar o Rei.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg"
                    >
                        Uma jornada bíblica, livro por livro, para conhecer Cristo em toda a
                        Escritura, compreender o Reino de Deus, confrontar o coração e
                        responder com arrependimento, fé e transformação pela graça.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mt-9 flex flex-col gap-4 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            className="cta-shimmer h-[52px] rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-[0_0_42px_rgba(214,181,109,0.25)] hover:bg-primary/90"
                        >
                            Entrar na Jornada
                            <ArrowRight className="size-4" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-[52px] rounded-full border-white/15 bg-white/5 px-8 text-sm text-foreground backdrop-blur-xl hover:bg-white/10"
                        >
                            Ver temporada atual
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3"
                    >
                        {proofCards.map(([title, text]) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-md transition duration-300 hover:border-primary/25 hover:bg-primary/[0.045]"
                            >
                                <p className="text-sm font-medium text-foreground">{title}</p>
                                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative"
                >
                    <motion.div
                        aria-hidden
                        animate={{
                            opacity: [0.28, 0.58, 0.28],
                            scale: [1, 1.06, 1],
                        }}
                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -inset-10 rounded-full bg-primary/20 blur-[120px]"
                    />

                    <div className="sacred-card relative rounded-[2rem] p-6">
                        <div className="relative rounded-[1.5rem] border border-white/10 bg-black/45 p-6">
                            <div className="mb-8 flex items-center justify-between gap-6">
                                <div>
                                    <p className="font-sacred text-xs uppercase tracking-[0.28em] text-primary">
                                        Semana atual
                                    </p>

                                    <h2 className="font-display mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.02em]">
                                        Deus Criador e o homem como imagem
                                    </h2>
                                </div>

                                <motion.div
                                    animate={{
                                        y: [0, -6, 0],
                                        boxShadow: [
                                            "0 0 24px rgba(214,181,109,0.14)",
                                            "0 0 44px rgba(214,181,109,0.28)",
                                            "0 0 24px rgba(214,181,109,0.14)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10"
                                >
                                    <BookOpen className="size-6 text-primary" />
                                </motion.div>
                            </div>

                            <div className="space-y-4">
                                {focusItems.map(({ label, value, icon: Icon }) => (
                                    <motion.div
                                        key={label}
                                        whileHover={{ y: -3, scale: 1.01 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                                    >
                                        <Icon className="mt-1 size-5 shrink-0 text-primary" />

                                        <div>
                                            <p className="font-sacred text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                                {label}
                                            </p>

                                            <p className="mt-1 text-sm text-foreground">{value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/10 p-4 text-sm leading-6 text-[#ead8ad]">
                                “No princípio era o Verbo.” Antes da queda, antes da promessa,
                                antes da história humana, Cristo já estava no centro da criação.
                            </div>

                            <div className="sacred-divider mt-8 h-px w-full" />

                            <p className="font-scroll mt-6 text-center text-sm tracking-[0.14em] text-muted-foreground">
                                Entre na jornada · Contemple o Reino · Encontre o Rei
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}