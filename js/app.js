function comprar() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value);
    
    // Chama a função genérica passando o tipo e a quantidade
    comprarIngresso(tipoIngresso, qtd);
}

function comprarIngresso(tipo, qtd) {
    let qtdDisponivel = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    // Verificar se a quantidade solicitada é válida
    if (qtd > qtdDisponivel) {
        alert(`Quantidade indisponível para ${tipo}`);
    } else {
        qtdDisponivel -= qtd;
        document.getElementById(`qtd-${tipo}`).textContent = qtdDisponivel;
        alert('Compra realizada com sucesso!');
    }
}
