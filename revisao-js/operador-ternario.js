let nota = 5.3
let situacao 
/*
if(nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}
*/

// Operador ternário
// condição ? resultado se verdadeiro : resultado se falso

situacao = nota >= 6 ? 'APROVADO':'REPROVADO' 

console.log(`Nota ${nota}, situação ${situacao}`)


let user = 'admin', msg
msg = user === 'admin' ? 'Pode logar' : 'Proibido logar'

console.log(msg)
