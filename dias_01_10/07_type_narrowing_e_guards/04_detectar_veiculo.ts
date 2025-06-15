// 🍰 4. Detector de Veículo (Hard)
// Descrição:
// Dois tipos:
// Carro → { rodas: number, dirigir: () => void }
// Barco → { velas: number, navegar: () => void }
// Crie um type guard personalizado isCarro() e uma função que chama o método certo (dirigir() ou navegar()).


// Criação dos tipos
type CarroType = {
  rodas: number,
  dirigir: () => void
}

type Barco = {
  velas: number,
  navegar: () => void
}

function isCarro(veiculo: CarroType | Barco): veiculo is CarroType {
  return (veiculo as CarroType).dirigir !== undefined
}

function acao(veiculo: CarroType | Barco) {
  if (isCarro(veiculo)) {
    veiculo.dirigir()
  } else {
    veiculo.navegar()
  }
}

// Criando objetos
const novoCarro: CarroType = {
  rodas: 4,
  dirigir: () => console.log("Dirigindo o carro!")
}

const meuBarco: Barco = {
  velas: 2,
  navegar: () => console.log("Navegando com o barco!")
}

// Testes
acao(novoCarro)
acao(meuBarco)