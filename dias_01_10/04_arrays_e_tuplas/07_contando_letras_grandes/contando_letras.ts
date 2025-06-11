const palavras: string[] = ["casa", "computador", "gato", "universo"]

const palavrasFiltradas = palavras.filter((palavra) => {
  return palavra.length >= 5
})

console.log(`Palavras cpm 5 letras ou mais: ${palavrasFiltradas}`)