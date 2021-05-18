//FUNÇÃO GENÉRICA

/*function buscaSequencial(vetor, valorBusca, fnComp) { // fnCopm = FUNÇÃO DE COMPARAÇÃO
    for(let i = 0; i < vetor.length; i++) {  
        //Invés de comparação dentro da função de busca, "terceirizamos" essa comparaçãp chamando uma função externa
        if(fnComp(vetor[i], valorBusca)) return i 
    }
    return - 1  //Valor de busca não encontrado.
}*/

function buscaSequencial(vetor, fnComp) { // fnCopm = FUNÇÃO DE COMPARAÇÃO
    for(let i = 0; i < vetor.length; i++) {  
        //Invés de comparação dentro da função de busca, "terceirizamos" essa comparaçãp chamando uma função externa
        if(fnComp(vetor[i])) return i 
    }
    return - 1  //Valor de busca não encontrado.
}

/*function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca}
*/

/*
function buscaSequencial(vetor, valorBusca) {
    for(let i = 0; i < vetor.length; i++) {  
       if(vetor[i].first_name === valorBusca) return i 
    }
    return - 1  //Valor de busca não encontrado.
}
*/
const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'


//Para chegar no ZOZIMO foram necessarias 100682 comparações ... +1 do numero de elementos SEMPRE
console.time('Buscando ZOZIMO')
console.log(buscaSequencial(objNomes, obj => obj.first_name === 'ZOZIMO')) //100681
console.timeEnd('Buscando ZOZIMO')
//console.log(buscaSequencial(objNomes, 'VINICIUS', comparaNome))
//console.log(buscaSequencial(objNomes, 'MARIA', comparaGrupo))

//console.log(buscaSequencial(objNomes, 'VINICIUS', (obj, busca) => obj.first_name === busca))
//console.log(buscaSequencial(objNomes, 'MARIA', (obj, busca) => obj.group_name_name === busca))

console.log(buscaSequencial(objNomes, obj => obj.first_name === 'VINICIUS')) // no caso da function da linha 9

// Primeiro nome da lista que tem mais de 1000 pessoas registradas
let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)
console.log(objNomes[pos]) // Abadia

//Primeiro nome masculino da lista com mais de 10000 registrados 
pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'M')
console.log(objNomes[pos]) // Abel

