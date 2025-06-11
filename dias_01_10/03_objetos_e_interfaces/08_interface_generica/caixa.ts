interface Caixa<T> {
  conteudo: T;
}

const caixaDeLivros: Caixa<string> = {
  conteudo: "livro"
};

const caixaDeNumeros: Caixa<number> = {
  conteudo: 42
};

console.log("Conteúdo da caixa 1:", caixaDeLivros.conteudo);
console.log("Conteúdo da caixa 2:", caixaDeNumeros.conteudo);
