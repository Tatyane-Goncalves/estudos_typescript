"use strict";
// Desafio 5: "Sistema de Pedidos com Flexibilidade de Desconto"
// Enunciado:
// Crie uma função TypeScript chamada processarPedido que simula o processamento de um pedido em um e-commerce. A função deve aceitar:
// Função principal para processar o pedido
function processarPedido(itens, // Primeiro parâmetro obrigatório: array de itens
opcoes = {} // Segundo parâmetro opcional: objeto de opções com valor padrão de objeto vazio
) {
    // 1. Calcular o Subtotal dos Itens
    const subtotal = itens.reduce((acc, item) => acc + item.preco, 0);
    // 2. Desestruturar as opções, aplicando valores padrão quando não fornecidas
    // Note que aqui desestruturamos o 'opcoes' passado, e não o parâmetro da função diretamente
    const { cupomDesconto, // Este permanecerá undefined se não for passado
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
    }
    else if (aplicarDescontoTotal && isFreteGratis) { // Se aplicar desconto total E o frete foi zerado, aplica apenas no subtotal
        valorParaAplicarDesconto = subtotal;
    }
    else { // Se não aplicar desconto total (padrão)
        valorParaAplicarDesconto = subtotal;
    }
    const descontoAplicado = valorParaAplicarDesconto * descontoPercentual;
    // 5. Calcular o Total Final
    const totalAntesDesconto = subtotal + freteCalculado;
    const totalFinal = totalAntesDesconto - descontoAplicado;
    // 6. Retornar o objeto com os resultados
    const resultado = {
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
