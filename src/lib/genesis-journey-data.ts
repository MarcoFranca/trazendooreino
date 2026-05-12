export const genesisJourney = {
    title: "Gênesis: Do Éden à Promessa",
    subtitle: "Jornada 1",
    duration: "15 encontros",
    mainText:
        "Deus cria, o homem cai, a promessa nasce, a aliança avança e a providência conduz a história até Cristo.",
    identity:
        "De Gênesis à Nova Criação, toda a Escritura aponta para o Rei.",
    objective:
        "Conduzir pessoas a entenderem Gênesis como o início da grande história bíblica: criação, queda, promessa, juízo, graça, aliança, fé, providência e esperança messiânica.",
};

export const genesisWeeks = [
    {
        week: "00",
        reading: "Lucas 24:44; João 5:39; 2Tm 3:16–17; Gl 1:8",
        title: "Como ler as Escrituras com Cristo no centro",
        christ: "Cristo como chave da Escritura",
        kingdom: "O Reino como mensagem bíblica",
        status: "available",
    },
    {
        week: "01",
        reading: "Gênesis 1–2",
        title: "Deus Criador e o homem como imagem",
        christ: "O Verbo por quem tudo foi criado",
        kingdom: "Deus governa a criação",
        status: "current",
    },
    {
        week: "02",
        reading: "Gênesis 3",
        title: "A queda e a primeira promessa",
        christ: "A Semente que vence a serpente",
        kingdom: "Pecado é rebelião contra Deus",
        status: "locked",
    },
    {
        week: "03",
        reading: "Gênesis 4–5",
        title: "Dois caminhos diante de Deus",
        christ: "O sangue justo e a fé que agrada a Deus",
        kingdom: "O coração humano se divide diante do Rei",
        status: "locked",
    },
    {
        week: "04",
        reading: "Gênesis 6–9",
        title: "Noé: juízo, graça e recomeço",
        christ: "Salvação pela graça em meio ao juízo",
        kingdom: "Deus julga o mal e preserva a vida",
        status: "locked",
    },
    {
        week: "05",
        reading: "Gênesis 10–11",
        title: "Babel e os reinos dos homens",
        christ: "Cristo reúne o que o pecado espalhou",
        kingdom: "Império humano contra o Reino de Deus",
        status: "locked",
    },
    {
        week: "06",
        reading: "Gênesis 12–15",
        title: "Abraão: chamado, promessa e fé",
        christ: "A bênção às nações em Cristo",
        kingdom: "O Reino avança por promessa",
        status: "locked",
    },
    {
        week: "07",
        reading: "Gênesis 16–18",
        title: "Esperar em Deus ou produzir Ismael",
        christ: "A promessa depende de Deus, não da carne",
        kingdom: "Fé contra controle humano",
        status: "locked",
    },
    {
        week: "08",
        reading: "Gênesis 19–21",
        title: "Juízo, livramento e filho da promessa",
        christ: "Deus preserva a linhagem da promessa",
        kingdom: "O Reino separa, julga e cumpre",
        status: "locked",
    },
    {
        week: "09",
        reading: "Gênesis 22",
        title: "O Senhor proverá",
        christ: "O filho amado e a provisão de Deus",
        kingdom: "Adoração, entrega e confiança total",
        status: "locked",
    },
    {
        week: "10",
        reading: "Gênesis 23–26",
        title: "A promessa continua",
        christ: "A aliança atravessa gerações",
        kingdom: "Deus mantém sua palavra",
        status: "locked",
    },
    {
        week: "11",
        reading: "Gênesis 27–31",
        title: "Jacó: engano, fuga e graça",
        christ: "Deus alcança pessoas quebradas",
        kingdom: "O Reino transforma enganadores em servos",
        status: "locked",
    },
    {
        week: "12",
        reading: "Gênesis 32–36",
        title: "Um novo nome, um novo homem",
        christ: "Rendição, transformação e identidade",
        kingdom: "O Reino forma um povo novo",
        status: "locked",
    },
    {
        week: "13",
        reading: "Gênesis 37–41",
        title: "José: sofrimento e providência",
        christ: "O justo humilhado e exaltado",
        kingdom: "Deus governa mesmo no silêncio",
        status: "locked",
    },
    {
        week: "14",
        reading: "Gênesis 42–50",
        title: "Perdão, preservação e redenção",
        christ: "Deus transforma mal em salvação",
        kingdom: "Reconciliação, missão e preservação da promessa",
        status: "locked",
    },
];

export const currentGenesisWeek = genesisWeeks.find(
    (week) => week.status === "current"
)!;

export const genesisResources = [
    "Página da semana",
    "PDF complementar",
    "Vídeo de preparação",
    "Live de aprofundamento",
    "Perguntas da comunidade",
    "Arquivo da live",
];

export const genesisOutcomes = [
    "Deus como Criador, Rei, Juiz, Redentor e Deus da promessa.",
    "O ser humano como imagem de Deus, caído e necessitado de graça.",
    "O pecado como rebelião contra o governo de Deus.",
    "A promessa da Semente como esperança messiânica.",
    "Cristo como Verbo criador, último Adão, provisão e cumprimento da aliança.",
    "O Reino como governo de Deus restaurando criação, famílias e nações.",
];