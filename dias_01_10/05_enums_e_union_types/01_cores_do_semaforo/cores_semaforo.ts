// 1. Cria o enum com as cores do semáforo
enum Semaforo {
  vermelho,
  amarelo,
  verde
}

// 2. Cria função para receber a cor e mostra ação
function mostrarAcao(cor: Semaforo) {
  switch (cor) {
    case Semaforo.vermelho:
      console.log("PARE")
      break
    case Semaforo.amarelo:
      console.log("ATENÇÃO")
      break
    case Semaforo.verde:
      console.log("SIGA")
      break
    default:
      console.log("Cor inválida!")
  }
}

// 3. Teste da função
mostrarAcao(Semaforo.verde)
mostrarAcao(Semaforo.amarelo)
mostrarAcao(Semaforo.vermelho)
