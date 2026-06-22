function contarLetra(texto, letra) {
    let contador = 0;

    // Percorre cada caractere da string
    for (let i = 0; i < texto.length; i++) {
        // Se a letra atual for igual à letra procurada, aumenta o contador
        if (texto[i] === letra) {
            contador++;
        }
    }

    return contador;
}

// Exemplos de teste:
console.log(contarLetra("banana", "a")); // Exibe: 3
console.log(contarLetra("javascript", "j")); // Exibe: 1