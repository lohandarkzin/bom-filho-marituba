/* ==========================================================================
   BOM FILHO MARITUBA - FUNCIONAMENTO DO SITE
   (voce nao precisa mexer aqui: o que muda no dia a dia esta em cardapio.js)
   ========================================================================== */

(function () {
  "use strict";

  var CHAVE = "bomfilho:pedido";
  var dinheiro = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

  var pega = function (sel) { return document.querySelector(sel); };
  var pegaTodos = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  var grade = pega("#grade");
  var vazioBusca = pega("#vazio");
  var campoBusca = pega("#campoBusca");
  var carrinho = pega("#carrinho");
  var cortina = pega("#cortina");
  var listaItens = pega("#listaItens");
  var carrinhoVazio = pega("#carrinhoVazio");
  var formPedido = pega("#formPedido");
  var formErro = pega("#formErro");
  var btnEnviar = pega("#btnEnviar");
  var barraMobile = pega(".barra-mobile");
  var aviso = pega("#aviso");
  var btnMenu = pega("#btnMenu");
  var nav = pega("#nav");

  var categoriaAtual = "pizzas";
  var pedido = carregar();

  /* ---------------------------------------------------------------- dados */

  function carregar() {
    try {
      var bruto = localStorage.getItem(CHAVE);
      var lista = bruto ? JSON.parse(bruto) : [];
      return Array.isArray(lista) ? lista.filter(function (i) {
        return i && typeof i.nome === "string" && typeof i.preco === "number" && i.qtd > 0;
      }) : [];
    } catch (e) {
      return [];
    }
  }

  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(pedido)); } catch (e) { /* ignora */ }
  }

  function subtotal() {
    return pedido.reduce(function (soma, i) { return soma + i.preco * i.qtd; }, 0);
  }

  function ehEntrega() {
    var op = pega('input[name="entrega"]:checked');
    return !op || op.value === "entrega";
  }

  function taxa() {
    return pedido.length && ehEntrega() ? Number(CONFIG.taxaEntrega) || 0 : 0;
  }

  function quantidadeTotal() {
    return pedido.reduce(function (soma, i) { return soma + i.qtd; }, 0);
  }

  /* -------------------------------------------------------- textos fixos */

  function aplicarConfig() {
    pegaTodos("[data-config]").forEach(function (el) {
      var valor = CONFIG[el.getAttribute("data-config")];
      if (valor) { el.textContent = valor; }
    });

    document.title = CONFIG.marcaLinha1 + " " + CONFIG.marcaLinha2 + " | Pizzas na brasa e burgers smash";

    var select = pega("#campoPagamento");
    (CONFIG.pagamentos || []).forEach(function (forma) {
      var op = document.createElement("option");
      op.value = forma;
      op.textContent = forma;
      select.appendChild(op);
    });
  }

  /* ------------------------------------------------------------ cardapio */

  function montarCard(item) {
    var card = document.createElement("article");
    card.className = "item" + (item.esgotado ? " item--esgotado" : "");

    var moldura = document.createElement("div");
    moldura.className = "item__moldura";

    var foto = document.createElement("img");
    foto.className = "item__foto";
    foto.src = item.foto;
    foto.alt = item.nome;
    foto.loading = "lazy";
    foto.width = 640;
    foto.height = 400;
    moldura.appendChild(foto);

    var nome = document.createElement("h3");
    nome.className = "item__nome";
    nome.textContent = item.nome;

    var desc = document.createElement("p");
    desc.className = "item__desc";
    desc.textContent = item.descricao || "";

    var preco = document.createElement("p");
    preco.className = "item__preco";
    preco.textContent = dinheiro.format(item.preco);

    card.appendChild(moldura);
    card.appendChild(nome);
    card.appendChild(desc);
    card.appendChild(preco);

    if (item.esgotado) {
      var marca = document.createElement("p");
      marca.className = "item__esgotado";
      marca.textContent = "Indispon\u00edvel hoje";
      card.appendChild(marca);
    } else {
      var botao = document.createElement("button");
      botao.className = "item__botao";
      botao.type = "button";
      botao.textContent = "ADICIONAR";
      botao.setAttribute("aria-label", "Adicionar " + item.nome + " ao pedido");
      botao.addEventListener("click", function () { adicionar(item); });
      card.appendChild(botao);
    }

    return card;
  }

  function renderCardapio() {
    var busca = (campoBusca.value || "").trim().toLowerCase();

    var lista = CARDAPIO.filter(function (item) {
      if (busca) {
        return (item.nome + " " + (item.descricao || "")).toLowerCase().indexOf(busca) > -1;
      }
      return item.categoria === categoriaAtual;
    });

    grade.innerHTML = "";
    lista.forEach(function (item, i) {
      var card = montarCard(item);
      card.style.animationDelay = Math.min(i, 8) * 40 + "ms";
      grade.appendChild(card);
    });

    vazioBusca.hidden = lista.length > 0;
  }

  function trocarAba(categoria) {
    categoriaAtual = categoria;
    campoBusca.value = "";
    pegaTodos(".aba").forEach(function (aba) {
      aba.setAttribute("aria-selected", String(aba.getAttribute("data-categoria") === categoria));
    });
    renderCardapio();
  }

  /* ------------------------------------------------------------ carrinho */

  function adicionar(item) {
    var achou = pedido.filter(function (i) { return i.nome === item.nome; })[0];
    if (achou) {
      achou.qtd += 1;
    } else {
      pedido.push({ nome: item.nome, preco: item.preco, foto: item.foto, qtd: 1 });
    }
    salvar();
    renderPedido();
    mostrarAviso(item.nome + " no pedido");
  }

  function mudarQtd(nome, passo) {
    pedido = pedido.map(function (i) {
      if (i.nome === nome) { i.qtd += passo; }
      return i;
    }).filter(function (i) { return i.qtd > 0; });
    salvar();
    renderPedido();
  }

  function montarLinha(item) {
    var linha = document.createElement("div");
    linha.className = "linha-item";

    var foto = document.createElement("img");
    foto.src = item.foto;
    foto.alt = "";
    foto.loading = "lazy";

    var meio = document.createElement("div");
    var nome = document.createElement("p");
    nome.className = "linha-item__nome";
    nome.textContent = item.nome;
    var preco = document.createElement("p");
    preco.className = "linha-item__preco";
    preco.textContent = dinheiro.format(item.preco * item.qtd);
    meio.appendChild(nome);
    meio.appendChild(preco);

    var contador = document.createElement("div");
    contador.className = "contador";

    var menos = document.createElement("button");
    menos.type = "button";
    menos.textContent = "\u2212";
    menos.setAttribute("aria-label", "Tirar um " + item.nome);
    menos.addEventListener("click", function () { mudarQtd(item.nome, -1); });

    var qtd = document.createElement("span");
    qtd.textContent = item.qtd;

    var mais = document.createElement("button");
    mais.type = "button";
    mais.textContent = "+";
    mais.setAttribute("aria-label", "Colocar mais um " + item.nome);
    mais.addEventListener("click", function () { mudarQtd(item.nome, 1); });

    contador.appendChild(menos);
    contador.appendChild(qtd);
    contador.appendChild(mais);

    linha.appendChild(foto);
    linha.appendChild(meio);
    linha.appendChild(contador);
    return linha;
  }

  function renderPedido() {
    listaItens.innerHTML = "";
    pedido.forEach(function (item) { listaItens.appendChild(montarLinha(item)); });

    var temItem = pedido.length > 0;
    carrinhoVazio.hidden = temItem;
    formPedido.hidden = !temItem;
    btnEnviar.disabled = !temItem;

    var sub = subtotal();
    var entrega = taxa();

    pegaTodos("[data-subtotal]").forEach(function (el) { el.textContent = dinheiro.format(sub); });
    pegaTodos("[data-taxa]").forEach(function (el) { el.textContent = entrega ? dinheiro.format(entrega) : "Gr\u00e1tis"; });
    pegaTodos("[data-total]").forEach(function (el) { el.textContent = dinheiro.format(sub + entrega); });
    pegaTodos("[data-total-barra]").forEach(function (el) { el.textContent = dinheiro.format(sub + entrega); });
    pegaTodos("[data-contador]").forEach(function (el) { el.textContent = quantidadeTotal(); });
    pegaTodos("[data-rotulo-itens]").forEach(function (el) { el.textContent = quantidadeTotal() === 1 ? "item" : "itens"; });

    pega("#linhaTaxa").hidden = !ehEntrega();
    pega("#campoEnderecoBox").hidden = !ehEntrega();
    barraMobile.hidden = !temItem;
    document.body.style.paddingBottom = temItem ? "84px" : "";
  }

  /* --------------------------------------------------------- abrir/fechar */

  function abrirCarrinho() {
    carrinho.classList.add("aberto");
    carrinho.setAttribute("aria-hidden", "false");
    cortina.hidden = false;
    document.body.classList.add("travado");
    fecharMenu();
  }

  function fecharCarrinho() {
    carrinho.classList.remove("aberto");
    carrinho.setAttribute("aria-hidden", "true");
    cortina.hidden = true;
    document.body.classList.remove("travado");
  }

  function fecharMenu() {
    nav.classList.remove("aberto");
    btnMenu.setAttribute("aria-expanded", "false");
  }

  var tempoAviso;
  function mostrarAviso(texto) {
    aviso.textContent = texto;
    aviso.classList.add("visivel");
    clearTimeout(tempoAviso);
    tempoAviso = setTimeout(function () { aviso.classList.remove("visivel"); }, 1800);
  }

  /* --------------------------------------------------------- envio final */

  function validar() {
    var nome = pega("#campoNome");
    var endereco = pega("#campoEndereco");
    var faltou = null;

    [nome, endereco].forEach(function (c) { c.classList.remove("invalido"); });

    if (!nome.value.trim()) {
      nome.classList.add("invalido");
      faltou = "Escreva o seu nome para a gente saber de quem \u00e9 o pedido.";
    } else if (ehEntrega() && !endereco.value.trim()) {
      endereco.classList.add("invalido");
      faltou = "Escreva o endere\u00e7o da entrega.";
    } else if (Number(CONFIG.pedidoMinimo) > 0 && subtotal() < Number(CONFIG.pedidoMinimo)) {
      faltou = "O pedido m\u00ednimo \u00e9 de " + dinheiro.format(CONFIG.pedidoMinimo) + ".";
    }

    if (faltou) {
      formErro.textContent = faltou;
      formErro.hidden = false;
      return false;
    }

    formErro.hidden = true;
    return true;
  }

  function montarMensagem() {
    var linhas = [];
    linhas.push("*NOVO PEDIDO - " + CONFIG.marcaLinha1 + " " + CONFIG.marcaLinha2 + "*");
    linhas.push("");
    linhas.push("*ITENS*");

    pedido.forEach(function (i) {
      linhas.push(i.qtd + "x " + i.nome + " - " + dinheiro.format(i.preco * i.qtd));
    });

    linhas.push("");
    linhas.push("Subtotal: " + dinheiro.format(subtotal()));
    if (ehEntrega()) {
      linhas.push("Taxa de entrega: " + (taxa() ? dinheiro.format(taxa()) : "Gratis"));
    }
    linhas.push("*TOTAL: " + dinheiro.format(subtotal() + taxa()) + "*");
    linhas.push("");
    linhas.push("*Cliente:* " + pega("#campoNome").value.trim());

    if (ehEntrega()) {
      linhas.push("*Entregar em:* " + pega("#campoEndereco").value.trim());
    } else {
      linhas.push("*Retirada na loja*");
    }

    linhas.push("*Pagamento:* " + pega("#campoPagamento").value);

    var troco = pega("#campoTroco").value.trim();
    if (troco && pega("#campoPagamento").value === "Dinheiro") {
      linhas.push("*Troco para:* R$ " + troco);
    }

    var obs = pega("#campoObs").value.trim();
    if (obs) { linhas.push("*Observa\u00e7\u00e3o:* " + obs); }

    return linhas.join("\n");
  }

  function enviar() {
    if (!pedido.length || !validar()) { return; }
    var numero = String(CONFIG.whatsapp || "").replace(/\D/g, "");
    var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(montarMensagem());
    window.open(url, "_blank", "noopener");
    mostrarAviso("Pedido enviado no WhatsApp");
  }

  /* --------------------------------------------------------------- eventos */

  pegaTodos(".aba").forEach(function (aba) {
    aba.addEventListener("click", function () { trocarAba(aba.getAttribute("data-categoria")); });
  });

  pegaTodos("[data-aba]").forEach(function (link) {
    link.addEventListener("click", function () { trocarAba(link.getAttribute("data-aba")); });
  });

  pegaTodos("[data-abre-carrinho]").forEach(function (btn) {
    btn.addEventListener("click", function (ev) { ev.preventDefault(); abrirCarrinho(); });
  });

  pegaTodos("[data-fecha-menu]").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });

  pega("#btnFechar").addEventListener("click", fecharCarrinho);
  cortina.addEventListener("click", fecharCarrinho);
  btnEnviar.addEventListener("click", enviar);
  campoBusca.addEventListener("input", renderCardapio);

  btnMenu.addEventListener("click", function () {
    var aberto = nav.classList.toggle("aberto");
    btnMenu.setAttribute("aria-expanded", String(aberto));
  });

  pegaTodos('input[name="entrega"]').forEach(function (op) {
    op.addEventListener("change", renderPedido);
  });

  pega("#campoPagamento").addEventListener("change", function () {
    pega("#campoTrocoBox").hidden = this.value !== "Dinheiro";
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") { fecharCarrinho(); fecharMenu(); }
  });

  /* ----------------------------------------------------------------- start */

  aplicarConfig();
  trocarAba("pizzas");
  renderPedido();
})();
