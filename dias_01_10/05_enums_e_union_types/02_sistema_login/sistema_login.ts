function login(usuario: string | number): void {
  if (typeof usuario === "string") {
    console.log(`Bem-vindo, usuário ${usuario}!`);
  } else if (typeof usuario === "number") {
    console.log(`Acesso autorizado com código ${usuario}!`);
  } else {
    console.log("Tipo inválido");
  }
}

// Testes:
login("Taty");     // Bem-vindo, usuário Taty
login(1234);       // Acesso autorizado com código 1234
