// Desafio 1: "Mensagem de Boas-Vindas Personalizada"
// Crie uma função TypeScript chamada gerarMensagemBoasVindas que aceita o nome de um usuário como parâmetro obrigatório e um cumprimento (saudação) opcional. Se o cumprimento não for fornecido, a função deve usar "Olá" como padrão. A função deve retornar a mensagem completa.

function gerarMensagemBoasVindas(nome: string, cumprimento: string = "Olá"): string {
  return `${cumprimento}, ${nome}`
}

gerarMensagemBoasVindas("Ana")
gerarMensagemBoasVindas("Myke", "Bom dia")
gerarMensagemBoasVindas("Diego", "E aí")