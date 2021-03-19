let comps, divisoes, juncoes

//FUNÇÃO RECURSIVA 
function mergeSort(vetor, fnComp) { //mergeSort não faz troca, como é recursiva não pode zerar as let
    
    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            //if(vetEsq[pEsq] < vetDir[pDir]) {
                if(fnComp(vetDir[pDir], vetEsq[pEsq])) {   //Parâmetros invertidos
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
             comps++
        }
        // Descobrir de qual lado sobrou
        let sobra

        // Sobra à esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra à direita
        else sobra = vetDir.slice(pDir)

        // Retorna vetor de resultados + sobra
        return [...vetRes, ...sobra]
    }
    
    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1) {
        const meio = Math.floor(vetor.length / 2)
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive - a posição final NÃO entra)
        let vetEsq = vetor.slice(0, meio)
        // Caso o segundo parâmetro de slice() seja omitido, serão copiados os elementos
        // desde a posição informada até a posição final
        let vetDir = vetor.slice(meio)
        divisoes++ //Qts divisoes vetor

        //console.log({vetEsq, vetDir})

        // Chamadas recursivas à função
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp) //como é recursiva, chamar fnComp

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++ //estatísticas
        //console.log({vetFinal})
        
        return vetFinal
    }
    return vetor    // Vetor de 1 elemento, não modificado (CONDIÇÃO DE SAÍDA)
}

import {candidatos} from './includes/candidatos-2018.mjs'

let time
comps = 0, divisoes = 0, juncoes = 0 //ZERAR AS VARIAVEIS
//console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM)URNA_CANDIDATO)
//let candidatosOrd = mergeSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)


//Ordenação por dois niveis: primeiro por UE (SG_UE) e, dentro da UE, pelo nº do candidato (NR_CANDIDATO).
//Se um empatar, critério desempate.
let candidatosOrd = mergeSort(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE) {  //Empate de UR
        //Desempate pelo NR_CANDIDATO
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE    //A diferenciação se dá por UE (2ºnível).
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Dividi 1024 para converter de giga>kylo>mega
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatosOrd)
//candidatosOrd.map(obj => console.log(obj))
console.log({comps, divisoes, juncoes, memoria})