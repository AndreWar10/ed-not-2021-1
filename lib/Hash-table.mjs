/*
ESTRUTURA DE DADOS TABELA DE DISPERSÃO (OU TABELA DE ESPALHAMENTO)
- Esta estrutura mantém um VETOR de outras estruturas (no caso que vamos
exemplificar, serão listas duplamente encadeadas)
- Digamos que teremos um vetor de 10 listas duplamente encadeadas. Ao inserir
um valor na tabela de dispersão, devemos determinar em qual das 10 listas
o valor será inserido
- A tarefa de determinar em qual das listas o valor será inserido cabe a uma
função especial, chamada FUNÇÃO DE ESPALHAMENTO, FUNÇÃO DE DISPERSÃO ou
FUNÇÃO DE HASH.
- A função de espalhamento será utilizada também na busca e na remoção de valores.
*/

import { DoublyLinkedList } from './DoublyLinkedList.mjs'

export class HashTable {

    #table          //Vetor de estruturas
    #hashFunction   //Função de espalhamento

    constructor(count, hashFunction) {

        //Criando as estruturas finais (DLL) e colocando-as no vetor
        this.#table = []
        for(let i = 0; i < count; i++) this.#table.push(new DoublyLinkedList())

        //Armazenando a função de espalhamento passada para uso posterior
        this.#hashFunction = hashFunction
    }

    insert(val) {
        //Chama a função de espalhamento para encontrar a posição
        //da lista apropriada dentro da tabela
        const pos = this.#hashFunction(val)

        //Faz a inserção na lista da posição encontrada
        this.#table[pos].insertTail(val) //insertTail para inserir no final da lista
    }

    remove(val){
        //Determina em QUAL lista PODE estar o valor a ser removido
        const listPos = this.#hashFunction(val)
        //Encontra a posição do valor dentro da lista
        const valPos = this.#table[listPos].indexOf(val) 
        //Sabendo a posição do valor, podemos fazer a remoção
        return this.#table[listPos].remove(valPos)
    }

    //Retorna verdadeiro se o valor ja existir na tabela ou false caso contrário
    includes(val){
        const listPos = this.#hashFunction(val)
        return this.#table[listPos].indexOf(val) >= 0
    }

    get count() {
        let sum = 0
        for(let list of this.#table) sum += list.count
        return sum
    }

    get empty() {
        return this.count === 0
    }

    print() {
        let output = ''
        for(let i = 0; i < this.#table.length; i++) {
            output += `[${i}] ${this.#table[i].print()}\n`
        }
        output += '-----------------------------------------------'
        return output
    }

}

function qualLista(val){
    //retorna a posição de acordo com o valor
    if (typeof val === 'number')return val % 10

    else{
        //Garante que o valor será interpretado como string
        val = val.toString()
        let soma = 0
        for(let i = 0; i < val.length; i++){
            //Soma os valores numericos correspondentes a cada caractere
            soma += val.charCodeAt(i)
        }
        //console.log({val, soma})
        return soma % 10
    }
}

const tabela = new HashTable(10, qualLista)
console.log(tabela.print())

tabela.insert(14)
tabela.insert(36)
tabela.insert(23)
tabela.insert(43)
tabela.insert(5)
tabela.insert('Arroz')
tabela.insert('Feijão')
tabela.insert('Leite')
tabela.insert('Ovos')
tabela.insert('Macarrão')
tabela.insert('Farinha')
console.log(tabela.print())

let removed
removed = tabela.remove('Ovos')
console.log({removed})
removed = tabela.remove(36)
console.log({removed})
removed = tabela.remove(48)
console.log({removed})
console.log(tabela.print())

const includesFarinha = tabela.includes('Farinha')
const includes14 = tabela.includes(14)
const includesAzeite = tabela.includes('Azeite')
console.log({includesFarinha, includes14, includesAzeite})

console.log('Total de itens da tabela:', tabela.count , "itens")