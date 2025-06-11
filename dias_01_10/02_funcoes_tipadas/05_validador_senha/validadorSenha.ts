function senhaForte(senha: string): boolean {
  const temTamanhoMinimo = senha.length >= 8;
  const temNumero = /[0-9]/.test(senha);

  return temTamanhoMinimo && temNumero;
}

console.log(senhaForte("abc12345"));
console.log(senhaForte("short"));
