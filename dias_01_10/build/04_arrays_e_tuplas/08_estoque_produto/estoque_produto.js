"use strict";
const produtoEstoque = [["mouse", 50], ["teclado", 100], ["monitor", 799]];
produtoEstoque.forEach(([nome, preco]) => {
    console.log(`Nome do produto: ${nome} | Preço: R$ ${preco.toFixed(2)}`);
});
const total = produtoEstoque.reduce((soma, [_, preco]) => soma + preco, 0);
console.log(`Total em estoque: R$ ${total.toFixed(2)}`);
