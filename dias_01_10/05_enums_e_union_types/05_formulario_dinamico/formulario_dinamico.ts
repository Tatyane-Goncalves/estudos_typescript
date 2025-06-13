// 1. Define os tipos de dados do formulário
type CampoFormulario = {
  nome: string;
  telefone: number;
  cadastrado: boolean;
};

// 2. Função que imprime os valores do formulário
function exibirCampos(campo: CampoFormulario): void {
  console.log(`Nome: ${campo.nome}`);
  console.log(`Telefone: ${campo.telefone}`);
  console.log(`Cadastrado: ${campo.cadastrado ? "Sim" : "Não"}`);
}

// 3. Cria o dado para enviar na função
const dadosFormulario: CampoFormulario = {
  nome: "July",
  telefone: 134569,
  cadastrado: true
};

// 4. Chama a função passando o objeto
exibirCampos(dadosFormulario);
