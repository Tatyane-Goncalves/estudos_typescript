// 🍕 2. Pet Shop (Intermediário)
// Você tem dois tipos: Cachorro com método latir() e Gato com método miar(). Crie uma função que recebe um dos dois e faz o som correto.

class CachorroClass {
  som_latir() {
    console.log("Au au!")
  }
}

class Gato{
  miar() {
    console.log("Miau!")
  }
}

function emitirSom(animal: CachorroClass | Gato) {
  if (animal instanceof CachorroClass) {
    animal.som_latir()
  } else {
    animal.miar()
  }
}

const rex = new CachorroClass()
const mingau = new Gato()

emitirSom(rex)
emitirSom(mingau)