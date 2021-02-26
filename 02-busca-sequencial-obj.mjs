function buscaSequencial(vetor, valorBusca, fnComp) {
    for(let i = 0; i < vetor.length; i++) {  
        //Invés de comparação dentro da função de busca, "terceirizamos" essa comparaçãp chamando uma função externa
        if(fnComp(vetor[i], valorBusca)) return i 
    }
    return - 1  //Valor de busca não encontrado.
}

/*function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca}
*/

const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, 'VINICIUS', comparaNome))