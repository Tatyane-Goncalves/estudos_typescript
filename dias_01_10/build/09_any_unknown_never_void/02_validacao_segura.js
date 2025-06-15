"use strict";
function mostrarTamanhoSeString(palavra) {
    if (typeof palavra === "string") {
        console.log(`A string ${palavra} tem ${palavra.length} caracteres.`);
        return `A string ${palavra} tem ${palavra.length} caracteres.`;
    }
    else {
        console.log("Não é uma string.");
    }
}
mostrarTamanhoSeString("TypeScript");
mostrarTamanhoSeString(2024);
