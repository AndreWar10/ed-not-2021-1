/*
ESTRUTURA DE DADOS LISTA ENCADEADA
- A lista encadeada é uma estrutura de dados formada por unidades
de informação chamadas nodos ou nós.
- Cada nodo da lista encadeada tem duas partes: uma, que armazena a
informação e outra que guarda o endereço do próximo nodo da sequência
- A qualquer momento, temos um conhecimento apenas limitado de onde
se encontram todos os nodos da lista. Sabemos apenas onde está o
primeiro e o último nodo da sequência. Os nodos intermediários precisam
ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node {
    constructor(val) {      //sem # porque vou precisar acessar diretamente, serão publicos, usados em outra classe também
        this.data = val     //Armazenamento do valor
        this.next = null    //Ponteiro para o próximo nodo
    }
}

export class LinkedList {

    #head   //Nodo inicial da lista
    #tail   //Nodo final da lista
    #count  //Qtde de elemento de nodos da lista

    constructor() {
        this.#head = null   //Não tem nada no inicio
        this.#tail = null   //Não tem nada no fim
        this.#count = 0
        //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    get empty() {   //lista vazia
        return this.#count === 0
    }

    //Inserção em uma posição arbitrária
    insert(pos, val){

        //Cria nodo para abrigar o valor e o endereço do próximo nodo
        let inserted = new Node(val)

        //1º caso: inserção em lista vazia
        if(this.empty) {
            this.#head = inserted
            this.#tail = inserted
        }

        //2º caso: inserção no inicio da lista
        else if(pos === 0) {
            //O sucessor do nodo inserido é o atual head
            inserted.next = this.#head
            //O novo head passa a ser o nodo inserido
            this.#head = inserted
        }

        //3º caso: inserção no final da lista
        else if(pos >= this.#count) {
            //O sucessor do tail autal passa a ser o nodo inserido
            this.#tail.next = inserted
            //O nodo inserido passa a ser o novo tail
            this.#tail = inserted
        }

            //4º caso: posição intermediaria
            else {
               //Nodo ANTERIOR a posição de inserção
               let before = this.#head
               //Percorre a lista ate encontrar o nodo da posição ANTERIOR e de inserção
               for(let i = 0; i < pos -1; i++) before = before.next
               //Nodo que ira ficar DEPOIS do inserido
               let after = before.next
               //O proximo do nodo inserido passa a ser o nodo after
               inserted.next = after
               //O proximo do nodo before passa a ser o nodo inserido
               before.next = inserted
            }

        this.#count++
        //console.log({head: this.#head, tail: this.#tail, count: this.#count}
    }

    insertHead(val) {
        this.insert(0, val)
    }

    insertTail(val) {
        this.insert(this.#count, val)
    }

    remove(pos) {
        //1º caso: A lista está vazia ou a posição informada é menor que zero ou maior que o count -1
        if(this.empty || pos < 0 || pos > this.#count - 1) return undefined

        let removed 

        //2º caso: remoção do inicio da lista
        if(pos === 0) {
            removed = this.#head
            this.#head = this.#head.next // ou: this.#head = removed.next

            // Atualizando o tail em caso de remoção do ultimo nodo
            //para saber se a lista tem 1 nodo só? - se o count for 1:
            if(this.#count === 1) this.#tail = this.#head.next
        }

        //3º Caso: remoção de posição intermediária
        //Ultima posição da lista? = count -1
        else {
            let before = this.#head
            for(let i = 0; i < pos - 1; i++) before = before.next
            removed = before.next
            let after = removed.next
            before.next = after

            //Atualizando o #tail no caso de remoção do último nodo
            if(pos === this.#count - 1) this.#tail = before
        }

        this.#count-- 

        //data é o que o usuario mandou guardar
        //removed é tipo node
        return removed.data


    }

    removeHead(){
        return this.remove(0)
    }

    removeTail() {
        return this.remove(this.#count - 1)    
    }

    //Retorna a posição de um valor dentro da lista, ou -1 caso não exista
    indexOf(val){

        //1º caso: lista vazia
        if(this.empty) return -1

        //2º caso: o valor está no início da lista
        if(this.#head.data === val) return 0

        //3º caso: demais posições
        let search = this.#head
        for(let i = 0; i < this.#count; i++){
            if(search.data === val) return i    //Encontrou, retorna a posição
            search = search.next
        }

        //Acabou o loop sem retornar, é porque não existe
        return -1 
    }

    peek(pos){

        //Lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos > this.#count -1) return undefined

        let node = this.#head
        for(let i = 0; i < pos; i++) node = node.next

        return node.data
    }

    peekHead() {
        return this.peek(0)
    }

    peekTail() {
        return this.peek(this.#count - 1)
    }


    print() {
        let output = '('
        let node = this.#head
        for(let i = 0; i < this.#count; i++){
            output += `[${i}]: ${node.data}`
            if(node.text) output += ' -> '
            node = node.next
        }
        return output + `) count: ${this.#count}`
    }

}

