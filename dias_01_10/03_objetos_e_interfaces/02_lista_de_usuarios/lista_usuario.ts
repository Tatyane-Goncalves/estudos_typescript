interface listaUsuario {
  nome: string,
  email: string,
  ativo: boolean
}

const listaUsuarios: listaUsuario[] = [
  {
    nome: "Liam Hoffman",
    email: "liamhoffman@gmail.com",
    ativo: true
  },
  {
    nome: "Luana Rocha",
    email: "lulurocha@hotmail.com",
    ativo: false
  },
  {
    nome: "Niccolò Lucchese",
    email: "nicovlucchese@gmail.com",
    ativo: true
  },
]

const usuariosAtivos = listaUsuarios.filter((user) => user.ativo);

usuariosAtivos.forEach((user) => {
  console.log(`${user.nome} (${user.email}) está ativo!`);
});