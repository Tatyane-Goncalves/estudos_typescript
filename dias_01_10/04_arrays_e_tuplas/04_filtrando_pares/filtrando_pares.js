"use strict";
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(`Os números pares são: ${numerosPares.join(" - ")}`);
