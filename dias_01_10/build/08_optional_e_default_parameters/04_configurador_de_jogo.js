"use strict";
// Desafio 4: "Configurador de Jogo"
// Enunciado:
// Desenvolva uma função TypeScript chamada configurarJogo que inicializa as configurações de um jogo. A função deve aceitar um objeto de opções. Todas as opções devem ser opcionais, e cada uma deve ter um valor padrão razoável. O objeto de opções deve ter as seguintes propriedades:
function configurarJogo({ dificuldadeJogo = "Normal", volumeMusica = 0.7, tutorialAtivado = true, idioma = "pt-BR" }) {
    // Retorna um novo objeto
    const configuracoesFinais = {
        dificuldadeJogo,
        volumeMusica,
        tutorialAtivado,
        idioma
    };
    // Mostra no console
    console.log(`Configurações Finais: ${configuracoesFinais}.`);
    return configuracoesFinais;
}
console.log("--- Testes do Enunciado ---");
configurarJogo({});
configurarJogo({ dificuldadeJogo: "Difícil" });
configurarJogo({ volumeMusica: 0.5, tutorialAtivado: false });
configurarJogo({ idioma: "en-US", dificuldadeJogo: "Fácil", volumeMusica: 0.9, tutorialAtivado: true });
