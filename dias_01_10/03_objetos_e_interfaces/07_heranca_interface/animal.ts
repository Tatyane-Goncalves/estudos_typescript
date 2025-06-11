interface Animal {
  nome: string;
  idade: number;
}

interface Cachorro {
  animal: Animal;
  latir: () => void;
}

// Agora sim, cachorro_1 segue o tipo Cachorro certinho!
const cachorro_1: Cachorro = {
  animal: {
    nome: "Bingo",
    idade: 5
  },
  latir() {
    console.log(`O cachorro ${this.animal.nome} está latindo!`);
  }
};

cachorro_1.latir();
