import {
  BookOpen,
  FileText,
  MessageCircle,
  PlayCircle,
  Radio,
  Users,
} from "lucide-react";

const steps = [
  {
    title: "Leitura semanal",
    text: "Uma porção das Escrituras é indicada a cada semana para leitura, meditação e preparação.",
    icon: BookOpen,
  },
  {
    title: "Tema da semana",
    text: "Cada encontro parte do texto lido e desenvolve um tema central ligado a Cristo, ao Reino e à transformação do coração.",
    icon: MessageCircle,
  },
  {
    title: "PDF complementar",
    text: "Um material de apoio aprofunda conexões bíblicas, textos paralelos, contexto histórico e perguntas para reflexão.",
    icon: FileText,
  },
  {
    title: "Vídeo de preparação",
    text: "Um vídeo curto apresenta o tema da semana e ajuda a preparar o coração para a leitura e a live.",
    icon: PlayCircle,
  },
  {
    title: "Live de aprofundamento",
    text: "Na live, caminhamos pelo texto, explicamos o contexto, respondemos perguntas e aplicamos a Palavra à vida.",
    icon: Radio,
  },
  {
    title: "Participação da comunidade",
    text: "As pessoas podem enviar perguntas, compartilhar percepções e caminhar juntas durante a temporada.",
    icon: Users,
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.1),transparent_34%)]"
      />

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="sacred-inscription text-[10px] text-[#d6b56d]">
            Como funciona
          </p>

          <h2 className="font-display mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
            Um caminho simples. Uma formação profunda.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/58">
            Cada temporada acompanha um livro ou bloco das Escrituras. Cada
            semana tem uma leitura, um tema, um material de apoio e uma live de
            aprofundamento.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ title, text, icon: Icon }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:border-[#d6b56d]/25 hover:bg-[#d6b56d]/[0.04]"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.08),transparent_44%)] opacity-0 transition duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/20 bg-[#d6b56d]/10 transition group-hover:shadow-[0_0_36px_rgba(214,181,109,0.15)]">
                    <Icon className="size-5 text-[#d6b56d]" />
                  </div>

                  <span className="font-sacred text-xs tracking-[0.22em] text-white/24">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold tracking-[-0.025em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/52">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-l border-[#d6b56d]/24 pl-5">
          <p className="font-scroll text-sm leading-7 tracking-[0.04em] text-[#e8d7ad]">
            A jornada não depende de pressa. Ela depende de permanência.
          </p>

          <p className="mt-2 text-sm leading-7 text-white/45">
            Semana após semana, o objetivo é caminhar com clareza, profundidade
            e reverência diante da Palavra.
          </p>
        </div>
      </div>
    </section>
  );
}