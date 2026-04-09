// recuperar valores 
function comprar() {
    let lugarEscolhido = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if (lugarEscolhido == 'pista') {
        comprarPista(quantidade);
    } else if (lugarEscolhido == 'superior') {
        comprarSuperior(quantidade)
    } else {
        comprarInferior(quantidade)
    }
}
//
function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista) {
        alert('Quantidade indisponível!');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra feita com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra feita com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > quantidadeInferior) {
        alert('Quantidade indisponível')
    } else {
        quantidadeInferior = quantidadeInferior - quantidade
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra feita com sucesso!');
    }
}