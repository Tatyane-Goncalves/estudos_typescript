"use strict";
const juca = {
    nome: "Juca",
    idade: 25,
    curso: "Administração"
};
const luana = {
    nome: "Luana Queiroz",
    idade: 26,
    curso: "Pedagogia"
};
function mostrarAluno(aluno) {
    const cursoTexto = aluno.curso ? `e curso ${aluno.curso}` : "e não estou cursando nenhum curso no momento.";
    console.log(`Olá, me chamo ${aluno.nome}, tenho ${aluno.idade} anos ${cursoTexto}`);
}
mostrarAluno(juca);
mostrarAluno(luana);
