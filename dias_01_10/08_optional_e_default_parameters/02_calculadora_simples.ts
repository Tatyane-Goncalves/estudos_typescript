// Desafio 2: "Calculadora de Área Simples"
// Enunciado:
// Desenvolva uma função TypeScript chamada calcularAreaForma que pode calcular a área de um quadrado ou de um círculo. A função deve aceitar:

// lado: Obrigatório, para o lado do quadrado.
// raio: Opcional, para o raio do círculo.
// Se apenas lado for fornecido, calcule a área de um quadrado 
// Se raio também for fornecido (e for um número válido), calcule a área de um círculo 
// Use Math.PI para o valor de Pi. Se raio for fornecido mas não for um número válido ou for menor ou igual a zero, a função deve retornar uma mensagem de erro.

function calcularAreaForma(lado: number, raio?: number): string {

  // Verifica o raio
  if (raio !== undefined && Number.isFinite(raio) && raio > 0) {
    const  areaCirculo = Math.PI * (raio * raio)
    return `Àrea do circulo: ${areaCirculo}.`
  }

  // Se raio for fornecido mas não é valido
  if (raio !== undefined) {
    return "Erro: Raio inválido ou menor/igual a zero.";
  }

  // Se raio não for fornecido
  const areaQuadrado = lado * lado;
  return `Área do quadrado: ${areaQuadrado}`;
}

// Exemplos de Entrada e Saída (do desafio):
console.log(calcularAreaForma(5));                
console.log(calcularAreaForma(10, 3));             
console.log(calcularAreaForma(7, -2));          
console.log(calcularAreaForma(4, undefined));      
console.log(calcularAreaForma(6, null as any)); 

