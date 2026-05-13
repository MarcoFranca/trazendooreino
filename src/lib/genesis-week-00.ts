type Week00Section = {
    id: string;
    eyebrow: string;
    title: string;
    body: string[];
    bullets?: string[];
    questions?: string[];
};

export const genesisWeek00 = {
    week: "00",
    title: "Como ler as Escrituras com Cristo no centro",
    subtitle:
        "Uma introducao ao metodo da Jornada pelas Escrituras do Reino: ler a Biblia como testemunho de Cristo, revelacao do Reino, chamado ao arrependimento e caminho de transformacao pela graca.",
    coverPhrase:
        "Antes de atravessar a historia, precisamos aprender a enxergar o Rei.",
    intro: [
        "A Jornada pelas Escrituras do Reino e uma caminhada de leitura biblica, estudo e discipulado.",
        "Nao caminharemos pela Biblia apenas para acumular informacao, conhecer historias antigas ou dominar temas religiosos. Caminharemos pelas Escrituras para contemplar Cristo, compreender o Reino de Deus, discernir o coracao humano e responder a Palavra com arrependimento, fe, obediencia e transformacao.",
        "A Biblia nao e uma sequencia de livros isolados. E uma historia conduzida por Deus, atravessada por criacao, queda, promessa, alianca, juizo, graca, redencao e Reino.",
        "Se lermos apenas com curiosidade, encontraremos misterios. Se lermos apenas com moralismo, encontraremos regras. Mas se lermos com Cristo no centro, encontraremos o Rei, a graca, o chamado ao arrependimento e a esperanca da nova criacao.",
    ],
    objective: [
        "Responder como Jesus lia as Escrituras.",
        "Discernir o centro da Biblia e o significado de ler com Cristo no centro.",
        "Evitar interpretacoes perigosas, especulativas ou descoladas do Evangelho.",
        "Transformar leitura biblica em discipulado real, com reverencia e resposta pratica.",
    ],
    readings: [
        "Lucas 24:44-48",
        "Joao 5:39-40",
        "2 Timoteo 3:14-17",
        "Hebreus 1:1-3",
        "Galatas 1:6-9",
    ],
    supportReadings: [
        "Mateus 4:17",
        "Marcos 1:14-15",
        "Atos 28:23",
        "Colossenses 1:15-20",
        "Apocalipse 21-22",
    ],
    thesis:
        "Lemos as Escrituras corretamente quando somos conduzidos por elas ate Cristo, submetidos ao Evangelho, confrontados pela verdade, firmados na graca e reposicionados diante do Reino de Deus.",
    sections: [
        {
            id: "christ-key",
            eyebrow: "Cristo como chave",
            title: "Cristo nao e um detalhe acrescentado no fim da Biblia.",
            body: [
                "Em Lucas 24, Jesus ensina seus discipulos a lerem a Lei, os Profetas e os Salmos como testemunho que caminha ate Ele.",
                "Isso nao significa forcar Jesus em cada detalhe do texto de maneira artificial. Significa que toda a historia biblica caminha para Ele, encontra cumprimento nEle e so e plenamente compreendida a luz da sua pessoa, obra, morte, ressurreicao, Reino e volta.",
            ],
            bullets: [
                "Cristo cumpre as promessas.",
                "Cristo revela o Pai.",
                "Cristo expõe o pecado que veio vencer.",
                "Cristo inaugura o Reino que as Escrituras anunciam.",
            ],
            questions: [
                "Este texto promete Cristo?",
                "Este texto revela a necessidade de Cristo?",
                "Este texto anuncia o Reino que Cristo veio inaugurar?",
            ],
        },
        {
            id: "scripture-rule",
            eyebrow: "Escritura como regra",
            title: "A Escritura governa. O resto apenas pode iluminar.",
            body: [
                "A base da fe e a Escritura: o Tanakh, os Evangelhos e o ensino apostolico do Novo Testamento.",
                "Literatura judaica do Segundo Templo, Septuaginta, Qumran ou pais apostolicos podem ajudar com contexto, mas nao governam a fe, nao redefinem Jesus e nao criam outra mensagem.",
            ],
            bullets: [
                "Podem servir como janela.",
                "Nao podem ser fundamento.",
                "Podem oferecer contexto.",
                "Nao podem ter autoridade final.",
            ],
        },
        {
            id: "gospel-guard",
            eyebrow: "O Evangelho nao pode ser alterado",
            title: "Toda profundidade precisa continuar guardada pela simplicidade do Evangelho.",
            body: [
                "Galatas 1 protege a jornada contra qualquer mensagem que desloque Cristo, troque graca por medo ou transforme salvacao em conhecimento secreto.",
                "Quando surgirem materiais, tradicoes e teorias, o teste continua sendo o Evangelho anunciado por Cristo e pelos apostolos.",
            ],
            bullets: [
                "Se diminui Cristo, rejeite.",
                "Se troca graca por medo, reavalie.",
                "Se centraliza anjos, codigos ou mediadores, perdeu o caminho.",
                "Se contradiz as palavras claras de Jesus, nao pode governar a fe.",
            ],
        },
        {
            id: "kingdom-message",
            eyebrow: "Reino como mensagem",
            title: "A Biblia revela o governo de Deus irrompendo na historia pelo Rei.",
            body: [
                "Jesus nao anunciou apenas religiao. Ele anunciou o Reino de Deus, chamando ao arrependimento, a fe e a obediencia.",
                "Por isso, em cada texto perguntaremos onde vemos o governo de Deus, a rebeliao humana, o juizo, a graca, a promessa, a restauracao e a preparacao para Cristo, o Rei.",
            ],
            bullets: [
                "Em Genesis veremos criacao, ordem, queda, promessa e providencia.",
                "Nos Evangelhos veremos o Rei chegando.",
                "Em Apocalipse veremos a consumacao: o Cordeiro vence e Deus habita com seu povo.",
            ],
        },
        {
            id: "grace-repentance",
            eyebrow: "Graca, arrependimento e transformacao",
            title: "A Palavra confronta para curar, e a graca sustenta a resposta.",
            body: [
                "Estudar as Escrituras com profundidade nao deve produzir medo escravizante, mas discipulos firmados em Cristo.",
                "A graca nao e permissao para permanecer no pecado. E o poder de Deus que nos alcanca, perdoa, transforma e conduz a obediencia.",
                "O Reino comeca com arrependimento: mudanca de direcao diante de Deus, retorno ao governo do Rei e fe na graca.",
                "O fruto esperado da jornada nao e informacao fria, mas reverencia, humildade, obediencia, perseveranca e vida no Reino.",
            ],
        },
    ] satisfies Week00Section[],
    principles: [
        "A Palavra primeiro.",
        "O tema nasce do texto, nao da imposicao do leitor.",
        "Cristo revelado no fio da narrativa biblica.",
        "O Reino discernido no governo, no juizo, na graca e na restauracao.",
        "O coracao confrontado, nao apenas informado.",
        "Toda semana termina com resposta pratica.",
    ],
    filters: [
        "Cristo continua no centro?",
        "A graca continua firme?",
        "O texto confirma o Evangelho ou cria outro?",
        "Produz arrependimento ou apenas curiosidade?",
        "Contradiz palavras claras de Jesus?",
        "Pode ser confirmado pelo nucleo biblico?",
        "Edifica o coracao ou alimenta especulacao?",
    ],
    whatItIs: [
        "Uma caminhada pela Palavra com reverencia.",
        "Uma formacao para o discipulado.",
        "Uma busca por Cristo em toda a Escritura.",
        "Um caminho para compreender o Reino.",
        "Uma preparacao do coracao para a vinda do Rei.",
    ],
    whatItIsNot: [
        "Nao e uma busca por codigos ocultos.",
        "Nao e uma tentativa de prever datas.",
        "Nao e uma espiritualidade baseada em medo.",
        "Nao e um espaco para substituir a simplicidade do Evangelho por teorias.",
        "Nao e uma leitura onde livros antigos governam a fe.",
    ],
    seasonMap: [
        {
            week: "00",
            title: "Como ler as Escrituras com Cristo no centro",
            theme: "O metodo da jornada.",
            reading: "Lucas 24:44-48; Joao 5:39-40; 2 Timoteo 3:14-17; Galatas 1:6-9",
        },
        {
            week: "01",
            title: "Deus Criador e o homem como imagem",
            theme: "O Reino comeca com Deus governando a criacao.",
            reading: "Genesis 1-2",
        },
        {
            week: "02",
            title: "A queda e a primeira promessa",
            theme: "O pecado rompe a comunhao, mas Deus anuncia redencao.",
            reading: "Genesis 3",
        },
        {
            week: "03",
            title: "Dois caminhos diante de Deus",
            theme: "A humanidade se divide entre fe, rebeliao e busca por Deus.",
            reading: "Genesis 4-5",
        },
        {
            week: "04",
            title: "Noe: juizo, graca e recomeco",
            theme: "Deus julga a corrupcao, mas preserva pela graca.",
            reading: "Genesis 6-9",
        },
        {
            week: "05",
            title: "Babel e os reinos dos homens",
            theme: "O homem constroi imperios; Deus chama um povo.",
            reading: "Genesis 10-11",
        },
    ],
    exercises: [
        {
            title: "Leia Lucas 24:44-48 com calma",
            prompts: [
                "O que Jesus diz sobre a Lei, os Profetas e os Salmos?",
                "Como sofrimento, ressurreicao, arrependimento e perdao aparecem juntos?",
                "O que isso muda na forma como voce vai ler Genesis?",
            ],
        },
        {
            title: "Discernimento do coracao",
            prompts: [
                "Que perigo voce precisa evitar nesta jornada: curiosidade sem arrependimento, debate sem adoracao, medo sem graca ou leitura sem Cristo?",
                "Escreva uma oracao curta pedindo reverencia, discernimento e fome pela Palavra.",
            ],
        },
    ],
    reflectionQuestions: [
        "Tenho lido a Biblia buscando Cristo ou apenas buscando informacao?",
        "Minha leitura da Palavra tem produzido arrependimento?",
        "Tenho confundido profundidade espiritual com curiosidade?",
        "Existe alguma area onde desejo conhecimento, mas resisto a obediencia?",
        "A graca de Cristo tem sido minha seguranca ou tenho vivido por desempenho?",
        "Quando leio as Escrituras, espero ser confrontado por Deus?",
        "O Reino de Deus governa minha vida ou apenas ocupa meus estudos?",
        "Tenho usado textos dificeis para fugir dos textos claros?",
    ],
    meditation: [
        "Nao lemos para dominar o texto. Lemos para sermos dominados pela Palavra de Deus.",
        "Nao buscamos misterios para fugir da obediencia. Buscamos Cristo para viver diante do Rei.",
        "Livros antigos podem iluminar o caminho, mas Cristo e o Senhor do caminho.",
        "A Biblia comeca com criacao, passa pela queda, avanca pela promessa e termina com Deus habitando com seu povo.",
    ],
    prayer: [
        "Senhor Deus, abre nossos olhos para enxergarmos Cristo nas Escrituras.",
        "Livra-nos de uma leitura fria, orgulhosa ou apenas curiosa.",
        "Livra-nos de trocar a simplicidade do Evangelho por especulacoes.",
        "Da-nos reverencia diante da tua Palavra, fe para receber a graca e coragem para obedecer.",
        "Conduze-nos pelas Escrituras ate Cristo. Firma-nos na graca. Ensina-nos o Reino. Forma nosso coracao.",
    ],
    finalStatement:
        "Cristo como centro. Escritura como regra. Graca como seguranca. Arrependimento como resposta. Reino como mensagem. Transformacao como fruto. Vinda de Cristo como esperanca.",
    backCover: [
        "Antes de comecarmos Genesis, comecamos com reverencia.",
        "A Jornada pelas Escrituras do Reino nao existe para produzir curiosidade religiosa, mas para conduzir pessoas a Cristo.",
        "Na proxima semana, comecaremos pelo principio: Genesis 1-2, Deus Criador e o homem como imagem.",
    ],
    nextWeek: {
        href: "/genesis/01",
        title: "Genesis 1-2 · Deus Criador e o homem como imagem",
    },
} as const;
