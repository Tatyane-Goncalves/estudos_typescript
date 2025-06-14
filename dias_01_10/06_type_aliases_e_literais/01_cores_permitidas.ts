// 🎯 Desafio 1 — Cores Permitidas (Fácil)
// Crie um Type Alias chamado CorPermitida que aceite apenas as cores "azul", "vermelho" ou "amarelo".
// Crie uma função chamada selecionarCor() que recebe uma cor e imprime na tela:
// ➡️ "Você escolheu a cor azul." (ou a cor que for passada).

type CorPermitida = "azul" | "vermelho" | "amarelo"

function selecionarCor(cor: CorPermitida) {
  console.log(`Você escolheu a cor ${cor}.`)
}

selecionarCor("amarelo")