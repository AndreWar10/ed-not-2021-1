let trocas, pass, comps

function selectionSort(vetor, fnComp) {

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio){
        let menor = inicio
        //Esse loop vai até a última posição
        for(let j = inicio + 1; j < vetor.length; j++){
            //if(vetor[j] < vetor[menor]) menor = j
            //Na passagem para função de comparação, a ordem dos objetos  precisa ser invertida
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps ++
        }
        return menor

    } 
    //Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        pass++ // +1 passada
        let menor = encontrarMenor(i + 1)
        //if(vetor[menor] < vetor[i])
        //Parametros em ordem invertida para padronização.
        if (fnComp(vetor[i], vetor[menor])){
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas ++ //+1 troca
        }
        comps++ // Passei do if tenho mais uma comparação
    }    

}

//função de comparação retona true caso o objeto seja MAIOR que o segundo

import {candidatos} from './includes/candidatos-2018.mjs'

    //console.log('ANTES:', candidatos)
    console.time('Ordenando candidatos...')
    // Ordenando pelo nome de urna (NM)URNA_CANDIDATO)
    selectionSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
    console.timeEnd('Ordenando candidatos...')
    console.log('DEPOIS:', candidatos)
    console.log({trocas, pass, comps})