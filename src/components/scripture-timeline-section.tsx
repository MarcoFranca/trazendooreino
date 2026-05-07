import {
    ArrowRight,
    BookOpen,
    Crown,
    Flame,
    ScrollText,
    Sparkles,
} from "lucide-react";

const timeline = [
    {
        number: "01",
        title: "Gênesis",
        description: "Do Éden à Promessa",
        kind: "beginning",
    },
    {
        number: "02",
        title: "Êxodo",
        description: "Da Escravidão à Presença",
        kind: "normal",
    },
    {
        number: "03",
        title: "Torá",
        description: "Santidade, Deserto e Aliança",
        kind: "normal",
    },
    {
        number: "04",
        title: "Terra Prometida",
        description: "Conquista, Queda e Redenção",
        kind: "normal",
    },
    {
        number: "05",
        title: "Reino e Exílio",
        description: "Davi, Idolatria, Profetas e Juízo",
        kind: "normal",
    },
    {
        number: "06",
        title: "Escritos",
        description: "Sabedoria, Louvor e Sofrimento",
        kind: "normal",
    },
    {
        number: "07",
        title: "Profetas",
        description: "Juízo, Nova Aliança e Esperança Messiânica",
        kind: "normal",
    },
    {
        number: "08",
        title: "Evangelhos",
        description: "O Rei chegou",
        kind: "king",
    },
    {
        number: "09",
        title: "Atos e Cartas",
        description: "O Reino em missão",
        kind: "normal",
    },
    {
        number: "10",
        title: "Apocalipse",
        description: "A consumação do Reino",
        kind: "consummation",
    },
];

function TimelineIcon({ kind }: { kind: string }) {
    if (kind === "beginning") {
        return <Flame className="size-4 text-[#d6b56d]" />;
    }

    if (kind === "king") {
        return <Crown className="size-4 text-[#d6b56d]" />;
    }

    if (kind === "consummation") {
        return <Sparkles className="size-4 text-[#d6b56d]" />;
    }

    return <BookOpen className="size-4 text-white/28 transition group-hover:text-[#d6b56d]" />;
}

export function ScriptureTimelineSection() {
    return (
        <section
            id="mapa"
            className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:py-28"
        >
            {/* aura superior */}
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.095),transparent_34%)]"
            />

            {/* textura suave */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
            />

            {/* linha ritual superior */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 shadow-[0_0_34px_rgba(214,181,109,0.08)]">
                        <ScrollText className="size-4.5 text-[#d6b56d]" />
                    </div>

                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                        O mapa da grande história
                    </p>

                    <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl">
                        De Gênesis à Nova Criação
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58">
                        Caminharemos pelas Escrituras em temporadas, acompanhando a grande
                        história bíblica até Cristo e a consumação do Reino.
                    </p>

                    <div className="mx-auto mt-7 max-w-2xl border-l border-r border-[#d6b56d]/12 px-6">
                        <p className="font-scroll text-sm leading-7 tracking-[0.035em] text-[#e8d7ad]/82">
                            A Bíblia não é uma sequência de livros isolados. É uma história
                            conduzida por Deus, atravessada por promessa, juízo, graça,
                            redenção e Reino.
                        </p>
                    </div>
                </div>

                {/* timeline */}
                <div className="relative mt-16">


                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                        {timeline.map((item) => {
                            const isMajor =
                                item.kind === "beginning" ||
                                item.kind === "king" ||
                                item.kind === "consummation";

                            return (
                                <div
                                    key={item.number}
                                    className={[
                                        "group relative overflow-hidden rounded-[1.65rem] border p-5 transition duration-500",
                                        isMajor
                                            ? "border-[#d6b56d]/22 bg-[#d6b56d]/[0.055] shadow-[0_0_42px_rgba(214,181,109,0.055)]"
                                            : "border-white/9 bg-white/[0.022] hover:border-[#d6b56d]/22 hover:bg-[#d6b56d]/[0.035]",
                                    ].join(" ")}
                                >
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.08),transparent_48%)] opacity-0 transition duration-500 group-hover:opacity-100"
                                    />

                                    <div className="relative">
                                        <div className="mb-7 flex items-center justify-between">
                      <span className="sacred-inscription text-[10px] text-[#d6b56d]/80">
                        {item.number}
                      </span>

                                            <div className="flex size-8 items-center justify-center rounded-full border border-[#d6b56d]/14 bg-black/20">
                                                <TimelineIcon kind={item.kind} />
                                            </div>
                                        </div>

                                        <h3 className="font-display text-[1.55rem] font-semibold leading-none tracking-[-0.025em] text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 min-h-12 text-sm leading-6 text-white/48">
                                            {item.description}
                                        </p>

                                        <div className="mt-6 h-px w-full bg-gradient-to-r from-[#d6b56d]/28 to-transparent opacity-60" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center text-center">
                    <p className="text-sm leading-7 text-white/48">
                        Cada temporada aprofunda uma parte da história. Cada etapa revela
                        mais do governo de Deus, da rebelião humana, da promessa de
                        redenção e da centralidade de Cristo.
                    </p>

                    <a
                        href="#genesis"
                        className="cta-shimmer mt-8 inline-flex items-center gap-2 rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 px-5 py-3 text-sm font-medium text-[#e8cc84] transition hover:bg-[#d6b56d]/15"
                    >
                        Ver temporada atual
                        <ArrowRight className="size-4" />
                    </a>
                </div>
            </div>

            {/* fade inferior */}
            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303] to-transparent"
            />
        </section>
    );
}