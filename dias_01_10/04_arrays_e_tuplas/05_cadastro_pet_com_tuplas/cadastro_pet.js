"use strict";
const pets = [["Rex", 3], ["Luna", 2]];
pets.forEach((pet) => {
    console.log(`Nome: ${pet[0]}, Idade: ${pet[1]}`);
});
// ou
pets.forEach(([nome, idade]) => {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
});
