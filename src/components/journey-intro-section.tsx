import { BookOpenCheck, Cross, Heart, Map, MoveDown } from "lucide-react";

const points = [
    {
        title: "Leitura bíblica",
        text: "Percorremos as Escrituras livro por livro, respeitando o texto, o contexto e a grande história da redenção.",
        icon: BookOpenCheck,
    },
    {
        title: "Cristo no centro",
        text: "Não buscamos apenas informações antigas. Buscamos o testemunho que conduz ao Messias e confirma o Evangelho.",
        icon: Cross,
    },
    {
        title: "Reino como mensagem",
        text: "A jornada revela o governo de Deus, a rebelião humana e a restauração prometida em Cristo.",
        icon: Map,
    },
    {
        title: "Transformação como fruto",
        text: "O estudo verdadeiro não termina em conhecimento, mas em arrependimento, fé, obediência e vida renovada.",
        icon: Heart,
    },
];

export function JourneyIntroSection() {
    return (
        <section
            id="jornada"
            className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:py-28"
        >
            {/* transição suave vindo do hero */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030303] to-transparent"
            />

            {/* aura central discreta */}
            <div
                aria-hidden
                className="absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#d6b56d]/[0.06] blur-[120px]"
            />

            {/* linha superior ritual */}
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
                    <div className="mb-7 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10">
                        <MoveDown className="size-4 text-[#d6b56d]" />
                    </div>

                    <p className="sacred-inscription text-[10px] text-[#d6b56d]">
                        O que é a jornada
                    </p>

                    <h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-5xl">
                        Uma caminhada pelas Escrituras, não apenas uma sequência de estudos.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
                        A Jornada pelas Escrituras do Reino é um caminho de leitura bíblica,
                        estudo e discipulado. Vamos percorrer a Bíblia livro por livro,
                        buscando compreender como toda a história aponta para Cristo,
                        revela o Reino de Deus, confronta o coração humano e nos chama a
                        uma resposta de arrependimento, fé e obediência.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    {/* manifesto lateral */}
                    <div className="rounded-[2rem] border border-[#d6b56d]/14 bg-white/[0.018] p-7 backdrop-blur-xl">
                        <p className="font-scroll text-base leading-8 tracking-[0.04em] text-[#e8d7ad]">
                            O objetivo não é apenas terminar livros da Bíblia.
                        </p>

                        <div className="my-6 h-px w-full bg-gradient-to-r from-[#d6b56d]/35 to-transparent" />

                        <p className="text-sm leading-8 text-white/50">
                            É ser conduzido pela Palavra até Cristo, ter a mente renovada, o
                            coração confrontado e a vida reposicionada diante do Rei.
                        </p>

                        <div className="mt-8 rounded-2xl border border-white/8 bg-black/24 p-5">
                            <p className="text-sm leading-7 text-white/44">
                                A jornada não começa com curiosidade. Começa com reverência.
                                Não termina em informação. Termina em resposta.
                            </p>
                        </div>
                    </div>

                    {/* pilares */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {points.map(({ title, text, icon: Icon }) => (
                            <div
                                key={title}
                                className="group rounded-[1.75rem] border border-white/9 bg-white/[0.022] p-6 transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.035]"
                            >
                                <div className="mb-7 flex size-10 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 transition group-hover:border-[#d6b56d]/32 group-hover:bg-[#d6b56d]/12">
                                    <Icon className="size-4.5 text-[#d6b56d]" />
                                </div>

                                <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-white">
                                    {title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/50">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* fade para próxima seção */}
            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303] to-transparent"
            />
        </section>
    );
}