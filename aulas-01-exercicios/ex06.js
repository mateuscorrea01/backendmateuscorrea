    const readline = require('readline-sync');

// Lê o número do usuário
let numero = parseInt(readline.question("Digite um numero: "), 10);

// Enquanto o número for maior ou igual a 1, ele mostra o número e diminui
while (numero >= 1) {
    console.log(numero);
    numero--; // Isso tira 1 do número a cada linha que passa
}

console.log("Fim!");