// Referências aos elementos HTML
const mostrarCardBtn = document.getElementById('mostrarCardBtn');
const card = document.getElementById('cardi');
const submitBtn = document.getElementById('submitBtn');
const nomeProdutoEntrada = document.getElementById('nomeProduto');
const precoProdutoEntrada = document.getElementById('precoProduto');
const descricaoProdutoEntrada = document.getElementById('descricaoProduto');
const fecharCardBtn = document.getElementById('fecharCardBtn'); // Seleção do botão de fechar
const fecharCardi = document.getElementById('fecharCardi');
const cardEditarProduto = document.getElementById('editar-tabela-card')


// Função para mostrar o card de adicionar produto
mostrarCardBtn.addEventListener('click', function () {
    card.style.display = 'block'; // Exibe o card
    fecharCardi.style.display = 'block';
});

// Função para lidar com o envio de dados do input
submitBtn.addEventListener('click', function () {
    let nomeProduto = nomeProdutoEntrada.value;
    let precoProduto = precoProdutoEntrada.value;
    let descricaoProduto = descricaoProdutoEntrada.value;

    if (descricaoProduto && nomeProduto && precoProduto) {
        alert(`Você adicionou o produto ${nomeProduto} com preço de R$${precoProduto} com a descrição de ${descricaoProduto}.`);

        // Limpa os campos de entrada após o envio
        nomeProdutoEntrada.value = '';
        precoProdutoEntrada.value = '';
        descricaoProdutoEntrada.value = '';
        card.style.display = 'block';
    } else {
        alert('Por favor, digite algo!');
        nomeProdutoEntrada.value = '';
        precoProdutoEntrada.value = '';
        descricaoProdutoEntrada.value = '';
        // Limpa os campos de entrada caso falte algo
    }
});

// Função para fechar o card de adcionar produtos
fecharCardBtn.addEventListener('click', function () {
    fecharCardi.style.display = 'none'; // Esconde o card
});

document.getElementById("mostrarCardBtnEstoque").addEventListener("click", function () {
    console.log("Botão Editar Estoque clicado!");
    cardEditarProduto.style.display = 'block';
});

fecharCardBtnEstoque.addEventListener('click', function () {
    cardEditarProduto.style.display = 'none'; // Esconde o card
});
