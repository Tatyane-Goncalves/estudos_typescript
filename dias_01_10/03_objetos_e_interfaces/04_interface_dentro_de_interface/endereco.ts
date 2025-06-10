interface Endereco {
  rua: string;
  numero: number;
  cidade: string;
}

interface Pessoa {
  nome: string;
  endereco: Endereco;
}

const pessoa_1: Pessoa = {
  nome: "Taty",
  endereco: {
    rua: "Rua Dom Carlos",
    numero: 55,
    cidade: "Virgem da Lapa"
  }
}

console.log(pessoa_1);
