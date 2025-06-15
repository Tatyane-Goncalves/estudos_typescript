"use strict";
// 🍰 4. Detector de Veículo (Hard)
// Descrição:
// Dois tipos:
// Carro → { rodas: number, dirigir: () => void }
// Barco → { velas: number, navegar: () => void }
// Crie um type guard personalizado isCarro() e uma função que chama o método certo (dirigir() ou navegar()).
function isCarro(veiculo) {
    return veiculo.dirigir !== undefined;
}
function acao(veiculo) {
    if (isCarro(veiculo)) {
        veiculo.dirigir();
    }
    else {
        veiculo.navegar();
    }
}
// Criando objetos
const novoCarro = {
    rodas: 4,
    dirigir: () => console.log("Dirigindo o carro!")
};
const meuBarco = {
    velas: 2,
    navegar: () => console.log("Navegando com o barco!")
};
// Testes
acao(novoCarro);
acao(meuBarco);
