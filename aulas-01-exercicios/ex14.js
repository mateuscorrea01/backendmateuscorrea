function reverter(array) {
    let novoArray = [];

    // O laço começa na última posição (array.length - 1) e vai descendo até 0
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]); // Joga o elemento no novo array
    }

    return novoArray;
}

// Exemplo de teste:
let numeros = [1, 2, 3, 4, 5];
console.log(reverter(numeros)); // Exibe: [5, 4, 3, 2, 1]