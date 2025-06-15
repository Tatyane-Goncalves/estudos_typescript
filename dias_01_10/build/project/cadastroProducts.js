"use strict";
// Enum
var ProductTypeEnum;
(function (ProductTypeEnum) {
    ProductTypeEnum["FOOD"] = "food";
    ProductTypeEnum["ELECTRONIC"] = "electronic";
    ProductTypeEnum["CLOTHING"] = "clothing";
    ProductTypeEnum["TOY"] = "toy";
})(ProductTypeEnum || (ProductTypeEnum = {}));
// Banco de dados  
const products = [];
// Cria produto
function createProduct(item) {
    products.push(item);
    const dataCreate = item.created_at.toISOString();
    const mensagemReturn = `Id do produto: ${item.id}, nome do produto: ${item.name}, descrição: ${item.description}, preço: R$${item.price.toFixed(2)}, tipo: ${item.type}, criada em: ${dataCreate}`;
    console.log(mensagemReturn);
    return mensagemReturn;
}
// Listar produto
function getProduct(id) {
    const product = products.find((p) => p.id === id);
    if (!product) {
        const msg = `Produto com ID ${id} não encontrado`;
        console.log(msg);
        return msg;
    }
    const dataCreate = product.created_at.toISOString();
    const dataUpdate = product.updated_at.toISOString();
    const mensagemReturn = `Id do produto: ${product.id}, nome do produto: ${product.name}, descrição: ${product.description}, preço: R$${product.price.toFixed(2)}, tipo: ${product.type}, criada em: ${dataCreate}, atualizada em ${dataUpdate}`;
    console.log(mensagemReturn);
    return mensagemReturn;
}
// Listar produtos
function listProducts() {
    if (products.length === 0) {
        const msg = 'Nenhum produto cadastrado.';
        console.log(msg);
        return msg;
    }
    products.forEach(product => {
        const dataCreate = product.created_at.toISOString();
        const dataUpdate = product.updated_at.toISOString();
        console.log(`Id: ${product.id}, Nome: ${product.name}, Preço: R$${product.price.toFixed(2)}, Tipo: ${product.type}, Criado: ${dataCreate}, Atualizado: ${dataUpdate}`);
    });
    return products;
}
// Atualizar produto
function updateProduct(item) {
    const index = products.findIndex((p) => p.id === item.id);
    if (index === -1) {
        const msg = `Produto com Id ${item.id} não encontrado.`;
        console.log(msg);
        return msg;
    }
    const dataCreate = products[index].created_at.toISOString();
    const dataUpdate = products[index].updated_at.toISOString();
    const mensagemReturn = `Id do produto: ${item.id}, nome do produto: ${item.name}, descrição: ${item.description}, preço: R$${item.price.toFixed(2)}, tipo: ${item.type}, criada em: ${dataCreate}, atualizada em ${dataUpdate}`;
    console.log(mensagemReturn);
    return mensagemReturn;
}
// Deletar produto
function deleteProduct(id) {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
        const msg = `Produto com ID ${id} não encontrado.`;
        console.log(msg);
        return msg;
    }
    const removed = products.splice(index, 1)[0];
    const msg = `Produto ${removed.name} (ID ${removed.id}) removido com sucesso.`;
    console.log(msg);
    return msg;
}
// Criar produtos
createProduct({
    id: 1,
    name: 'Camisa X',
    description: 'Camisa de algodão',
    price: 79.9,
    type: ProductTypeEnum.CLOTHING,
    created_at: new Date(),
    updated_at: new Date()
});
createProduct({
    id: 2,
    name: 'Smartphone Y',
    description: 'Smartphone Android',
    price: 1999.9,
    type: ProductTypeEnum.ELECTRONIC,
    created_at: new Date(),
    updated_at: new Date()
});
// Listar produtos
console.log('\nListando todos os produtos:');
listProducts();
// Buscar produto
console.log('\nBuscando produto ID 1:');
getProduct(1);
// Atualizar produto
console.log('\nAtualizando produto ID 1:');
updateProduct({
    id: 1,
    name: 'Camisa X Premium',
    description: 'Camisa de algodão premium',
    price: 99.9,
    type: ProductTypeEnum.CLOTHING,
    created_at: new Date(),
    updated_at: new Date()
});
// Deletar produto
console.log('\nDeletando produto ID 2:');
deleteProduct(2);
// Listar novamente
console.log('\nListando produtos depois da exclusão:');
listProducts();
