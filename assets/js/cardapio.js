/* ==========================================================================
   BOM FILHO MARITUBA - ARQUIVO DE CONFIGURACAO DO SITE
   --------------------------------------------------------------------------
   ESTE E O UNICO ARQUIVO QUE VOCE PRECISA MEXER NO DIA A DIA.
   Aqui voce muda: WhatsApp, endereco, horarios, taxa de entrega,
   formas de pagamento e todos os itens do cardapio (nome, preco, foto).

   COMO EDITAR COM SEGURANCA:
   - Troque somente o que esta entre aspas "assim" ou os numeros.
   - Nao apague virgulas, chaves { } ou colchetes [ ].
   - Depois de salvar, atualize a pagina no navegador (tecla F5).
   ========================================================================== */

const CONFIG = {
  /* ---- IDENTIDADE DA CASA ---- */
  marcaLinha1: "BOM FILHO",
  marcaLinha2: "MARITUBA",
  tagline: "PIZZAS NA BRASA \u2022 BURGERS SMASH",

  /* ---- WHATSAPP QUE RECEBE OS PEDIDOS ----
     Formato: 55 + DDD + numero, tudo junto e sem espacos.
     Exemplo Marituba/PA: "5591988887777"                                   */
  whatsapp: "5591988887777",

  /* ---- ENDERECO (aparece no rodape) ---- */
  enderecoLinha1: "AV. JOAO PAULO II, 1200",
  enderecoLinha2: "CENTRO, MARITUBA - PA",
  enderecoLinha3: "CEP 67200-000",

  /* ---- HORARIO DE FUNCIONAMENTO ---- */
  horarioLinha1: "TERCA A DOMINGO: 18H AS 00H",
  horarioLinha2: "FECHADO AS SEGUNDAS",

  /* ---- ENTREGA ---- */
  taxaEntrega: 6.0,              // Taxa em reais. Use 0 para entrega gratis.
  pedidoMinimo: 0,               // Valor minimo do pedido. Use 0 para nenhum.

  /* ---- FORMAS DE PAGAMENTO ACEITAS ---- */
  pagamentos: ["PIX", "Dinheiro", "Cartao de credito", "Cartao de debito"]
};

/* ==========================================================================
   CARDAPIO
   --------------------------------------------------------------------------
   Cada item tem:
     categoria -> "pizzas", "burgers" ou "bebidas"
     nome      -> nome que aparece no card
     descricao -> ingredientes, uma linha
     preco     -> use ponto no lugar da virgula. Ex.: 49.90
     foto      -> caminho da imagem dentro de assets/img/
     esgotado  -> true esconde o botao e marca como indisponivel (opcional)

   PARA ADICIONAR UM ITEM: copie um bloco { ... } inteiro, cole abaixo dele,
   coloque uma virgula entre os blocos e troque os textos.
   PARA TROCAR A FOTO: coloque a sua imagem na pasta assets/img/ e escreva o
   nome dela aqui. Fotos quadradas ficam melhores.
   ========================================================================== */

const CARDAPIO = [
  /* ------------------------------ PIZZAS ------------------------------ */
  {
    categoria: "pizzas",
    nome: "PIZZA CALABRESA",
    descricao: "Molho de tomate, mu\u00e7arela, calabresa fatiada e cebola roxa.",
    preco: 49.90,
    foto: "assets/img/produto-pizza-calabresa.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA MARGUERITA",
    descricao: "Molho de tomate, mu\u00e7arela, tomate cereja e manjeric\u00e3o.",
    preco: 44.90,
    foto: "assets/img/produto-pizza-marguerita.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA QUATRO QUEIJOS",
    descricao: "Mu\u00e7arela, provolone, parmes\u00e3o e gorgonzola gratinados.",
    preco: 54.90,
    foto: "assets/img/produto-pizza-quatro-queijos.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA PORTUGUESA",
    descricao: "Presunto, ovo, cebola, azeitona preta e mu\u00e7arela.",
    preco: 51.90,
    foto: "assets/img/produto-pizza-calabresa.jpg"
  },

  /* ---------------------------- HAMBURGUERES --------------------------- */
  {
    categoria: "burgers",
    nome: "BURGER COSTELA BBQ",
    descricao: "Smash de costela, cheddar, molho BBQ e cebola crispy.",
    preco: 39.90,
    foto: "assets/img/produto-burger-costela-bbq.jpg"
  },
  {
    categoria: "burgers",
    nome: "SMASH DUPLO CHEDDAR",
    descricao: "Dois smashs de 90g, cheddar duplo, picles e maionese da casa.",
    preco: 34.90,
    foto: "assets/img/produto-burger-smash-duplo.jpg"
  },
  {
    categoria: "burgers",
    nome: "BURGER FRANGO CRISPY",
    descricao: "Fil\u00e9 de frango empanado, alface, tomate e molho especial.",
    preco: 32.90,
    foto: "assets/img/produto-burger-frango-crispy.jpg"
  },

  /* ------------------------------ BEBIDAS ------------------------------ */
  {
    categoria: "bebidas",
    nome: "REFRIGERANTE 2 LITROS",
    descricao: "Coca-Cola, Guaran\u00e1 ou Fanta. Avise o sabor na observa\u00e7\u00e3o.",
    preco: 14.00,
    foto: "assets/img/produto-bebidas.jpg"
  },
  {
    categoria: "bebidas",
    nome: "REFRIGERANTE LATA 350ML",
    descricao: "Gelado, direto da geladeira.",
    preco: 6.00,
    foto: "assets/img/produto-bebidas.jpg"
  },
  {
    categoria: "bebidas",
    nome: "\u00c1GUA MINERAL 500ML",
    descricao: "Com ou sem g\u00e1s.",
    preco: 4.00,
    foto: "assets/img/produto-bebidas.jpg"
  }
];
