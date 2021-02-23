//COMPARAÇÕES.

//Números.
console.log('Números:')
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------------------')

//Strings
console.log('Strings:')
a = 'CATIFUNDA'
b = 'FELISBINO'
c = 'CATIFUNDA'
console.log(a > b)  // Vai dar false (a < b), pois na tabela ascii o F tem maior valor numérico que o C.
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------------------')

//Booleans 
console.log('Booleans:')
a = true   //true = 1
b = false  //false = 0
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('-----------------------------------------')

//Vetores -> O que é comparado são os endereços de memória .. Não o conteúdo! Portanto e impossível prever!
console.log('Vetores:')
a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
c = [10, 20, 30, 40, 50]
console.log(a > b)  //a > b (true) -> endereço de mem do 'a' foi maior que do 'b'.
console.log(a < b)
console.log(a == c) //(false) -> endereços de memória diferentes.
console.log(a != c)

//Comparações diretas de vetores dão resultados inconsistentes!
//Não é possíve comparar diretamente dois ou mais vetores!

console.log('-----------------------------------------')

//Objetos
console.log('Objetos:')
a = {marca: 'Fiat', modelo: '147', ano: 1979}
b = {marca: 'Chevrolet', modelo: 'Chevette', ano: 1982}
c = {marca: 'Fiat', modelo: '147', ano: 1979}
console.log(a > b) //false -> Não são comparáveis
console.log(a < b) //false -> Não são comparáveis
console.log(a == c)
console.log(a != c)
//Objetos também não podem ser diretamente comparados entre si.

//CONCLUSÃO: Apenas os seguintes tipos de dados são diretamente comparáveis entre si:
// - number
// - string
// - boolean




