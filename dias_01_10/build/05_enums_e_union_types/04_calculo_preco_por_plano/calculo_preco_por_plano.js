"use strict";
var Plano;
(function (Plano) {
    Plano[Plano["basico"] = 19.9] = "basico";
    Plano[Plano["profissional"] = 49.9] = "profissional";
    Plano[Plano["premium"] = 99.9] = "premium";
})(Plano || (Plano = {}));
function calcularPlano(plano) {
    const precoForm = plano.toFixed(2);
    let nome = "";
    if (plano === Plano.basico) {
        nome = "básico";
    }
    else if (plano === Plano.profissional) {
        nome = "profissional";
    }
    else if (plano === Plano.premium) {
        nome = "premium";
    }
    console.log(`O plano ${nome} custa R$ ${precoForm}.`);
}
calcularPlano(Plano.basico);
