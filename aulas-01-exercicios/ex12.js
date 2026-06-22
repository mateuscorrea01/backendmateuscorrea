// Função principal que recebe os dois números e a função de operação
function calcular(a, b, operacao) {
    return operacao(a, b);
}

// Criando as operações usando Arrow Functions simples
const somar = (x, y) => x + y;
const subtrair = (x, y) => x - y;
const multiplicar = (x, y) => x * y;

// Testando a calculadora passando as funções como terceiro argumento
console.log("Soma (5 + 3):", calcular(5, 3, somar));             // Exibe: 8
console.log("Subtração (10 - 4):", calcular(10, 4, subtrair));    // Exibe: 6
console.log("Multiplicação (6 * 5):", calcular(6, 5, multiplicar)); // Exibe: 30