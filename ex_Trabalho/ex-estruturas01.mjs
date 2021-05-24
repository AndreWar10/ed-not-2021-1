/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

/*
Para realizar a conversão de decimal para binário, realiza-se a divisão sucessiva por 2 (base do sistema binário). 
O resultado da conversão será dado pelo último quociente (MSB) e o agrupamento dos restos de divisão será o número
 binário. A leitura do resultado é feita do último quociente para o primeiro resto.
*/

//Utilizei a estrutura Stack, pois preciso apenas de operações de inserção (push) e de 
//retirada (pop), sendo uma lista linear e FIFO.
import { Stack } from './lib/Stack.mjs'

//Numero decimal que deseja converter para binário:
const decimal = 75
let numD = decimal
const binario = new Stack()
let rest //Armazenar o RESTO da divisão.

if (numD === 0) { //Caso numero seja 0, permanece igual em binário
    console.log(`${numD} em binário é igual a: 0`)
}   

else{
    while (numD > 0) { //dividir o decimal por 2 até se tornar <= 0.
        rest = numD % 2 
        numD = Math.floor(numD / 2) //Para converter dec em bin, precisaser numero inteiro.
        binario.push(rest)  //inserção do resto da divisão (futuro binário) na pilha.
    }
        //armazenar numero que será binário
        let numBinario = " ",
        //corzinha pra dar um charme pro fausto
        color = '\u001b[34m',
        reset = '\u001b[0m'

        //Os valores contidos na pilha na ordem inversa correspondem ao numero dec em binário.  
        while(! binario.empty) { //Enquanto minha pilha NÃO estiver vazia, continuar inserindo os valores na ordem inversa.
            numBinario += binario.pop()
        }
            console.log(`${decimal} em binário é igual a:${color}${numBinario}${reset}`) 
}




/*
OUTRA MANEIRA DE CONVERTER DECIMAL PARA BINÁRIO:
//1)
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
console.log(dec2bin(25))
*/



