import {Deque} from './lib/Deque.mjs'
import {Deque as Deque2} from './lib/Deque.mjs' //Renomeando a classe, para não ter conflito de nome repetido

let deque = new Deque()
//let deque = new Deque2()

deque.insertBack('Margarida')
deque.insertBack('Pateta')
deque.insertBack('Gastão')
deque.insertBack('Donald')

console.log(deque.print())

//"fura fila"
deque.insertFront('Tio patinhas')
console.log(deque.print())

deque.insertFront('Minnie')
console.log(deque.print())

let primeiro = deque.peekFront()
let ultimo = deque.peekBack()
console.log({primeiro, ultimo})
console.log(deque.print())

let atendido = deque.removeFront()
console.log({atendido})
console.log(deque.print())

let desistente = deque.removeBack()
console.log({desistente})
console.log(deque.print())

deque.insertBack('Mickey')
console.log(deque.print())