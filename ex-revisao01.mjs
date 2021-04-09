/*
    1. Identifique o algoritmo abaixo. OK
    2. Comente o que faz cada uma das linhas. OK
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/

const a = (vetor, fnComp) => {  //Declarando a variável "a" e atribuindo a ela a o valor "b"
    const c = (d, inicio) => { //Declarando a variável "c", e atribuindo a ele os parâmetros (d, e) 
        let menor = inicio //Declarando a variavel "f" e atribuindo o valor "e", que está definido no parametro  
        for(let g = inicio + 1; g < d.length; g++){ // For para 
            //if(vetor[g] < vetor[menor]) menor = g
            if(fnComp(d[menor], d[g])) menor = g
        }
        return menor
    }

    //Percurso do vetor até a PENÚLTIMA posição    
    for(let h = 0; h < vetor.length - 1; h++) {
        let i = c(vetor, h + 1)
        //if(vetor[h] > vetor[menoR]) [vetor[h], vetor[menoR]] = [vetor[menoR], vetor[h]]
        if (fnComp(vetor[h], vetor[i])){
            [ vetor[i], vetor[h] ] = [ vetor[h], vetor[i] ]
        }
    }
}

//Importando o objeto candidatos 
import {candidatos} from './includes/candidatos-2018.mjs'

a(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE){
         return (obj1.NR_CANDIDATO > obj2.NR_CANDIDATO) 
    }
     else return obj1.SG_UE > obj2.SG_UE
})
console.log({candidatos})

//---------------------------------------------------------------------------------------------------------------------------
//ORIGINAL

/*
const a = b => {
    const c = (d, e) => {
        let f = e
        for(let g = e + 1; g < d.length; g++) if(d[g] < d[f]) f = g
        return f
    }
    for(let h = 0; h < b.length - 1; h++) {
        let i = c(b, h + 1)
        if(b[h] > b[i]) [b[h], b[i]] = [b[i], b[h]]
    }
}
*/

//------------------------------------------------------------------------------------------------------------------------------


/*
function Select(vetor, fnComp)  {  //Declarando a variável "a" e atribuindo a ela a o valor "b"
    function menor(vetor, inicio)  { //Declarando a variável "c", e atribuindo a ele os parâmetros (d, e) 
        let menor = inicio //Declarando a variavel "f" e atribuindo o valor "e", que está definido no parametro  
        for(let g = inicio + 1; g < vetor.length; g++){ // For para 
            //if(vetor[g] < vetor[menor]) menor = g
            if(fnComp(vetor[menor], vetor[g])) menor = g
        }
        return menor
    }

    for(let h = 0; h < vetor.length - 1; h++) {
        let menoR = menor(vetor, h + 1)
        //if(vetor[h] > vetor[menoR]) [vetor[h], vetor[menoR]] = [vetor[menoR], vetor[h]]
        if (fnComp(vetor[h], vetor[menoR])){
            [ vetor[menoR], vetor[h] ] = [ vetor[h], vetor[menoR] ]
        }
    }
}

import {candidatos} from './includes/candidatos-2018.mjs'

Select(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE){
         return (obj1.NR_CANDIDATO > obj2.NR_CANDIDATO) 
    }
     else return obj1.SG_UE > obj2.SG_UE
})
console.log({candidatos})
*/
