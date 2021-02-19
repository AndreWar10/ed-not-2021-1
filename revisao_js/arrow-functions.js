// Função que eleva um número ao quadrado
// Se precisar disso em uma situação real, use Math.pow() ou o operador **
function quadrado(n) {
    return n * n
}
console.log(quadrado(9))

// Características da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma linha de código, com return
// 3) A CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow function
// a) Não precisa de parênteses envolvendo o parâmetro
// b) A palavra funtion é substituída pelo sinal =>, DEPOIS do parâmetro
// c) Não são necessárias as {} nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))

//Função com mais de um parâmetro
function potencia(b, e){ //b = base, e = expoente
    return b ** e
}
console.log(potencia(2,8))

//Função equivalente no formato arrow function

//Quando temos mais de um parâmetro, os parênteses em volta 
//dos argumentos voltam a ser obrigatórios

let potencia2 = (b, e) => b ** e
console.log(potencia2(2, 8))

//Função sem parâmetro
function megasena() {
    //Essa função retorna um numero aleatório entre 1 e 60
    //Math.random() -> Retorna um numero aleatório entre 0 (inclusive) e 1 (exclusive)
    // * 60 -> ajusta a faixa de valores entre 0 e 59
    // Math.floor -> Arredondar para menor inteiro (tirar as casas decimais)
    return Math.floor(Math.random() * 60 + 1)
}
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

//Quando nao tem arumentos, na arrow function é necessário deixar um par
//de parênteses vazios para marcar seu lugar
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())

//Função com mais de uma linha no corpo
function somaVet(vet){
    let soma = 0 
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 42, -11, 20, 9, 16]))

//Quando a função tem mais de uma linha de código, na arrow function equivalente
//retornam as chaves e também a palavra return, caso ela retorne valor
const somaVet2 = vet => {
    let soma = 0 
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 42, -11, 20, 9, 16]))

// CONCLUSÃO: Arrow functions foram concebidas para facilitar a escrita de 
//funções em apenas uma linha, embora também possam ser usadas para funções
//de múltiplas linhas.

