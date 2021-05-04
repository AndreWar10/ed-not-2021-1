import {Queue} from './lib/Queue.mjs'

let fila = new Queue()
console.log(fila.print())

fila.enqueue('Creusdete')
console.log(fila.print())

fila.enqueue('Jubinaldo')
console.log(fila.print())

fila.enqueue('Neurivânia')
console.log(fila.print())

//Não tira pessoa da fila. Só visualiza
let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

//Tirar pessoa da fila
let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

//Colocar pessoa na fila
fila.enqueue('Leniwander')
console.log(fila.print())

