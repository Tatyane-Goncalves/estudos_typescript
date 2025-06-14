"use strict";
// 🎯 Desafio 2 — Estado do Pedido (Fácil/Intermediário)
// Crie um Type Alias chamado StatusPedido com os valores possíveis: "pendente", "processando", "enviado" e "entregue".
// Depois, crie uma função atualizarStatus() que recebe esse status e imprime:
// "Seu pedido está: enviado".
function atualizarStatusAlias(status) {
    console.log(`Seu pedido está: ${status}`);
}
atualizarStatusAlias("entregue");
atualizarStatusAlias("processando");
atualizarStatusAlias("enviado");
atualizarStatusAlias("pendente");
