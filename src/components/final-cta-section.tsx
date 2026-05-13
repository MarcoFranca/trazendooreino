import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
    return (
        <section className="relative overflow-hidden bg-[#030303] px-6 py-28 text-white md:py-36">
            <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b56d]/10 blur-[140px]"
            />

            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,181,109,0.14),transparent_34%)]"
            />

            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
            />

            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030303] to-transparent"
            />

            <div className="relative mx-auto max-w-5xl">
                <div className="overflow-hidden rounded-[2.5rem] border border-[#d6b56d]/14 bg-black/42 p-10 text-center shadow-[0_0_80px_rgba(214,181,109,0.05)] backdrop-blur-[2px] md:p-16">
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.1),transparent_46%)]"
                    />

                    <div className="relative">
                        <div className="mx-auto mb-7 flex size-12 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 shadow-[0_0_34px_rgba(214,181,109,0.12)]">
                            <Flame className="size-5 text-[#d6b56d]" />
                        </div>

                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            O convite final
                        </p>

                        <h2 className="font-display mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white md:text-6xl">
                            A Palavra foi aberta.
                            <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text text-transparent">
                                Agora é hora de responder.
                            </span>
                        </h2>

                        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/58 md:text-lg">
                            Entre na jornada, caminhe pelas Escrituras, acompanhe cada
                            temporada e descubra Cristo ao longo da grande narrativa da
                            redenção.
                        </p>

                        <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-[#d6b56d]/42 to-transparent" />

                        <Button asChild className="cta-shimmer mt-10 h-14 rounded-full bg-[#d6b56d] px-8 text-sm font-semibold text-black shadow-[0_0_40px_rgba(214,181,109,0.2)] hover:bg-[#e7c979]">
                            <Link href="/cadastro">
                                Começar a jornada
                                <ArrowRight className="size-5" />
                            </Link>
                        </Button>

                        <p className="mt-8 text-sm tracking-[0.03em] text-white/34">
                            Leitura semanal • PDFs • Lives • Comunidade
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
