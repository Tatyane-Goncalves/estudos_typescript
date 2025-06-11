"use strict";
function maiorDeIdade(name, age) {
    if (age >= 18) {
        console.log(`${name} é maior de idade`);
    }
    else {
        console.log(`${name} não é maior de idade`);
    }
    return { name, age };
}
const agePerson = maiorDeIdade("Taty", 21);
console.log(agePerson);
// OU
function idadeMaior(age) {
    return age >= 18;
}
console.log(idadeMaior(21));
console.log(idadeMaior(15));
