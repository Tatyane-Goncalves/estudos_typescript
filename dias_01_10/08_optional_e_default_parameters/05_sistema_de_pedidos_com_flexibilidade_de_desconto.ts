// Desafio 5: "Sistema de Pedidos com Flexibilidade de Desconto"
// Enunciado:
// Crie uma função TypeScript chamada processarPedido que simula o processamento de um pedido em um e-commerce. A função deve aceitar:

// itens: Obrigatório, um array de objetos, onde cada objeto tem nome: string e preco: number.
// opcoes: Opcional, um objeto que pode conter as seguintes propriedades:
// cupomDesconto: string, opcional. Se presente, deve ser um código de cupom (ex: "DESC10" para 10% de desconto, "FRETEGRATIS" para frete grátis).
// taxaFrete: number, opcional. O valor do frete. Se não fornecido, o padrão é 15.00.
// aplicarDescontoTotal: boolean, opcional. Se true, o desconto do cupom é aplicado ao valor total (itens + frete). Se false (padrão), o desconto é aplicado apenas ao valor dos itens.
// A função deve calcular o total do pedido, incluindo itens, frete e aplicando descontos.

// Regras de Desconto:

// "DESC10": 10% de desconto no valor elegível.
// "FRETEGRATIS": Taxa de frete é zero.
// Qualquer outro cupom ou cupom vazio não aplica desconto.
// Se cupomDesconto for "FRETEGRATIS" e aplicarDescontoTotal for true, o frete é zerado antes de qualquer desconto percentual ser calculado sobre o total (se houvesse outro cupom junto, o que não é o caso neste desafio, mas é bom pensar). Para este desafio, "FRETEGRATIS" apenas zera o frete.
// A função deve retornar um objeto com o subtotal (apenas itens), valorFrete (após aplicar frete grátis, se houver), descontoAplicado e totalFinal.
// Casos de Teste Esperados:

// Pedido Básico:
// Entrada: [{ nome: "A", preco: 100 }]
// Saída: { subtotal: 100, valorFrete: 15, descontoAplicado: 0, totalFinal: 115 }
// Desconto DESC10 (Itens Apenas):
// Entrada: [{ nome: "B", preco: 200 }], { cupomDesconto: "DESC10" }
// Saída: { subtotal: 200, valorFrete: 15, descontoAplicado: 20, totalFinal: 195 }
// Desconto FRETEGRATIS:
// Entrada: [{ nome: "C", preco: 50 }], { cupomDesconto: "FRETEGRATIS" }
// Saída: { subtotal: 50, valorFrete: 0, descontoAplicado: 0, totalFinal: 50 }
// Taxa de Frete Personalizada:
// Entrada: [{ nome: "D", preco: 70 }], { taxaFrete: 5.00 }
// Saída: { subtotal: 70, valorFrete: 5, descontoAplicado: 0, totalFinal: 75 }
// Desconto DESC10 com aplicarDescontoTotal: true:
// Entrada: [{ nome: "E", preco: 100 }], { cupomDesconto: "DESC10", aplicarDescontoTotal: true }
// Saída: { subtotal: 100, valorFrete: 15, descontoAplicado: 11.5, totalFinal: 103.5 } (10% de 115)
// Cupom Inválido:
// Entrada: [{ nome: "F", preco: 100 }], { cupomDesconto: "INVALIDO" }
// Saída: { subtotal: 100, valorFrete: 15, descontoAplicado: 0, totalFinal: 115 }
// Dicas, Pegadinhas e Melhorias:

// Defina interfaces para ItemPedido e OpcoesPedido para garantir a tipagem correta.
// Use desestruturação com valores padrão para as opções.
// A ordem de cálculo é crucial: primeiro o subtotal dos itens, depois o frete (considerando "FRETEGRATIS"), e por último o desconto percentual.
// Preste atenção na lógica condicional para aplicar o desconto (aplicarDescontoTotal). O valor sobre o qual o desconto é calculado muda.
// Pense em usar toFixed() para formatar os valores monetários, mas aplique-o apenas no resultado final para exibição, não durante os cálculos para evitar erros de arredondamento. Mantenha os cálculos com números de ponto flutuante.



// Interface para um único item no pedido
interface ItemPedido {
  nome: string;
  preco: number;
}

// Interface para as opções do pedido (todas opcionais)
interface OpcoesProcessarPedido {
  cupomDesconto?: string;
  taxaFrete?: number;
  aplicarDescontoTotal?: boolean;
}

// Interface para o resultado final do processamento do pedido
interface ResultadoProcessamentoPedido {
  subtotal: number;
  valorFrete: number;
  descontoAplicado: number;
  totalFinal: number;
}

// Função principal para processar o pedido
function processarPedido(
  itens: ItemPedido[], // Primeiro parâmetro obrigatório: array de itens
  opcoes: OpcoesProcessarPedido = {} // Segundo parâmetro opcional: objeto de opções com valor padrão de objeto vazio
): ResultadoProcessamentoPedido { // A função retorna um objeto do tipo ResultadoProcessamentoPedido

  // 1. Calcular o Subtotal dos Itens
  const subtotal = itens.reduce((acc, item) => acc + item.preco, 0);

  // 2. Desestruturar as opções, aplicando valores padrão quando não fornecidas
  // Note que aqui desestruturamos o 'opcoes' passado, e não o parâmetro da função diretamente
  const {
    cupomDesconto, // Este permanecerá undefined se não for passado
    taxaFrete = 15.00, // Valor padrão para taxaFrete
    aplicarDescontoTotal = false // Valor padrão para aplicarDescontoTotal
  } = opcoes;

  let freteCalculado = taxaFrete;
  let descontoPercentual = 0;
  let isFreteGratis = false;

  // 3. Aplicar Descontos do Cupom
  if (cupomDesconto) {
    const cupom = cupomDesconto.toUpperCase(); // Converte para maiúsculas para facilitar a comparação

    switch (cupom) {
      case "DESC10":
        descontoPercentual = 0.10; // 10% de desconto
        break;
      case "FRETEGRATIS":
        freteCalculado = 0; // Zera o frete
        isFreteGratis = true; // Marca para evitar aplicar desconto percentual sobre o frete se já zerado
        break;
      // Adicione outros cupons aqui se necessário
      default:
        // Nenhum desconto para cupom inválido
        break;
    }
  }

  // 4. Calcular o Desconto Aplicado
  let valorParaAplicarDesconto = 0;
  if (aplicarDescontoTotal && !isFreteGratis) { // Se aplicar desconto total E o frete não foi zerado pelo cupom
    valorParaAplicarDesconto = subtotal + freteCalculado;
  } else if (aplicarDescontoTotal && isFreteGratis) { // Se aplicar desconto total E o frete foi zerado, aplica apenas no subtotal
    valorParaAplicarDesconto = subtotal;
  } else { // Se não aplicar desconto total (padrão)
    valorParaAplicarDesconto = subtotal;
  }

  const descontoAplicado = valorParaAplicarDesconto * descontoPercentual;

  // 5. Calcular o Total Final
  const totalAntesDesconto = subtotal + freteCalculado;
  const totalFinal = totalAntesDesconto - descontoAplicado;

  // 6. Retornar o objeto com os resultados
  const resultado: ResultadoProcessamentoPedido = {
    subtotal: parseFloat(subtotal.toFixed(2)), // Arredonda para 2 casas decimais
    valorFrete: parseFloat(freteCalculado.toFixed(2)),
    descontoAplicado: parseFloat(descontoAplicado.toFixed(2)),
    totalFinal: parseFloat(totalFinal.toFixed(2)),
  };

  // Para fins de demonstração e para você ver o output no console:
  console.log("Processando Pedido:", itens, "com Opções:", opcoes, "-> Resultado:", resultado);

  return resultado;
}

// --- Testes do Enunciado ---
console.log("\n--- Testes do Enunciado ---");
console.log(processarPedido([{ nome: "Camisa", preco: 50 }, { nome: "Calça", preco: 100 }]));
console.log(processarPedido([{ nome: "Livro", preco: 30 }], { cupomDesconto: "DESC10" }));
console.log(processarPedido([{ nome: "Mouse", preco: 80 }], { cupomDesconto: "FRETEGRATIS", aplicarDescontoTotal: true }));
console.log(processarPedido([{ nome: "Teclado", preco: 200 }], { taxaFrete: 25.00 }));
console.log(processarPedido([{ nome: "Fone", preco: 120 }], { cupomDesconto: "DESC10", aplicarDescontoTotal: true }));
