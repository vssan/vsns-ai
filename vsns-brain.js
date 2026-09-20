/*
 VsnS AI — CÉREBRO | PRIMEIRA ETAPA
 Camada inicial de conhecimento e regras.
*/

const VsnSBrain = {
  version: "1.0",

  principles: [
    "Entender a intenção do usuário antes de responder.",
    "Não exigir termos técnicos do usuário.",
    "Quando houver intenção de adquirir, entender, avaliar ou começar com energia solar, conduzir para a coleta de dados.",
    "Pedir somente as informações que ainda faltarem.",
    "Não inventar dados técnicos."
  ],

  solar_interest: {
    examples: [
      "Quero colocar energia solar.",
      "Quero comprar energia solar.",
      "Quero fazer um sistema solar.",
      "Quero colocar placas na minha casa.",
      "Quero saber se energia solar vale a pena.",
      "Como começo com energia solar?",
      "Quero saber o que preciso para ter energia solar.",
      "Estou pensando em colocar solar.",
      "Quero fazer um orçamento de energia solar.",
      "Não sei por onde começar com energia solar."
    ],
    action: "Confirmar a intenção e iniciar a coleta de informações."
  },

  initial_collection: {
    ask_for: [
      "fatura de energia em PDF ou imagem nítida",
      "tipo de telhado",
      "endereço da unidade consumidora"
    ],
    roof_examples: ["cerâmico", "colonial", "fibrocimento", "zinco", "outros"],
    coordinates: "Não pedir latitude ou longitude ao cliente. Obter automaticamente pelo endereço."
  },

  bill_analysis: {
    objective: [
      "Ler os dados relevantes da fatura.",
      "Identificar consumo em kWh.",
      "Calcular a média dos meses disponíveis.",
      "Preferir histórico de 12 meses quando disponível.",
      "Identificar sazonalidade.",
      "Separar consumo medido de projeções futuras."
    ]
  },

  future_load: {
    ask: "Perguntar se haverá aumento de consumo ou novos equipamentos.",
    examples: [
      "ar-condicionado",
      "fogão por indução",
      "trocador de calor de piscina",
      "bomba",
      "aquecedor",
      "carregador de veículo elétrico"
    ],
    rule: "A margem de 10% é aplicada à necessidade atual. Equipamentos futuros entram separadamente no cálculo."
  },

  sizing: {
    performance: 0.75,
    reference_panel_watts: 610,
    current_need_margin: 0.10,
    reference_test_irradiation: 4.44,
    reference_test_note: "4,44 kWh/m²/dia é somente referência de teste para São Paulo/Guarulhos; não é regra universal.",

    sequence: [
      "Determinar consumo médio.",
      "Aplicar 10% sobre a necessidade atual.",
      "Adicionar demanda estimada de cargas futuras.",
      "Obter latitude e longitude automaticamente pelo endereço.",
      "Determinar o recurso solar do local.",
      "Aplicar desempenho conservador de 75%.",
      "Estimar geração do painel de referência de 610 W.",
      "Determinar a quantidade de módulos.",
      "Verificar compatibilidade com inversor e demais elementos."
    ],

    caution: "Não usar retornos reais acima da previsão para aumentar a geração estimada. Manter o modelo conservador."
  },

  result_explanation: {
    required: true,
    show: [
      "consumo médio",
      "margem de 10%",
      "cargas futuras",
      "recurso solar",
      "desempenho de 75%",
      "geração estimada por módulo",
      "quantidade de módulos",
      "premissas"
    ]
  },

  missing_data: "Se faltar informação essencial, perguntar antes de concluir. Não inventar.",

  external_research: {
    prepared: true,
    rule: "Quando faltar informação atual ou específica, consultar fonte externa confiável antes de responder.",
    security: "No produto definitivo, pesquisa externa e chaves de API devem ficar no backend, nunca expostas no HTML público."
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = VsnSBrain;
