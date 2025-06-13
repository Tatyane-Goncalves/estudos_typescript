# 📄 Desafio 5: *Union Complexa – Formulário Dinâmico*

**📝 Enunciado:**
Você tem um sistema de formulário que aceita vários tipos de campo:

```ts
type CampoFormulario = 
  | { tipo: "texto", valor: string }
  | { tipo: "numero", valor: number }
  | { tipo: "booleano", valor: boolean };
```

Crie uma função `exibirCampo(campo: CampoFormulario)` que imprime:

* `"Campo texto: <valor>"`
* `"Campo numérico: <valor>"`
* `"Campo booleano: Sim/Não"`

**📥 Exemplo de Entrada:**

```ts
exibirCampo({ tipo: "booleano", valor: true });
```

**📤 Saída Esperada:**

```
Campo booleano: Sim
```

**💡 Dica:** Use *type narrowing* e `campo.tipo` pra identificar o tipo.