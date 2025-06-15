// Desafio 3: "Registro de Eventos Flexível"
// Crie uma função TypeScript chamada logEvento que simula o registro de eventos em um sistema. A função deve aceitar:

// mensagem: Obrigatório, a descrição do evento (string).
// nivel: Opcional, o nível de severidade do evento. Pode ser 'INFO', 'WARN', 'ERROR'. Se não for fornecido, o padrão deve ser 'INFO'.
// timestamp: Opcional, um Date objeto para a hora do evento. Se não for fornecido, o padrão deve ser a hora atual no momento da chamada da função.
// A função deve formatar e imprimir a mensagem do log no console.

function logEvento(mensagem: string, nivel: "INFO" | "WARN" | "ERROR" = "INFO", timestamp: Date = new Date()): string {
  // Formata data
  const dataFormatada = timestamp.toISOString()

  // Construi mensagem fornecida ou padrão
  const mensagemLog = `[${nivel}] [${dataFormatada}] ${mensagem}`

  console.log(mensagemLog)
  return mensagemLog
}

// Entrada:
logEvento("Usuário logou com sucesso.");
logEvento("Tentativa de acesso negada.", "WARN");
logEvento("Erro ao conectar ao banco de dados.", "ERROR", new Date("2024-05-15T10:30:00Z"));
logEvento("Configuração carregada.");