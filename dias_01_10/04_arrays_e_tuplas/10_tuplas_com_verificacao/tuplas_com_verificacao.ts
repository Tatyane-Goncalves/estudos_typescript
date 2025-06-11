const maioridade: Array<[nome: string, idade: number]> = [["João", 17], ["Luna", 22], ["Michael", 18], ["Any", 12]]

function verificarIdade([nome, idade]: [string, number]) {
  if (idade >= 18) {
    console.log(`${nome} tem ${idade} anos.`)
  } else {
    console.log(`${nome} tem ${idade} anos.`)
  }
}

maioridade.forEach(verificarIdade)

const maiores = maioridade.filter(([_, idade]) => idade >= 18).map(([nome]) => nome);
console.log(`Maiores de idade: ${maiores.join(", ")}`);
