const prompt = require("prompt-sync")()

function validarSenha(senha){

   if(senha.length >= 8){
      return true
   }

   return false

}

let senha = prompt("digite uma senha: ")

if(validarSenha(senha)){
   console.log("Senha valida")
}
else{
   console.log("Senha fraca - minimo 8 caracteres")
}