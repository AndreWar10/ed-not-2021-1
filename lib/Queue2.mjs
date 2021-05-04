export class Queue {
    #data   //armazenamento
    #tail   //controlar final objeto
    #head   //controlar o inicio

    constructor() {
        this.#data = {}     //Objeto vazio (armazenamento)
        this.#head = 0      //Início da fila
        this.#tail = -1     //Final da fila     
        //console.log(this.#data, this.#head, this.#tail)   
    }

    enqueue(val){
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail) 
    }

    dequeue() {
        //Se a fila ja estiver vazia, retorna undefined para não afetar o posicionamento de #head
        if(this.empty) return undefined

        //salvar a posição inicial (head)
        let temp = this.#data[this.#head]  //Salva o elemento no inicio da fila
        delete this.#data[this.#head]      //Apaga o elemento no inicio da fila
        this.#head++                       //Chega o inicio da fila pra frente (açougue)
        //console.log(this.#data, this.#head, this.#tail) 
        return temp  
    }

    peek() {
        return this.#data[this.#head]
    }
    
    //semelhante a fila de açougue
    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}

/*
let fila = new Queue()

fila.enqueue('Leila')
fila.enqueue('Adalberto')
fila.enqueue('Cléber')
fila.enqueue('Paula')

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})

atendido = fila.dequeue()
console.log({atendido})

fila.enqueue('Yara')

fila.dequeue()
fila.dequeue()
fila.dequeue()

fila.enqueue('Ubiratan')
*/