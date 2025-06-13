# 📄 Desafio 3: *Enum + Union – Sistema de Pedidos*

Você está criando um sistema de pedidos com:

* Um `enum` chamado `StatusPedido` com `"pendente"`, `"enviado"`, `"entregue"`
* Um tipo `Pedido` com:

  * nome do cliente (`string`)
  * status (`StatusPedido`)
  * nota (que pode ser um número de 1 a 5 **ou** `"sem nota"`)

Crie uma função que exibe um resumo do pedido.

**📥 Exemplo:**

```ts
{
  nome: "Taty",
  status: StatusPedido.Entregue,
  nota: "sem nota"
}
```

**📤 Saída:**

```
Pedido de Taty está ENTREGUE. Nota: sem nota.
```

**💡 Dica:** Use Union para `nota: number | "sem nota"`.