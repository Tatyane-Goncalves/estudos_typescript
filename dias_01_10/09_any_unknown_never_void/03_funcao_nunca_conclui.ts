function erroFatal (mensagem: string): never {
  throw new Error(mensagem)
}

erroFatal("OI")