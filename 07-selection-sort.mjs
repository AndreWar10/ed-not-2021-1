/*
SELECTION SORT

Trata-se de uma otimização do bubble sort, diminuindo drasticamente o númenro de TROCAS
necessárias para fazer a ordenação.

Isola um dos valores do vetor e procura pelo menor valor entre os restantes, promovendo
a troca caso o primeiro valor seja maior que o segundo.
*/

let trocas, pass, comps

function selectionSort(vetor) {

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio){
        let menor = inicio
        //Esse loop vai até a última posição
        for(let j = inicio + 1; j < vetor.length; j++){
            if(vetor[j] < vetor[menor]) menor = j
            comps ++
        }
        return menor

    } 
    //Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        pass++ // +1 passada
        let menor = encontrarMenor(i + 1)
        if(vetor[menor] < vetor[i]){
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas ++ //+1 troca
        }
        comps++ // Passei do if tenho mais uma comparação
    }    

}

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1,]

/*
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
selectionSort(nums)
console.log(nums)
console.log({trocas, pass, comps})
*/

import { nomes } from './includes/100-mil-nomes.mjs'

console.time('Ordenando nomes...')
selectionSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Dividi 1024 para converter de giga>kylo>mega
console.log('Depois: ', nomes)
console.log({trocas, pass, comps, memoria})