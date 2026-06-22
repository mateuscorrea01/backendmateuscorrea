// Criando o array com 5 alunos
const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 7.2 },
    { nome: "Daniela", nota: 5.5 },
    { nome: "Eduardo", nota: 9.0 }
];

// 1. Usando .map() para adicionar a propriedade "situacao"
const boletim = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});
console.log("Boletim:", boletim);

// 2. Usando .filter() para pegar apenas os aprovados e ver a quantidade (.length)
const aprovados = boletim.filter(aluno => aluno.situacao === "Aprovado");
console.log("Quantidade de aprovados:", aprovados.length);

// 3. Calculando a média geral da turma (Soma as notas e divide pela quantidade de alunos)
let somaNotas = 0;
alunos.forEach(aluno => somaNotas += aluno.nota);
let mediaGeral = somaNotas / alunos.length;

console.log("Média geral da turma:", mediaGeral);