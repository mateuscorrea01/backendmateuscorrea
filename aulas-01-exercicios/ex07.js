let soma = 0;

// O laço começa em 2 e pula de 2 em 2 até 50 (apenas os pares)
for (let i = 2; i <= 50; i += 2) {
    soma += i; // Adiciona o número atual à soma
}

console.log("A soma dos números pares de 1 a 50 é:", soma);