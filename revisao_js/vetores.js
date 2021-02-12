let frutas = ['maça', 'laranja', 'pera', 'uva', 'mamão', 'banana'] //vetor simples

//Vetor original
console.log(frutas)

//Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop() 

//Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

//Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//Remoção intermediária
//1º Parâmetro -> a posição de remoção (contagem começa em 0 ! )
//2º Parâmetro -> a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2,1) //splice SEMPRE retornará um vetor

console.log(frutas)
console.log(terceiraFruta)