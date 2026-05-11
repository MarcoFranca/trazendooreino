import { ArrowUpRight, Crown } from "lucide-react";

const links = [
    { label: "Jornada", href: "#jornada" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Mapa bíblico", href: "#mapa" },
    { label: "Temporada atual", href: "#genesis" },
];

export function SiteFooter() {
    return (
        <footer className="relative overflow-hidden bg-[#030303] px-6 py-16 text-white">
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
            />

            <div
                aria-hidden
                className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d6b56d]/8 blur-[120px]"
            />

            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-10 border-b border-white/8 pb-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                    <div>
                        <div className="mb-5 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 shadow-[0_0_34px_rgba(214,181,109,0.08)]">
                            <Crown className="size-4.5 text-[#d6b56d]" />
                        </div>

                        <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                            Trazendo o Reino
                        </p>

                        <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl">
                            Uma jornada pelas Escrituras.
                            <span className="block text-[#e8d7ad]">
                                Cristo no centro. O Reino como mensagem.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/46">
                            Leitura bíblica, formação espiritual e discernimento cristocêntrico
                            para caminhar pela grande narrativa da redenção.
                        </p>
                    </div>

                    <nav className="flex flex-col gap-3 md:items-end">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="group inline-flex items-center gap-2 text-sm text-white/48 transition hover:text-[#e8cc84]"
                            >
                                {link.label}
                                <ArrowUpRight className="size-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-col gap-4 pt-8 text-xs text-white/32 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} Marco França. Todos os direitos reservados.</p>

                    <p className="font-scroll tracking-[0.04em] text-[#e8d7ad]/52">
                        “No princípio era o Verbo.”
                    </p>
                </div>
            </div>
        </footer>
    );
}