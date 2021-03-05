let comps

//CONTAR O NUMERO DE COMPARAÇÕES COM LET "comps"
function buscaBinaria(vetor, fnComp) {
    comps = 0
    let ini = 0
    let fim = vetor.length -1
    while(fim >= ini){
        let meio = Math.floor((fim + ini) / 2) // Math.floor() => arredonda pra baixo
        switch(fnComp(vetor[meio])) {
            case 0: //Achou
                comps++
                return meio
                //break (não é necessário pois no return acima já sai da função)
            case 1: //Valor de busca é MAIOR
                comps += 2
                ini = meio + 1
                break
            default: //Valor de busca MENOR
                comps += 2
                fim = meio -1
        }

        /*if(vetor[meio] === valorBusca){
            comps++
            return meio //Achou
        } 
        else if(valorBusca > vetor[meio]){
            comps +=2
            ini = meio +1
        }
        else{ 
            comps += 2
            fim = meio - 1 
            }*/
        }
    return -1 //Não existe
}

//A função de comparação para a busca binária precisa retornar um de tres valores
// retorno 0: o valor de busca e o valor do objeto são IGUAIS
// retorno-1: o valor de busca é MENOR que o valor do objeto 
// retorno 1: o valor de busca é MAIOR que o valor do objeto

/*
//COMPARAÇÃO PARA BUSCA BINÁRIA
const comparaNome = obj => {
    const busca = 'ANDRE'
    if(busca === obj.first_name) return 0 //comparando a letra em relação a tabelas ASCII
    else if(busca < obj.first_name) return -1
    else return 1
}
*/

import { objNomes } from './includes/vetor-obj-nomes.mjs'
//NÃO GENÉRICA ->>>>>> 3 saidas

const comparaNome = (obj, busca = 'FAUSTO') => {
    if(busca === obj.first_name) return 0 //comparando a letra em relação a tabelas ASCII
    else if(busca < obj.first_name) return -1
    else return 1
}

//NÃO DA PRA BUSCAR OUTROS ATRIB, APENAS O PRIMEIRO, ESTÁ NA ORDEM FISRT NAME
console.time('Buscando AARAO')
console.log(buscaBinaria(objNomes,(obj, busca = 'AARAO')=> {
    if(busca === obj.first_name) return 0 //comparando a letra em relação a tabelas ASCII
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps} )  //>=0 (retornar se existe ou não a informação)
console.timeEnd('Buscando AARAO')

console.time('Buscando LAMARA')
console.log(buscaBinaria(objNomes,(obj, busca = 'LAMARA')=> {
    if(busca === obj.first_name) return 0 //comparando a letra em relação a tabelas ASCII
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps} )  //>=0 (retornar se existe ou não a informação)
console.timeEnd('Buscando LAMARA')

console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes,(obj, busca = 'ZOZIMO')=> {
    if(busca === obj.first_name) return 0 //comparando a letra em relação a tabelas ASCII
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps} )  //>=0 (retornar se existe ou não a informação)
console.timeEnd('Buscando ZOZIMO')

console.time('Buscando NADIR')
console.log(buscaBinaria(objNomes,(obj, busca = 'NADIR')=> {
    if(busca === obj.first_name) return 0 //comparando a letra em relação a tabelas ASCII
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps} )  //>=0 (retornar se existe ou não a informação)
console.timeEnd('Buscando NADIR')

console.time('Buscando ORKUTILSON')
console.log(buscaBinaria(objNomes,(obj, busca = 'ORKUTILSON')=> {
    if(busca === obj.first_name) return 0 //comparando a letra em relação a tabelas ASCII
    else if(busca < obj.first_name) return -1
    else return 1
}), {comps} )  //>=0 (retornar se existe ou não a informação)
console.timeEnd('Buscando ORKUTILSON')

