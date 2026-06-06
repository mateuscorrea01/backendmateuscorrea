const prompt = require("prompt-sync")()

let somaNotas = 0

for(let i = 1; i <= 5; i++){

 let nota = Number(prompt(`digite a ${i} nota: `))

 somaNotas += nota

}

let media = somaNotas / 5

console.log("sua media foi: " + media)

if(media >= 7){
   console.log("Aluno aprovado")
}
else if(media >= 5){
 console.log("recuperação")
}
else{
    console.log("reprovado")
}