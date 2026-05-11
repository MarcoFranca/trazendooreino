import {
    BookOpen,
    Crown,
    Flame,
    Heart,
    ScrollText,
    Sparkles,
} from "lucide-react";

const pillars = [
    {
        title: "As Escrituras como caminho",
        description:
            "Não percorremos textos isolados. Seguimos a revelação progressiva do Reino através da história.",
        icon: BookOpen,
    },
    {
        title: "O Rei revelado",
        description:
            "Toda a narrativa converge para Cristo — não como símbolo religioso, mas como cumprimento, governo e redenção.",
        icon: Crown,
    },
    {
        title: "Uma única história",
        description:
            "Da criação à restauração, as Escrituras revelam um Reino, um conflito e um Rei.",
        icon: ScrollText,
    },
    {
        title: "Resposta, não acúmulo",
        description:
            "Conhecimento sem rendição produz orgulho. A verdade bíblica exige arrependimento, fé e obediência.",
        icon: Heart,
    },
];

export function JourneyIntroSection() {
    return (
        <section
            id="jornada"
            className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:py-32"
        >
            <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center opacity-[0.22]"
                style={{
                    backgroundImage: "url('/images/journey-path.png')",
                    backgroundPosition: "center center",
                }}
            />

            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(214,181,109,0.16),transparent_34%),radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.08),transparent_38%)]"
            />

            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,0.25)_78%,rgba(0,0,0,0.85)_100%)]"
            />

            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
            />

            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
            />

            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent"
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 shadow-[0_0_34px_rgba(214,181,109,0.08)]">
                        <Flame className="size-4.5 text-[#d6b56d]" />
                    </div>

                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                        A jornada
                    </p>

                    <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                        Não começamos com informação.
                        <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text text-transparent">
                            Começamos com reverência.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62">
                        A Jornada pelas Escrituras do Reino não foi criada para produzir
                        leitores religiosos. Foi criada para conduzir homens e mulheres
                        através da narrativa da redenção até que Cristo deixe de ser apenas
                        conhecido e passe a ser visto.
                    </p>
                </div>

                <div className="mt-16 grid gap-5 lg:grid-cols-[1.08fr_1.32fr]">
                    <div className="sacred-card rounded-[1.9rem] p-1">
                        <div className="relative h-full overflow-hidden rounded-[1.65rem] border border-white/8 bg-black/54 p-7 backdrop-blur-[2px] md:p-8">
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.11),transparent_42%)]"
                            />

                            <div className="relative">
                                <div className="mb-8 flex items-center justify-between gap-6">
                                    <p className="sacred-inscription max-w-xs text-[10px] leading-5 text-[#d6b56d]">
                                        O objetivo nunca foi terminar livros da Bíblia.
                                    </p>

                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 shadow-[0_0_28px_rgba(214,181,109,0.12)]">
                                        <Sparkles className="size-4.5 text-[#e8cc84]" />
                                    </div>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-[#d6b56d]/35 via-[#d6b56d]/12 to-transparent" />

                                <h3 className="font-display mt-8 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white drop-shadow-[0_0_24px_rgba(214,181,109,0.08)] md:text-[2.45rem]">
                                    A Palavra conduz.
                                    <span className="block text-white/72">
                                        Cristo confronta.
                                    </span>
                                    <span className="block text-[#e8d7ad]">
                                        O Reino reposiciona.
                                    </span>
                                </h3>

                                <p className="mt-7 max-w-xl text-base leading-8 text-white/62">
                                    A Jornada existe para conduzir pessoas até Cristo com a
                                    mente renovada, o coração confrontado e a vida reposicionada
                                    diante do Rei.
                                </p>

                                <div className="mt-9 rounded-[1.45rem] border border-[#d6b56d]/14 bg-[#d6b56d]/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                    <p className="font-scroll text-[1.05rem] leading-8 tracking-[0.025em] text-[#ead8ad]/88">
                                        As Escrituras não foram dadas apenas para serem
                                        compreendidas. Foram dadas para revelar, confrontar e
                                        transformar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {pillars.map(({ title, description, icon: Icon }) => (
                            <div
                                key={title}
                                className="group relative min-h-[15rem] overflow-hidden rounded-[1.65rem] border border-[#d6b56d]/10 bg-black/36 p-7 backdrop-blur-[2px] transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.04]"
                            >
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.11),transparent_46%)] opacity-0 transition duration-500 group-hover:opacity-100"
                                />

                                <div
                                    aria-hidden
                                    className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/28 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                                />

                                <div className="relative">
                                    <div className="mb-8 flex size-10 items-center justify-center rounded-full border border-[#d6b56d]/16 bg-[#d6b56d]/9 shadow-[0_0_26px_rgba(214,181,109,0.08)]">
                                        <Icon className="size-4.5 text-[#d6b56d]" />
                                    </div>

                                    <h3 className="font-display text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                                        {title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/56">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}