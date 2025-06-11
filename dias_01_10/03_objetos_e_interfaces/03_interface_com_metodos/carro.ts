interface Carro {
  marca: string;
  modelo: string;
  ligar: () => void; // método que não recebe nada e não retorna nada
}

const meuCarro: Carro = {
  marca: "Toyota",
  modelo: "SW4 Diamond",
  ligar: () => {
    console.log("Carro ligado!");
  }
}

meuCarro.ligar(); // Resultado: Carro ligado!


const outroCarro: Carro = {
  marca: "Audi",
  modelo: "RSQ8",
  ligar() {
    console.log(`O ${this.marca} ${this.modelo} está ligado!`);
  }
}

outroCarro.ligar(); // Resultado: O Audi RSQ8 está ligado!
