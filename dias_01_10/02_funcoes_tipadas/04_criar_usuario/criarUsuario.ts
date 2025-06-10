type Usuario = {
  name: string;
  age: number;
  email: string;
};

function criarUsuario(name: string, age: number, email: string): Usuario {
  return { name, age, email };
}

const userTaty = criarUsuario("Taty", 21, "taty@test.com");
const userMilla = criarUsuario("Milla", 45, "milla@test.com");
console.log(userMilla);
console.log(userTaty);

const usuarios: Usuario[] = [
  criarUsuario("Taty", 21, "taty@test.com"),
  criarUsuario("Milla", 45, "milla@test.com"),
];

usuarios.forEach((usuario) => {
  console.log(
    `Usuário: ${usuario.name} | Idade: ${usuario.age} | E-mail: ${usuario.email}`
  );
});
