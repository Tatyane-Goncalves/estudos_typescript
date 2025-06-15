# 📜 Desafios

- [Desafio 01](#desafio-01-função-log-universal-usando-any)
- [Desafio 02](#desafio-02-validação-segura-usando-unknown)
- [Desafio 03](#desafio-03-função-nunca-conclui-never)
- [Desafio 04](#desafio-04-manipulador-genérico-com-unknown)
- [Desafio 05](#desafio-05-gerenciador-de-erros-e-logs-any--unknown--never--void)

## Desafio 01: Função Log Universal (Usando any)
Crie uma função chamada logQualquerCoisa que receba qualquer tipo de dado e imprima no console.
- A função deve aceitar qualquer tipo (string, number, boolean, array, objeto...).
- Ela apenas exibe no console, sem processamento.

### 💡 Dica:
Use o tipo any (não recomendado no mundo real, mas útil em casos rápidos ou migrações).


## Desafio 02: Validação Segura (Usando unknown)
Crie uma função mostrarTamanhoSeString que recebe um valor de tipo unknown.
- Se o valor for uma string, exiba no console seu tamanho.
- Se não for string, exiba: "Não é uma string".

### 💡 Dica:
unknown força você a verificar o tipo antes de usar. Isso te protege de erros bobos. Use typeof.

## Desafio 03: Função Nunca Conclui (never)
Implemente uma função chamada `erroFatal` que sempre lança um erro com uma mensagem personalizada.
- Função deve ter um retorno válido.
- Sempre deve interromper a execução do programa.

💡 Dica:
Use `throw new Error()`. Quando uma função nunca retorna, seu tipo é never.

🚩 Pegadinha: funções que entram em loop infinito também são never. Se quiser, brinque criando uma dessas.

## Desafio 04: Manipulador Genérico com Unknown
Crie uma função chamada `processarDado` que recebe um dado do tipo `unknown` e:

-  Se for string, retorna a string em caixa alta.
- Se for número, retorna o dobro.
- Se for booleano, retorna o inverso (`true` vira `false` e vice-versa).
- Se for outro tipo, retorna `"Tipo não suportado"`.

### 💡 Dica:
Faça type narrowing com ``typeof``. Se quiser avançar, pode usar também checagens mais robustas (tipo `Array.isArray()`).

## Desafio 05: Gerenciador de Erros e Logs (any + unknown + never + void)

Monte um sistema de logs com a função `registrarEvento`, que aceita qualquer evento:

- Se o evento for string ou number, apenas logue no console.
- Se for um objeto, exiba suas chaves e valores.
- Se for algo inesperado (boolean, undefined, etc), dispare um erro com `erroFatal`.
- A função `erroFatal` deve ser usada e ter tipo `never`.
- Crie também uma função `logVazio` que não retorna nada, apenas escreve `"Log concluído"` — ela deve ser do tipo `void`.

### 💡 Dicas:
- Combine `typeof`, `instanceof` ou A`rray.isArray()`.
- never é exigido quando sua função lança erros.
- `void` é pra funções que só fazem efeito colateral (ex.: console.log).

### 🚩 Pegadinhas:
- Errar a detecção do objeto é comum. Lembre-se de que em JS até `null` é do tipo "object" (cuidado).
- Use `typeof evento === 'object' && evento !== null`.