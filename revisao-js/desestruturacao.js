// Vetor
let numeros = [10, 20, 30]

// Desestruturação do vetor
let[a, b, c] = numeros

console.log(a, b, c)
console.log('a: ' + a)

// Desestruturação apenas o segundo valor do vetor
let [, x, ] = numeros

console.log('x: ' + x)

// Desestruturação apenas os dois primeiros valores 
let [i, j] = numeros
console.log(`i: ${i}, j: ${j}`)


//Objeto
let carro = {
    modelo: "Fusca",
    marca: 'Volkswagem',
    cor: 'Preto',
    ano: 1969
}

// Na desestruturação de objetos, as variáveis precisam ter, Necessariamente, o mesmo nome das propriedades, mas a ordem não importa.

let { marca, modelo, ano, cor } = carro
console.log(`marca: ${marca} modelo: ${modelo} ano: ${ano} cor: ${cor}`)

// Desestruturação parcial 
// let { marca, modelo } = carro