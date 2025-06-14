// 🎯 Desafio 4 — Controle de Luz (Intermediário/Difícil)
// Crie um tipo chamado EstadoLuz que aceita "on" ou "off".
// Depois, faça uma função controleLuz() que recebe o estado da luz e imprime:
// "A luz está acesa" ou "A luz está apagada" dependendo do estado.

type EstadoLuz = "on" | "off"

function controleLuz(estado: EstadoLuz) {
  if (estado === "on") {
    console.log("A luz está acessa!")
  } else if (estado === "off") {
    console.log("A luz está apagada!")
  }
}

controleLuz("on")
controleLuz("off")