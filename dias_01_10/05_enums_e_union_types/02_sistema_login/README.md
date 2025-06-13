# 📄 Desafio 2: *Union Type – Sistema de Login*

Crie uma função `login` que aceita dois tipos de usuários:

* Se for string: o nome do usuário.
* Se for number: o código de acesso.

A função deve imprimir:

* `"Bem-vindo, usuário <nome>"` ou
* `"Acesso autorizado com código <número>"`

**📥 Exemplo de Entrada:**

```ts
login("Taty");
login(1234);
```

**📤 Saída Esperada:**

```
Bem-vindo, usuário Taty
Acesso autorizado com código 1234
```

**💡 Dica:** Use `typeof` pra checar o tipo recebido.
