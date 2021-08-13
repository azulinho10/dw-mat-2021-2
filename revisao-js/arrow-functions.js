//Função com:
// 1) Possui um único argumento 
// 2) Possui uma única linha de código no corpo
// 3) A única linha de código tem return
function quadrado(x) {
    return x * x
}

// Arrow function equivalente

const quadrado2 = (x) => x * x

console.log('Quadrado: ', quadrado(6))
console.log('Quadrado2: ', quadrado2(6))


// Função tradicional com dois parâmetros
function imc(peso, altura) {
    return peso / (altura ** 2)
}

// Arroe function equivalente
// - Voltam os parâmetros em torno dos parâmetros
const imc2 = (peso, altura) => peso / (altura ** 2)

console.log('IMC:', imc(62, 1.66))
console.log('IMC2:', imc2(62, 1.66))


// função tradicional sem parâmetros 
function horaAtual() {
    return new Date()
}

// Arrow function equivalente 
// - Quando não há parâmetros, os parânteses ficam vazios
const horarAtual2 = () => new Date()

console.log('Hora Atual: ', horaAtual())
console.log('Hora atual 2: ', horaAtual())

// Função condicional com várias linhas no corpo 
function fatorial(n) {
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
        return fat
    
}

// Arrow functions equivalente
// Retornam as chaves
const fatorial2 = n => {
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
        return fat
}

console.log('Fatorial:', fatorial(5))
console.log('Fatorial2:', fatorial2(5))