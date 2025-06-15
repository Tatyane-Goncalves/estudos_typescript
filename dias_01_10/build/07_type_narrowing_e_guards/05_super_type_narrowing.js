"use strict";
// 🍗 5. Super Type Narrowing (Hard)
// Crie uma função que recebe:
// number | string | boolean | { nome: string }
// Se for:
// string, imprime maiúsculo.
// number, imprime dobrado.
// boolean, imprime o inverso.
// objeto, imprime "Olá, {nome}".
function mostrarInfo(info) {
    if (typeof info === "string") {
        console.log(`É uma string: ${info.toUpperCase()}.`);
    }
    else if (typeof info === "number") {
        console.log(`O dobro de ${info} é ${info * 2}.`);
    }
    else if (typeof info === "boolean") {
        console.log(`O inverso lógico do ${info} é ${!info}`);
    }
}
mostrarInfo("Judi");
mostrarInfo(15);
mostrarInfo(true);
mostrarInfo(false);
