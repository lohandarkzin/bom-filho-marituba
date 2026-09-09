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
  tagline: "PIZZAS ARTESANAIS \u2022 BURGERS SMASH",

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
    nome: "BF CLASSICO",
    descricao: "Pão brioche, 1 carne 150g, queijo mussarela, alface americana, tomate e molho especial da casa.",
    preco: 20.00,
    foto: "assets/img/burger-bacon-cheddar.jpg"
  },
  {
    categoria: "burgers",
    nome: "BF CHICKEN",
    descricao: "Pão brioche, frango desfiado, queijo mussarela, alface americana, tomate e molho especial da casa.",
    preco: 20.00,
    foto: "assets/img/burger-frango-cheddar.jpg"
  },
  {
    categoria: "burgers",
    nome: "BF FAST",
    descricao: "Pão brioche, 1 carne 150g, bacon crocante, queijo mussarela, alface americana e molho BBQ.",
    preco: 25.00,
    foto: "assets/img/burger-cheddar-bbq.jpg"
  },
  {
    categoria: "burgers",
    nome: "BF PREMIUM",
    descricao: "Pão brioche, alface, 1 carne (150g), calabresa, bacon, cebola caramelizada e molho da casa.",
    preco: 25.00,
    foto: "assets/img/burger-duplo-bacon.jpg"
  },
  {
    categoria: "burgers",
    nome: "BF CHEDDAR",
    descricao: "Pão brioche, 2 carnes (150g cada), cheddar cremoso em dobro, bacon crocante e molho especial da casa.",
    preco: 30.00,
    foto: "assets/img/burger-bacon-cheddar.jpg"
  },
  {
    categoria: "burgers",
    nome: "BF PRIME",
    descricao: "Pão brioche, 2 carnes (150g cada), calabresa fatiada, bacon crocante, cebola caramelizada, queijo mussarela e molho especial da casa.",
    preco: 30.00,
    foto: "assets/img/burger-smash-duplo.jpg"
  },
  {
    categoria: "burgers",
    nome: "BF SUPREME",
    descricao: "Pão brioche, 2 carnes (150g cada), cheddar cremoso, mussarela, bacon crocante, calabresa fatiada, cebola caramelizada, alface americana, tomate e molho.",
    preco: 35.00,
    foto: "assets/img/burger-costela-bbq.jpg"
  },
  {
    categoria: "burgers",
    nome: "BF MONSTER",
    descricao: "Pão brioche, 3 carnes (150g cada), bacon crocante, calabresa fatiada, cebola caramelizada, queijo mussarela triplo e molho especial da casa.",
    preco: 40.00,
    foto: "assets/img/burger-smash-triplo.jpg"
  },

  /* ------------------------------ BEBIDAS ------------------------------ */
  {
    categoria: "bebidas",
    nome: "COCA-COLA LATA 350ML",
    descricao: "Coca-Cola lata 350ml, bem gelada.",
    preco: 5.00,
    foto: "assets/img/coca-cola-lata.jpg"
  },
  {
    categoria: "bebidas",
    nome: "GUARANÁ LATA 350ML",
    descricao: "Guaraná lata 350ml, bem gelado.",
    preco: 5.00,
    foto: "assets/img/guarana-lata.jpg"
  },
  {
    categoria: "bebidas",
    nome: "COCA-COLA 2L",
    descricao: "Coca-Cola garrafa 2 litros, bem gelada.",
    preco: 13.00,
    foto: "assets/img/refrigerante-2l.jpg"
  },
  {
    categoria: "bebidas",
    nome: "FANTA LARANJA 2L",
    descricao: "Fanta Laranja garrafa 2 litros, bem gelada.",
    preco: 13.00,
    foto: "assets/img/refrigerante-2l.jpg"
  },
  {
    categoria: "bebidas",
    nome: "ÁGUA 500ML",
    descricao: "Água mineral 500ml.",
    preco: 3.00,
    foto: "assets/img/agua-mineral-500ml.jpg"
  },
  {
    categoria: "bebidas",
    nome: "SUCO NATURAL 300ML",
    descricao: "Suco natural 300ml. Consulte os sabores disponíveis.",
    preco: 5.00,
    foto: "assets/img/suco-laranja-1l.jpg"
  },
  {
    categoria: "bebidas",
    nome: "SUCO NATURAL 1L",
    descricao: "Suco natural 1 litro. Consulte os sabores disponíveis.",
    preco: 15.00,
    foto: "assets/img/suco-maracuja-1l.jpg"
  }

];
