// 🥗 1. Verificar dado (Fácil)
// Faça uma função que recebe string | number. Se for string, imprima em maiúsculo, se for número, multiplique por 2.


function verificarDado(dado: string | number) {
  if (typeof dado === "string") {
    console.log(`${dado.toUpperCase()}`)
  } else {
    console.log(`${dado * 2}`)
  }
}

verificarDado("Taty")
verificarDado(5)