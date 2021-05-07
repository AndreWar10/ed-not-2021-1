/*
- DEQUE => Double-Ended Queue (Fila de duas pontas).
- Deuque é uma lista linear de acesso restrito, que permite apenas operações de enfileiramento (insertFront/insertBack) e 
desenfileiramento (removeFront e removeBack), acontecendo em qualquer uma das extremidades da estrutura.
- Como consequencia, o deque NÃO SEGUE o princípio FIFO, (First in - First out).
- A principal aplicação dos deuqes são das situações em que filas precisam aceitar a inserção de itens prioritários e
a desistência do último item.
*/

export class Deque{
    #data

    constructor() {
        this.#data = []
    }

    insertFront(val) {
        this.#data.unshift(val)
    }

    //enqueue da fila
    insertBack(val) {
        this.#data.push(val)
    }

    get empty() {
        return this.#data.length === 0
    }

    //queue
    removeFront() {
        return this.#data.shift()
    }

    removeBack() {
        return this.#data.pop()
    }

    peekFront() {
        return this.#data[0]
    }

    peekBack() {
        return this.#data[this.#data.length -1]
    }

    print() {
        return JSON.stringify(this.#data)
    }

}
