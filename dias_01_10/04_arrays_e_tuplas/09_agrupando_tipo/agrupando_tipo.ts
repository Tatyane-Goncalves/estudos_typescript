const misturados = ["banana", 42, true, "abacaxi", false, 99, "typescript"];

const soStrings = misturados.filter(item => typeof item === "string");
const soNumeros = misturados.filter(item => typeof item === "number");
const soBooleanos = misturados.filter(item => typeof item === "boolean");

console.log("Strings:", soStrings);
console.log("Números:", soNumeros);
console.log("Booleanos:", soBooleanos);

// OU

console.log()

function filtrarPorTipo<T>(arr: any[], tipo: string): T[] {
  return arr.filter(item => typeof item === tipo);
}

const strings = filtrarPorTipo<string>(misturados, "string");
const numers = filtrarPorTipo<number>(misturados, "number");
const booleanos = filtrarPorTipo<boolean>(misturados, "boolean");

console.log(strings, numers, booleanos);
