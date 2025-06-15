// 🍛 3. Checar Funcionário (Intermediário)
// Você tem dois tipos:
// Funcionario → { nome: string, salario: number }
// Freelancer → { nome: string, horasTrabalhadas: number }
// Escreva uma função que recebe um dos dois e imprime:
// Se for funcionário, mostra o salário.
// Se for freelancer, mostra as horas trabalhadas.
// Dica: Use in para verificar qual propriedade existe.

type Funcionario = {
  nome: string, 
  salario: number
}

type Freelancer = {
  nome: string,
  horasTrabalhadas: number
}

function checarFuncionario(pessoa: Funcionario | Freelancer) {
  if ("salario" in pessoa) {
    console.log(`O salário do funcionário ${pessoa.nome} é R$ ${pessoa.salario.toFixed(2)}.`)
  } else if ("horasTrabalhadas" in pessoa) {
    console.log(`O freelancer ${pessoa.nome} trabalhou por ${pessoa.horasTrabalhadas} horas.`)
  }
}


// Testes
const ana: Funcionario = {
  nome: "Ana Julie",
  salario: 5000
}

const liam: Freelancer = {
  nome: "Liam Hans",
  horasTrabalhadas: 120
}

checarFuncionario(ana)
checarFuncionario(liam)