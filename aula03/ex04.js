let alunos = [

 {id: 1, nome: "Mateus", nota: 8},
 {id: 2, nome: "Maria", nota: 6},
 {id: 3, nome: "João", nota: 9},
 {id: 4, nome: "Andre", nota: 5},
 {id: 5, nome: "Lucas", nota: 7}

]

let resultado = alunos.map(aluno => {

 return{
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
 }

})

console.log(resultado)