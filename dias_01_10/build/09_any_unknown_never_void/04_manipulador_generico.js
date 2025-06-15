"use strict";
function processarDado(dado) {
    if (typeof dado === "string") {
        console.log(`Palavra ${dado} em caixa alta: ${dado.toUpperCase()}.`);
    }
    else if (typeof dado === "number") {
        console.log(`O dobro de ${dado} é ${dado * 2}.`);
    }
    else if (typeof dado === "boolean") {
        console.log(`O inverso de ${dado} é ${!dado}.`);
    }
    else {
        console.log("Tipo não encontrado.");
    }
}
processarDado("taty");
processarDado(10);
processarDado(false);
processarDado([1, 2]);
