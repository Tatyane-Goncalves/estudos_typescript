"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["pendente"] = "pendente";
    StatusPedido["enviado"] = "enviado";
    StatusPedido["entregue"] = "entregue";
})(StatusPedido || (StatusPedido = {}));
function resumoPedido(pedido) {
    console.log(`Pedido de ${pedido.nome} atualizado para: ${pedido.status} com nota ${pedido.nota}.`);
}
const pedidoDaTaty = {
    nome: "Taty",
    status: StatusPedido.enviado,
    nota: 5
};
resumoPedido(pedidoDaTaty);
