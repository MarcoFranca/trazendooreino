import {
  BookOpen,
  FileText,
  MessageCircle,
  PlayCircle,
  Radio,
  ScrollText,
  Users,
} from "lucide-react";

const steps = [
  {
    title: "A Palavra primeiro",
    text: "A semana começa com uma porção das Escrituras. Antes de qualquer explicação, o texto conduz a atenção, a mente e o coração.",
    icon: BookOpen,
  },
  {
    title: "Um tema central",
    text: "Cada encontro nasce do texto lido e revela uma linha de tensão: Cristo, Reino, promessa, queda, redenção e resposta.",
    icon: MessageCircle,
  },
  {
    title: "Material de apoio",
    text: "Um PDF aprofunda conexões bíblicas, contexto histórico, textos paralelos e perguntas que ajudam a permanecer no texto.",
    icon: FileText,
  },
  {
    title: "Preparação guiada",
    text: "Um vídeo curto abre a semana, apresenta o tema e prepara o coração para ler com reverência, clareza e expectativa.",
    icon: PlayCircle,
  },
  {
    title: "Aprofundamento ao vivo",
    text: "Na live, caminhamos pelo texto, organizamos o contexto, respondemos perguntas e aplicamos a Palavra à vida real.",
    icon: Radio,
  },
  {
    title: "Caminhada em comunidade",
    text: "A jornada não é solitária. Perguntas, percepções e respostas são compartilhadas ao longo da temporada.",
    icon: Users,
  },
];

export function HowItWorksSection() {
  return (
      <section
          id="como-funciona"
          className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:py-32"
      >
        <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.09),transparent_34%),radial-gradient(circle_at_50%_55%,rgba(214,181,109,0.035),transparent_48%)]"
        />

        <div
            aria-hidden
            className="absolute inset-0 opacity-[0.032] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
        />

        <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d6b56d]/24 to-transparent"
        />

        <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[26rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#d6b56d]/7 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 shadow-[0_0_34px_rgba(214,181,109,0.08)]">
              <ScrollText className="size-4.5 text-[#d6b56d]" />
            </div>

            <p className="sacred-inscription text-[10px] text-[#d6b56d]">
              Como a jornada acontece
            </p>

            <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Um ritmo simples.
              <span className="block bg-gradient-to-b from-[#fff7df] via-[#e9cf8c] to-[#a97935] bg-clip-text text-transparent">
                            Uma formação profunda.
                        </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/58">
              Cada temporada tem uma cadência clara: leitura, preparação,
              aprofundamento e resposta. Não para consumir conteúdo. Para
              permanecer diante da Palavra até que ela forme visão, convicção e
              obediência.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ title, text, icon: Icon }, index) => (
                <div
                    key={title}
                    className="group relative min-h-[16rem] overflow-hidden rounded-[1.65rem] border border-[#d6b56d]/10 bg-white/[0.022] p-6 transition duration-500 hover:border-[#d6b56d]/24 hover:bg-[#d6b56d]/[0.04]"
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
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-full border border-[#d6b56d]/18 bg-[#d6b56d]/9 shadow-[0_0_26px_rgba(214,181,109,0.08)] transition group-hover:shadow-[0_0_38px_rgba(214,181,109,0.14)]">
                        <Icon className="size-5 text-[#d6b56d]" />
                      </div>

                      <span className="sacred-inscription text-[10px] text-white/24">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                    </div>

                    <h3 className="font-display text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/52">
                      {text}
                    </p>

                    <div className="mt-7 h-px w-full bg-gradient-to-r from-[#d6b56d]/24 to-transparent opacity-55" />
                  </div>
                </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative overflow-hidden rounded-[1.55rem] border border-[#d6b56d]/14 bg-[#d6b56d]/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,181,109,0.08),transparent_48%)]"
              />

              <div className="relative border-l border-[#d6b56d]/28 pl-5">
                <p className="font-scroll text-sm leading-7 tracking-[0.04em] text-[#e8d7ad]">
                  A jornada não depende de pressa. Ela depende de permanência.
                </p>

                <p className="mt-2 text-sm leading-7 text-white/48">
                  Semana após semana, o caminho é o mesmo: abrir as Escrituras,
                  enxergar Cristo, discernir o Reino e responder com fé.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030303] to-transparent"
        />
      </section>
  );
}