// Desafio 4: "Configurador de Jogo"
// Enunciado:
// Desenvolva uma função TypeScript chamada configurarJogo que inicializa as configurações de um jogo. A função deve aceitar um objeto de opções. Todas as opções devem ser opcionais, e cada uma deve ter um valor padrão razoável. O objeto de opções deve ter as seguintes propriedades:

// dificuldade: string, padrão "Normal" (valores possíveis: "Fácil", "Normal", "Difícil").
// volumeMusica: number, padrão 0.7 (entre 0 e 1).
// tutorialAtivado: boolean, padrão true.
// idioma: string, padrão "pt-BR".
// A função deve retornar um objeto com as configurações finais do jogo.

// Casos de Teste Esperados:

// configurarJogo({}) deve retornar as configurações padrão.
// configurarJogo({ dificuldade: "Fácil" }) deve sobrescrever a dificuldade e manter os outros padrões.
// configurarJogo({ volumeMusica: 0.2 }) deve sobrescrever o volume e manter os outros padrões.
// configurarJogo({ tutorialAtivado: false, idioma: "es-ES" }) deve sobrescrever tutorialAtivado e idioma, mantendo o restante.
// configurarJogo({ dificuldade: "Normal", volumeMusica: 0.7, tutorialAtivado: true, idioma: "pt-BR" }) deve retornar as configurações padrão, pois todos os valores são iguais aos padrões.
// Dicas, Pegadinhas e Melhorias:

// Você precisará definir uma interface para o objeto de opções, e todas as propriedades dessa interface devem ser opcionais (?).
// Dentro da função, você pode usar a desestruturação de objeto com valores padrão para extrair as propriedades e aplicar os padrões. Isso é uma forma muito idiomática e limpa de lidar com isso em JavaScript/TypeScript. Ex: ({ prop = defaultValue } = {}).
// Pense em como lidar com inputs inválidos (ex: volumeMusica: 2.0). Embora o desafio não exija validação complexa, em um cenário real, você adicionaria essa lógica.

interface OpcoesJogo {
  dificuldadeJogo?: "Fácil" | "Normal" | "Difícil", 
  volumeMusica?: number, 
  tutorialAtivado?: boolean, 
  idioma?: string
}

function configurarJogo({
  dificuldadeJogo = "Normal",
  volumeMusica = 0.7,
  tutorialAtivado = true,
  idioma = "pt-BR"
}: OpcoesJogo): OpcoesJogo {
  // Retorna um novo objeto
  const configuracoesFinais = {
    dificuldadeJogo,
    volumeMusica, 
    tutorialAtivado,
    idioma
  }


  // Mostra no console
  console.log(`Configurações Finais: ${configuracoesFinais}.`)
  return configuracoesFinais
}

console.log("--- Testes do Enunciado ---");
configurarJogo({});
configurarJogo({ dificuldadeJogo: "Difícil" });
configurarJogo({ volumeMusica: 0.5, tutorialAtivado: false });
configurarJogo({ idioma: "en-US", dificuldadeJogo: "Fácil", volumeMusica: 0.9, tutorialAtivado: true });
