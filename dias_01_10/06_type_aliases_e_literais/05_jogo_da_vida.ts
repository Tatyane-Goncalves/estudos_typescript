// 🎯 Desafio 5 — Jogo da Vida (Nível Ninja 🤓)
// Crie dois Type Aliases:
// Acoes = "andar" | "pular" | "parar"
// Direcao = "esquerda" | "direita" | "frente" | "tras"
// Depois, crie uma função executarAcao() que recebe uma ação e uma direção e imprime:
// ➡️ "Personagem vai andar para direita"
// ou
// ➡️ "Personagem vai pular para frente"

type Acoes = "andar" | "pular" | "parar"
type Direcao = "esquerda" | "direita" | "frente" | "tras"

function executarAcao(acao: Acoes, direcao: Direcao) {
  console.log(`O personagem vai ${acao} para ${direcao}.`)
}

executarAcao("andar", "direita")
executarAcao("andar", "esquerda")
executarAcao("pular", "frente")