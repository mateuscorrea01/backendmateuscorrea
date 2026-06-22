// 1. Função que cria o array do início até o fim
function range(inicio, fim) {
    let resultado = [];
    for (let i = inicio; i <= fim; i++) {
        resultado.push(i); // Adiciona o número atual no array
    }
    return resultado;
}

// 2. Função que soma todos os elementos de um array
function soma(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i]; // Soma cada item do array ao total
    }
    return total;
}

// 3. Teste solicitado: soma(range(1, 10))
console.log(soma(range(1, 10))); // Exibe: 55