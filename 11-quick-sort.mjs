/*
QUICK SORT

Escolhe um dos elementos do vetor para ser pivô (na nossa impleentação, o ultimo elemento) e, na primeira passada
divide o vetor, a partir da posição final do vetor, em um subvetor á esquerda contendo apenas valores menores que
o pivô e outro subvetor a direita, que contém apenas valores maiores que o pivô

Em seguida, recursivamente, repete o processo em cada um dos subvetores até que todo vetor esteja ordenado.
*/

let trocas, comps, pass

function quickSort(vetor, ini = 0, fim = vetor.length - 1){
    if(fim > ini){
        pass++
    const pivot = fim
    let div = ini -1
    //Loop for vai até a penultima posição
    for(let i = ini; i < fim; i++){
        if(vetor[i] < vetor[pivot]) {
            comps++
            div++
            if(i != div){
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                trocas++
            }
        }
    }
    div++
    //Colocamos o pivo no seu lugar definitivo
    if(vetor[pivot] < vetor[div]){
        [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]] //troca de lugares 
        trocas++
    }
    comps++
    //Ordena o subvetor a esquerda do pivo
    quickSort(vetor, ini, div - 1)

    //Ordenar o subvetor a direita do pivo
    quickSort(vetor, div + 1, fim)
}
}


import { nomes } from './includes/100-mil-nomes.mjs'
trocas = 0, comps = 0, pass=0

console.time('Ordenando nomes...')
quickSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Dividi 1024 para converter de giga>kylo>mega
console.log('Depois: ', nomes)
console.log({trocas, pass, comps, memoria})

