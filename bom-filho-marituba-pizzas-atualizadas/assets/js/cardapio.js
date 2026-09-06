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
  whatsapp: "559184188747",

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
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, calabresa, cebola e orégano.",
    preco: 40.00,
    foto: "assets/img/pizza-calabresa.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA MUSSARELA",
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, tomate, azeitona e orégano.",
    preco: 40.00,
    foto: "assets/img/pizza-marguerita.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA 4 QUEIJOS",
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, Catupiry, cheddar, provolone e orégano.",
    preco: 50.00,
    foto: "assets/img/pizza-quatro-queijos.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA FRANGO COM CATUPIRY",
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, frango, Catupiry, tomate e orégano.",
    preco: 50.00,
    foto: "assets/img/pizza-frango-catupiry.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA MISTA",
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, calabresa, presunto, batata palha, azeitona e orégano.",
    preco: 50.00,
    foto: "assets/img/pizza-calabresa.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA PORTUGUESA",
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, presunto, Catupiry, tomate, pimentão, ovos cozidos, cebola, azeitona e orégano.",
    preco: 60.00,
    foto: "assets/img/pizza-portuguesa.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA LOMBO CANADENSE",
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, lombo canadense, muçarela, cebola e orégano.",
    preco: 50.00,
    foto: "assets/img/pizza-quatro-queijos.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA CALABRESA COM BACON",
    descricao: "Tamanho G • 8 fatias. Molho especial, calabresa fatiada, bacon, queijo, muçarela e orégano.",
    preco: 50.00,
    foto: "assets/img/pizza-calabresa-bacon.jpg"
  },
  {
    categoria: "pizzas",
    nome: "PIZZA VEGETARIANA",
    descricao: "Tamanho G • 8 fatias. Molho especial, queijo, tomate, milho, brócolis, cebola, azeitona e orégano.",
    preco: 50.00,
    foto: "assets/img/pizza-marguerita.jpg"
  },

  /* ---------------------------- HAMBURGUERES --------------------------- */
  {
    categoria: "burgers",
    nome: "BURGER COSTELA BBQ",
    descricao: "Smash de costela, cheddar, molho BBQ e cebola crispy.",
    preco: 39.90,
    foto: "assets/img/burger-costela-bbq.jpg"
  },
  {
    categoria: "burgers",
    nome: "SMASH DUPLO CHEDDAR",
    descricao: "Dois smashs de 90g, cheddar duplo, picles e maionese da casa.",
    preco: 34.90,
    foto: "assets/img/burger-smash-duplo.jpg"
  },
  {
    categoria: "burgers",
    nome: "BURGER FRANGO CRISPY",
    descricao: "Fil\u00e9 de frango empanado, alface, tomate e molho especial.",
    preco: 32.90,
    foto: "assets/img/burger-frango-crispy.jpg"
  },

  {
    categoria: "burgers",
    nome: "BURGER BACON CHEDDAR",
    descricao: "Smash bovino, cheddar cremoso, bacon crocante e molho da casa.",
    preco: 38.90,
    foto: "assets/img/burger-bacon-cheddar.jpg"
  },
  {
    categoria: "burgers",
    nome: "BURGER DUPLO BACON",
    descricao: "Dois smashs, queijo, bacon crocante, picles e molho especial.",
    preco: 42.90,
    foto: "assets/img/burger-duplo-bacon.jpg"
  },
  {
    categoria: "burgers",
    nome: "BURGER CHEDDAR BBQ",
    descricao: "Smash bovino, cheddar, molho BBQ e cebola crispy.",
    preco: 37.90,
    foto: "assets/img/burger-cheddar-bbq.jpg"
  },
  {
    categoria: "burgers",
    nome: "BURGER FRANGO CHEDDAR",
    descricao: "Frango crispy, cheddar, alface, tomate e maionese especial.",
    preco: 35.90,
    foto: "assets/img/burger-frango-cheddar.jpg"
  },
  {
    categoria: "burgers",
    nome: "SMASH TRIPLO",
    descricao: "Três smashs de 90g, queijo, picles e molho especial.",
    preco: 44.90,
    foto: "assets/img/burger-smash-triplo.jpg"
  },

  /* ------------------------------ BEBIDAS ------------------------------ */
  {
    categoria: "bebidas",
    nome: "REFRIGERANTE 2 LITROS",
    descricao: "Coca-Cola, Guaran\u00e1 ou Fanta. Avise o sabor na observa\u00e7\u00e3o.",
    preco: 14.00,
    foto: "assets/img/refrigerante-2l.jpg"
  },
  {
    categoria: "bebidas",
    nome: "REFRIGERANTE LATA 350ML",
    descricao: "Gelado, direto da geladeira.",
    preco: 6.00,
    foto: "assets/img/refrigerante-lata.jpg"
  },
  {
    categoria: "bebidas",
    nome: "\u00c1GUA MINERAL 500ML",
    descricao: "Com ou sem g\u00e1s.",
    preco: 4.00,
    foto: "assets/img/produto-bebidas.jpg"
  },
  {
    categoria: "bebidas",
    nome: "COCA-COLA LATA 350ML",
    descricao: "Gelada.",
    preco: 6.50,
    foto: "assets/img/coca-cola-lata.jpg"
  },
  {
    categoria: "bebidas",
    nome: "GUARAN\u00c1 ANTARCTICA LATA 350ML",
    descricao: "Gelado.",
    preco: 6.00,
    foto: "assets/img/produto-bebidas.jpg"
  },
  {
    categoria: "bebidas",
    nome: "FANTA LARANJA LATA 350ML",
    descricao: "Gelada.",
    preco: 6.00,
    foto: "assets/img/fanta-laranja-lata.jpg"
  },
  {
    categoria: "bebidas",
    nome: "COCA-COLA ZERO 2 LITROS",
    descricao: "Gelada.",
    preco: 14.00,
    foto: "assets/img/coca-cola-zero-2l.jpg"
  },
  {
    categoria: "bebidas",
    nome: "GUARAN\u00c1 ANTARCTICA 2 LITROS",
    descricao: "Gelado.",
    preco: 13.00,
    foto: "assets/img/produto-bebidas.jpg"
  },
  {
    categoria: "bebidas",
    nome: "SUCO DE LARANJA 1 LITRO",
    descricao: "Suco gelado.",
    preco: 12.00,
    foto: "assets/img/suco-laranja-1l.jpg"
  },
  {
    categoria: "bebidas",
    nome: "SUCO DE MARACUJ\u00c1 1 LITRO",
    descricao: "Suco gelado.",
    preco: 13.00,
    foto: "assets/img/produto-bebidas.jpg"
  }
];
