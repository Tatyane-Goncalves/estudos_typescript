"use strict";
const movies = ["Central do Brasil", "Lilo & Stich", "As branquelas", "Volta ao passado"];
const movieRemove = movies.pop();
console.log(`Meus filmes favoritos são:`);
movies.forEach((movie, index) => {
    console.log(`${index + 1} - ${movie}`);
});
console.log(`Removi o filme: ${movieRemove}`);
