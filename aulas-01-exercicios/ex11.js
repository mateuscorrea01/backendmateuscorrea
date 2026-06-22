const readline = require('readline-sync');

// Função que valida a idade (retorna true ou false direto)
function podeVotar(idade) {
    return idade >= 16;
}

// Lê a idade do usuário
let suaIdade = parseInt(readline.question("Digite a sua idade: "), 10);

// Verifica o resultado da função e exibe a mensagem
if (podeVotar(suaIdade)) {
    console.log("Você já pode votar!");
} else {
    console.log("Você ainda não pode votar.");
}