let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) { //Condicao de saída das chamadas recursivas
        pass++
        const pivot = fim
        let div = ini - 1
        // Loop for vai até a PENÚLTIMA posição
        for(let i = ini; i < fim; i++) {
           // if(vetor[i] < vetor[pivot]) {
               if(fnComp(vetor[pivot], vetor[i])) { // parametros invertido
                comps++ 
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        }
        div++
        // Colocamos o pivô no seu lugar definitivo
         //if(vetor[pivot] < vetor[div]) {
        if(fnComp(vetor[div], vetor[pivot])) { // parametros invertido
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        // Ordena o subvetor à esquerda do pivô
        quickSort(vetor, fnComp, ini, div - 1)

        // Ordena o subvetor à direita do pivô
        quickSort(vetor, fnComp, div + 1, fim)
    }
}


import {candidatos} from './includes/candidatos-2018.mjs'

comps = 0, pass = 0, trocas = 0 //ZERAR AS VARIAVEIS
console.time('Ordenando candidatos...')
//quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

//Ordenação por SG_UE, depois por DS_CARGO e, finalmente, por NR_CANDIDATO
//const candidatosSP = candidatos.filter(obj => obj.SG_UE === 'SP')
//quickSort(candidatosSP, (a,b) => { //não esquecer de exibir candidatosSP no console.log
quickSort(candidatos, (a,b) => {
    if(a.SG_UE === b.SG_UE) {   //EMPATE NA UF
        //EMPATE NO CARGO, DESEMPATE NO NUMERO DO CANDIDATO
        if(a.DS_CARGO === b.DS_CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO
        //UF igual, cargos diferentes, deiferencia por cargo
        else return a.DS_CARGO > b.DS_CARGO    
    }   
    //UFs diferentes, diferencia por UF
    else return a.SG_UE > b.SG_UE
})
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Dividi 1024 para converter de giga>kylo>mega
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
//candidatosOrd.map(obj => console.log(obj))
console.log({trocas, pass, comps, memoria})
