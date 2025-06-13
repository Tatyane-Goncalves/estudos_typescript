enum StatusPedido {
  pendente = "pendente",
  enviado = "enviado",
  entregue = "entregue"
}

type Pedido = {
  nome: string
  status: StatusPedido
  nota: number | "sem nota"
}

function resumoPedido(pedido: Pedido) {
  console.log(`Pedido de ${pedido.nome} atualizado para: ${pedido.status} com nota ${pedido.nota}.`)
}

const pedidoDaTaty: Pedido = {
  nome: "Taty",
  status: StatusPedido.enviado,
  nota: 5
};

resumoPedido(pedidoDaTaty);