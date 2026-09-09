# Bom Filho Marituba - como mexer no site

## Abrir o site

Clique duas vezes no arquivo **`index.html`**. Ele abre no navegador.

## Onde muda cada coisa

Quase tudo do dia a dia esta em um arquivo so:

**`assets/js/cardapio.js`**

Abra ele com o Bloco de Notas (clique com o botao direito > Abrir com > Bloco de Notas).

Depois de salvar o arquivo, volte no navegador e aperte **F5** para ver a mudanca.

### 1. Numero do WhatsApp que recebe os pedidos

```
whatsapp: "5591988887777",
```

Troque pelo seu: 55 + DDD + numero, tudo junto, sem espaco e sem tracinho.
**Esse e o passo mais importante: sem ele os pedidos vao para um numero errado.**

### 2. Endereco, horario e taxa de entrega

```
enderecoLinha1: "AV. JOAO PAULO II, 1200",
horarioLinha1: "TODOS OS DIAS: 06H AS 00H",
taxaEntrega: 6.0,
```

Para entrega gratis, coloque `taxaEntrega: 0`.

### 3. Precos

Ache o item e mude o numero. Use **ponto** no lugar da virgula:

```
preco: 49.90,
```

### 4. Adicionar um item novo no cardapio

Copie um bloco inteiro (do `{` ate o `}`), cole logo abaixo, coloque uma virgula
entre os dois blocos e troque os textos:

```
{
  categoria: "pizzas",
  nome: "PIZZA DE CHOCOLATE",
  descricao: "Chocolate ao leite com morango.",
  preco: 46.90,
  foto: "assets/img/produto-pizza-marguerita.jpg"
},
```

`categoria` so pode ser: `"pizzas"`, `"burgers"` ou `"bebidas"`.

### 5. Trocar a foto de um item

1. Coloque a sua foto na pasta `assets/img/`
2. Escreva o nome dela na linha `foto:` do item

Fotos quadradas e bem iluminadas ficam melhores.

### 6. Item que acabou

Adicione `esgotado: true` no item. Ele continua aparecendo, mas sem o botao de pedir:

```
{
  categoria: "burgers",
  nome: "BURGER FRANGO CRISPY",
  descricao: "File de frango empanado, alface, tomate e molho especial.",
  preco: 32.90,
  foto: "assets/img/produto-burger-frango-crispy.jpg",
  esgotado: true
},
```

## Como o pedido chega para voce

O cliente monta o pedido no site e clica em **ENVIAR PEDIDO PELO WHATSAPP**.
Abre o WhatsApp dele ja com a mensagem pronta: itens, quantidades, total,
nome, endereco, forma de pagamento e observacoes. Voce so confirma.

## Colocar o site no ar

O site e feito de arquivos simples, entao funciona em qualquer hospedagem.
Opcao gratuita e facil: entre em netlify.com, crie a conta e arraste a pasta
inteira do projeto para a area de upload. Em poucos segundos voce recebe um
endereco para divulgar.

## Cuidados

- Nao apague as virgulas, chaves `{ }` e colchetes `[ ]` do arquivo do cardapio.
- Sempre use ponto nos precos: `39.90` (e nao `39,90`).
- Se algo sumir da tela, e sinal de que faltou uma virgula ou uma chave. Desfaca a
  ultima alteracao com Ctrl+Z, salve e atualize a pagina.
