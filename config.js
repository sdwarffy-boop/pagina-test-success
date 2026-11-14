// ============================================================
//  A página de captura do Sandro Dwarffy · TEST Success · 100kMMG
//  Textos da seção 3.1 do Dossiê (skill copy-da-pagina).
//  RASCUNHO de 14/11: feito antes da fase 1 fechar. Promessa, garantia,
//  urgência e depoimento entram quando a fase 1 estiver pronta.
//  Cores e fontes ficam no marca.css (seção 3.2).
//  Seção vazia some sozinha. Nunca coloque preço aqui: é página de captura.
// ============================================================

window.PAGINA = {
  // Quem você é
  nomeProfissional: "Sandro Dwarffy",
  profissao: "Especialista TOEFL iBT",
  foto: "foto.jpg",

  // 1 · Hero
  titulo: "Chegue na prova do TOEFL sabendo o que ela espera e como responder.",
  subtitulo: "Para quem vai fazer mestrado ou doutorado fora e precisa da nota do TOEFL. Acompanhamento individual com estratégia para cada parte da prova, modelos de resposta, prática e feedback constante.",
  botao: "Quero minha estratégia para o TOEFL",

  // 2 · Problema
  problema: {
    titulo: "Se você se reconhece em alguma dessas",
    texto: "",
    itens: [
      "Você entende inglês, mas no Speaking não sabe o que dizer quando o tempo começa a correr.",
      "No Writing, as ideias estão na sua cabeça, mas não saem organizadas do jeito que a prova cobra.",
      "Você já estudou sozinha com conteúdo solto da internet e ainda não sabe se está perto da nota."
    ],
    fecho: "O problema não é o seu inglês. Muita gente chega aqui achando que precisa de um inglês muito superior ao que tem. Muitas vezes, o que falta é saber o que a prova espera e treinar do jeito certo."
  },

  // 3 · Resultado
  resultado: {
    titulo: "Como fica depois",
    texto: "Você chega no dia da prova sabendo o que cada parte cobra, com um jeito de organizar as respostas e confiança no próprio inglês. E fica mais perto do que veio buscar: a vaga no programa lá fora, o contato com as referências da sua área e o que você traz de volta para o seu trabalho no Brasil."
  },

  // 4 · Como funciona
  metodo: {
    nome: "Método D.E.A.L.",
    titulo: "Um caminho para se apoiar, do diagnóstico ao dia da prova",
    texto: "Acompanhamento individual, em média de 3 meses, com material de apoio, modelos de resposta, prática e feedback constante.",
    etapas: [
      { nome: "D · Diagnostic test", ganho: "Você sabe onde está e o que falta para a nota que o seu programa pede." },
      { nome: "E · Expansion", ganho: "Você amplia a linguagem, as estruturas de escrita, o vocabulário e a gramática que essa nota pede." },
      { nome: "A · Application", ganho: "Você aplica a estratégia e os modelos de resposta na prática, com feedback em cada resposta." },
      { nome: "L · Let's go for it", ganho: "Você vai para a prova com estratégia e confiança no próprio inglês." }
    ]
  },

  // 5 · Prova. Só provas reais, com autorização. Sem elas, demonstração e garantia.
  prova: {
    titulo: "Quem vai te acompanhar",
    depoimentos: [
      // vazio de propósito: o caso da K. (73 para 88) entra quando ela autorizar o uso fora do Instagram
    ],
    demonstracao: "Sandro Dwarffy prepara candidatos para o TOEFL há mais de 15 anos. São mais de 500 alunos treinados, dentro e fora do Brasil. Qualificado pela ETS.",
    garantia: {
      titulo: "",
      texto: ""
    }
  },

  // 6 · CTA final
  ctaFinal: {
    titulo: "Quer chegar na prova sabendo o que fazer?",
    texto: "Deixe seu nome e WhatsApp. O WhatsApp abre com uma mensagem pronta para mim, e a gente marca uma conversa para eu entender o seu objetivo e o prazo da sua prova.",
    urgencia: ""
  },

  // O contato
  modoCTA: "captacao",
  mensagemWhatsApp: "Oi, Sandro! Sou a {nome}, vim pela sua página. Vou fazer o TOEFL para estudar fora e quero uma estratégia para chegar na nota que preciso. Podemos marcar uma conversa?",
  mensagemWhatsAppDireto: "Oi, Sandro! Vim pela sua página. Vou fazer o TOEFL para estudar fora e quero uma estratégia para chegar na nota que preciso. Podemos marcar uma conversa?",
  textoConsentimento: "Autorizo o Sandro Dwarffy, da TEST Success, a falar comigo pelo WhatsApp sobre a minha preparação para o TOEFL.",

  // Técnico (skills pagina-no-ar e rastreamento)
  whatsapp: "5521979564068", // dado pelo Sandro em 14/11
  pixelId: "",               // fica para a skill rastreamento
  webhookUrl: "",
  politicaPrivacidade: "",
  modoTeste: false
};
