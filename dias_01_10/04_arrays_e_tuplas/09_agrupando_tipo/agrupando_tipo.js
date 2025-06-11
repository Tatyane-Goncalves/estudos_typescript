"use strict";
const misturados = ["banana", 42, true, "abacaxi", false, 99, "typescript"];
const soStrings = misturados.filter(item => typeof item === "string");
const soNumeros = misturados.filter(item => typeof item === "number");
const soBooleanos = misturados.filter(item => typeof item === "boolean");
console.log("Strings:", soStrings);
console.log("Números:", soNumeros);
console.log("Booleanos:", soBooleanos);
// OU
console.log();
function filtrarPorTipo(arr, tipo) {
    return arr.filter(item => typeof item === tipo);
}
const strings = filtrarPorTipo(misturados, "string");
const numers = filtrarPorTipo(misturados, "number");
const booleanos = filtrarPorTipo(misturados, "boolean");
console.log(strings, numers, booleanos);
