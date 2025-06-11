interface Livro {
  titulo: string;
  autor: string;
  readonly anoPublicacao: number;
}

const livro_1: Livro = {
  titulo: "Alice no país das maravilhas",
  autor: "Fulano de tal",
  anoPublicacao: 1885
}

// livro_1.anoPublicacao = 2025 -> vai dar erro!

console.log(livro_1);
