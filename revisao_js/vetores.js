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

//Inserindo no final do vetor
frutas.push('amora') //Pode inserir mais de um elemento ao mesmo tempo
// EXEMPLO => 
// frutas.push('amora', 'jaca')
console.log(frutas)

//Inserir no início do vetor
frutas.unshift('jabuticaba') // Também pode inserir mais de um elemento ao mesmo tempo
//EXEMPLO => frutas.unshift('jaboticaba', 'mexerica')
console.log(frutas)

//Inserção no meio do vetor
//Paramêtros do splice() para inserção
//1º -> posição para inserção
//2º -> nº de elementos a serem excluídos (para inserção, usa-se 0)
//3º em diante -> elemento(s) será(ão) inserido(s)
frutas.splice(2, 0, 'pessêgo' ) // Inserindo na TERCEIRA posição , Sem apagar ninguém , inserindo pessego
//Também funciona para inserir vários elementos ao mesmo tempo, p. ex.:
//frutas.splice(2, 0 'pêssego', 'jaca', 'nectarina')
console.log(frutas)

//Usando splice() para SUBSTITUIÇÃO:
//Parâmetros:
//1º -> Posição para substituição
//2º -> Quantidade de elementos que serão excluídos (para substituição, 1)
//3º -> O elemento incluído no lugar
frutas.splice(4, 1, 'ameixa')
console.log(frutas)

//Inserção múltipla com splice()
frutas.splice(1, 0, 'nectarina', 'jaca') //Entre jabuticaba e laranja
console.table(frutas)

/********************************************************
 * PERCURSOS DE VETOR
*/

console.log('----------------------------------------------------------')

// 1) Percurso com for tradicional:
// a) A contagem começa em zero (0 - primeiro elemento)
// b) Ocorre enquanto o contador for MENOR que o número de elementos do vetor
// c) length termina com TH (língua mole)
// d) É o método mais flexível pois, se necessário, é possível fazer um percurso
// parcial (começar um elemento que não é o primeiro e terminar antes do final)
for(let i =0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log('-----------------------------------------------------------------')

// 2) for tradicional, em ordem inversa
// a) O contador inicia-se em length - 1 
// b) A condição é contador MAIOR ou IGUAL a zero (0 - primeiro elemento)
for(let i = frutas.length - 1; i >= 0; i--) {
    console.log(i, frutas[i])
}

console.log('----------------------------------------------------------------')

// 3) Percurso com for..of
// a) Sempre percorre o VETOR INTEIRO, na ordem natural, sem necessidade de uma variável contadora
// Variáveis
// f -> variável que receberá cada elemento do vetor (pode ser qualquer nome válido de variável)
//frutas -> é o vetor a ser percorrido

//let x = 0
for(let f of frutas) {
    console.log(f)    
    //console.log(x, f)
    //x++
}

console.log('----------------------------------------------------------------')

// 4) Percurso com forEach()
// forEach() recebe como parâmetro a função que recebe como parâmetro cada elemento do vetor
// O nome do parâmetro da função pode ser qualquer nome válido de identificador

frutas.forEach(function(elemento) { //elemento pode ser qqr nome (mesmo resultado do for..of)
    console.log(elemento)
})

console.log('----------------------------------------------------------------')

// O mesmo forEach() usando a arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))

