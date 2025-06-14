"use strict";
// 🎯 Desafio 3 — Plano de Assinatura (Intermediário)
// Crie um tipo chamado Plano que aceita: "basico", "pro" ou "premium".
// Crie um tipo Usuario com:
// nome: string
// plano: Plano
// Depois, crie uma função que imprime:
// "Usuário Taty possui o plano premium."
function mostrarPlanoAssinatura(usuario) {
    console.log(`Usuário ${usuario.nome} possui o plano ${usuario.plano}.`);
}
mostrarPlanoAssinatura({
    nome: "Aria",
    plano: "Premium"
});
