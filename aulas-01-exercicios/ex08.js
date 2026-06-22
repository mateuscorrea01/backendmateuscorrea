const readline = require('readline-sync');

let tamanho = parseInt(readline.question("Digite o tamanho do tabuleiro: "), 10);
let tabuleiro = "";

for (let linha = 0; linha < tamanho; linha++) {
    for (let coluna = 0; coluna < tamanho; coluna++) {
        // Se a soma da linha + coluna for par, põe espaço. Se for ímpar, põe #
        if ((linha + coluna) % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        }
    }
    tabuleiro += "\n"; // Quebra a linha
}

console.log(tabuleiro);