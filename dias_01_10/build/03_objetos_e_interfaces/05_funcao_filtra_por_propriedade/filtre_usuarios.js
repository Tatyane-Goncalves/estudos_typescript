"use strict";
const filtreUsuarios = [
    { nome: "Ana", email: "ana@gmail.com", ativo: true },
    { nome: "Bruno", email: "bruno@yahoo.com", ativo: false },
    { nome: "Carlos", email: "carlos@gmail.com", ativo: true },
    { nome: "Duda", email: "duda@outlook.com", ativo: true }
];
function filtrarGmail(users) {
    return users.filter((user) => user.email.endsWith("@gmail.com"));
}
const gmailUsers = filtrarGmail(filtreUsuarios);
gmailUsers.forEach(user => {
    console.log(`${user.nome} usa Gmail: ${user.email}`);
});
