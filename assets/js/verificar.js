(function(){
  "use strict";
  var campo=document.getElementById("mensagem");
  var resultado=document.getElementById("resultado");
  var historicoBox=document.getElementById("historico");

  async function hashTexto(texto){
    if(window.crypto&&window.crypto.subtle&&window.TextEncoder){
      var bytes=new TextEncoder().encode(texto);
      var digest=await window.crypto.subtle.digest("SHA-256",bytes);
      return Array.from(new Uint8Array(digest)).map(function(b){return b.toString(16).padStart(2,"0");}).join("").toUpperCase();
    }
    var h=2166136261;
    for(var i=0;i<texto.length;i++){h^=texto.charCodeAt(i);h=Math.imul(h,16777619);}
    return ("00000000"+(h>>>0).toString(16)).slice(-8).toUpperCase();
  }

  function normalizar(texto){return String(texto||"").replace(/\r\n/g,"\n").trim();}

  async function verificar(){
    var texto=normalizar(campo.value);
    var marcador="\n*Verificacao:* ";
    var pos=texto.indexOf(marcador);
    if(pos<0){
      resultado.className="resultado erro";
      resultado.textContent="Nao encontrei o codigo de verificacao na mensagem.";
      return;
    }
    var base=texto.slice(0,pos);
    var resto=texto.slice(pos+marcador.length);
    var recebido=(resto.split("\n")[0]||"").trim().toUpperCase();
    var esperado=(await hashTexto(base)).slice(0,16);
    var codigo=(base.match(/\*Codigo do pedido:\*\s*([^\n]+)/i)||[])[1]||"sem codigo";

    if(recebido===esperado){
      resultado.className="resultado ok";
      resultado.textContent="PEDIDO CONFERE ✓  Codigo: "+codigo+" | Verificacao: "+recebido;
    }else{
      resultado.className="resultado erro";
      resultado.textContent="ATENCAO: A MENSAGEM FOI ALTERADA OU ESTA INCOMPLETA. Codigo: "+codigo;
    }
  }

  function mostrarHistorico(){
    try{
      var dados=JSON.parse(localStorage.getItem("bomfilho:pedidos-gerados")||"[]");
      if(!Array.isArray(dados)||!dados.length){historicoBox.textContent="Nenhum pedido foi gerado neste navegador.";return;}
      dados.slice(0,10).forEach(function(p){
        var div=document.createElement("div");div.className="pedido";
        var cod=document.createElement("div");cod.className="codigo";cod.textContent=p.codigo+" • "+p.verificacao;
        var dt=document.createElement("div");try{dt.textContent=new Date(p.criadoEm).toLocaleString("pt-BR");}catch(e){dt.textContent=p.criadoEm||"";}
        div.appendChild(cod);div.appendChild(dt);historicoBox.appendChild(div);
      });
    }catch(e){historicoBox.textContent="Nao foi possivel abrir o historico local.";}
  }

  document.getElementById("verificar").addEventListener("click",verificar);
  mostrarHistorico();
})();
