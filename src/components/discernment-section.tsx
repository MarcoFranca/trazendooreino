import {
    Anchor,
    Crown,
    Flame,
    Gem,
    GitBranch,
    ScrollText,
    ShieldCheck,
} from "lucide-react";

const filters = [
    {
        title: "Afirmação direta",
        text: "Quando o próprio texto declara, nomeia ou revela claramente Cristo, o Reino, a aliança ou a promessa.",
        icon: ShieldCheck,
    },
    {
        title: "Promessa messiânica",
        text: "Quando a Escritura aponta para a vinda, obra, governo ou vitória do Messias prometido.",
        icon: Crown,
    },
    {
        title: "Tipologia bíblica",
        text: "Quando pessoas, eventos ou instituições antecipam realidades cumpridas em Cristo, sem forçar o texto.",
        icon: GitBranch,
    },
    {
        title: "Tema progressivo",
        text: "Quando um tema nasce, cresce e se desenvolve ao longo da narrativa bíblica até sua plenitude.",
        icon: Anchor,
    },
    {
        title: "Aplicação espiritual",
        text: "Quando a verdade revelada confronta o coração e chama a uma resposta de arrependimento, fé e obediência.",
        icon: Flame,
    },
];

export function DiscernmentSection() {
    return (
        <section
            id="discernimento"
            className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:py-32"
        >
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.075),transparent_34%),radial-gradient(circle_at_50%_56%,rgba(214,181,109,0.032),transparent_48%)]"
            />

            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.032] [background-image:linear-gradient(rgba(214,181,109,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(214,181,109,0.045)_1px,transparent_1px)] [background-size:88px_88px]"
            />

            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_24%,rgba(0,0,0,0.52)_82%,rgba(0,0,0,0.88)_100%)]"
            />

            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 shadow-[0_0_34px_rgba(214,181,109,0.08)]">
                        <ShieldCheck className="size-4.5 text-[#d6b56d]" />
                    </div>

                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                        Filtros de discernimento
                    </p>

                    <h2 className="font-display mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                        Profundidade sem confusão.
                        <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text text-transparent">
                            Cristo no centro, sem forçar o texto.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/58">
                        A Jornada não busca conexões criativas para impressionar. Ela
                        trabalha com critérios bíblicos para ler a Escritura com reverência,
                        coerência e responsabilidade.
                    </p>
                </div>

                <div className="mt-16 grid gap-5 lg:grid-cols-[0.95fr_1.35fr]">
                    <div className="sacred-card rounded-[1.9rem] p-1">
                        <div className="relative h-full overflow-hidden rounded-[1.65rem] border border-white/8 bg-black/54 p-7 md:p-8">
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.11),transparent_42%)]"
                            />

                            <div className="relative">
                                <div className="mb-8 flex items-center justify-between gap-6">
                                    <p className="sacred-inscription max-w-xs text-[10px] leading-5 text-[#d6b56d]">
                                        O texto governa a interpretação.
                                    </p>

                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 shadow-[0_0_28px_rgba(214,181,109,0.12)]">
                                        <Gem className="size-4.5 text-[#e8cc84]" />
                                    </div>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-[#d6b56d]/35 via-[#d6b56d]/12 to-transparent" />

                                <h3 className="font-display mt-8 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-[2.35rem]">
                                    Não é imaginação espiritual.
                                    <span className="block text-[#e8d7ad]">
                                        É leitura responsável.
                                    </span>
                                </h3>

                                <p className="mt-7 max-w-xl text-base leading-8 text-white/58">
                                    Cristo é o centro das Escrituras, mas isso não autoriza
                                    leitura descuidada. A jornada preserva o texto, respeita o
                                    contexto e acompanha a revelação progressiva da história
                                    bíblica.
                                </p>

                                <div className="mt-9 rounded-[1.45rem] border border-[#d6b56d]/14 bg-[#d6b56d]/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                    <p className="font-scroll text-[1.05rem] leading-8 tracking-[0.025em] text-[#ead8ad]/88">
                                        Reverência não enfraquece a profundidade. Ela impede que a
                                        profundidade se torne confusão.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {filters.map(({ title, text, icon: Icon }, index) => (
                            <div
                                key={title}
                                className={[
                                    "group relative overflow-hidden rounded-[1.65rem] border border-[#d6b56d]/10 bg-black/38 p-6 backdrop-blur-[2px] transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.04]",
                                    index === filters.length - 1 ? "md:col-span-2" : "",
                                ].join(" ")}
                            >
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.1),transparent_46%)] opacity-0 transition duration-500 group-hover:opacity-100"
                                />

                                <div
                                    aria-hidden
                                    className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/28 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                                />

                                <div className="relative">
                                    <div className="mb-7 flex items-center justify-between gap-5">
                                        <div className="flex size-10 items-center justify-center rounded-full border border-[#d6b56d]/16 bg-[#d6b56d]/9 shadow-[0_0_26px_rgba(214,181,109,0.08)]">
                                            <Icon className="size-4.5 text-[#d6b56d]" />
                                        </div>

                                        <span className="sacred-inscription text-[10px] text-white/24">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                                        {title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/54">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-14 max-w-3xl text-center">
                    <p className="text-sm leading-7 text-white/45">
                        O objetivo não é encontrar significados escondidos em cada detalhe.
                        É aprender a ler a Bíblia inteira com Cristo no centro, o Reino como
                        mensagem e o texto como autoridade.
                    </p>
                </div>
            </div>

            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303] to-transparent"
            />
        </section>
    );
}