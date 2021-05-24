/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import {Deque} from './lib/Deque.mjs'

let deque = new Deque() //criação do deque

//frase a ser verificada
const text = 'ARARA'

//Empilhamento
for(let i = 0; i < text.length; i++) {
    deque.insertBack(text.charAt(i)) //inserindo caractere por caractere da frase no deque
}
console.log(deque.print())

let tRev = '' //armazenar a frase de maneira inversa, para identificar a presença de palíndromos
let color = '\u001b[34m',
reset = '\u001b[0m'


//Desempilhamento
while(! deque.empty)  {             //enquanto o deque não estiver vazio,
    tRev += deque.removeBack()      //retira caracter por caracter e insere no textoRev, na ordem inversa,
}                                   //caracteristica de palíndromos
//deque que contem a palavra/frase invertida:
console.log(color + tRev + reset)