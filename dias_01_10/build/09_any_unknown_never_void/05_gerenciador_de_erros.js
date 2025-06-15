"use strict";
function erroFatalNovo(mensagem) {
    throw new Error(mensagem);
}
function registrarEventos(evento) {
    if (typeof evento === "string" || typeof evento === "number") {
        console.log(`Registro: ${evento}`);
    }
    if (typeof evento === "object" && evento !== null) {
        console.log(`Ojeto registrado: ${JSON.stringify(evento)}`);
    }
    if (typeof evento === "boolean" || typeof evento === "undefined") {
        erroFatalNovo("Erro de evento inválido");
    }
}
function logVazio() {
    console.log("Log concluido!");
}
registrarEventos("Login realizado");
registrarEventos(404);
registrarEventos({ user: "Taty", status: "Ativo" });
registrarEventos(true);
