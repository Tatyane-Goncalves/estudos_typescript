import * as readline from "readline";

// Interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcular(a: number, b: number, operador: string): number | string {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Erro: divisão por zero!";
    default:
      return "Operador inválido!";
  }
}

rl.question("Digite o primeiro número: ", (num1Str) => {
  const num1 = Number(num1Str);

  rl.question("Digite o segundo número: ", (num2Str) => {
    const num2 = Number(num2Str);

    rl.question("Digite o operador (+, -, *, /): ", (operador) => {
      const resultado = calcular(num1, num2, operador);

      console.log(`Resultado: ${resultado}`);
      rl.close();
    });
  });
});
