/*

ANDRÉ GUERRA SANTOS

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao 
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;;
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

/*
    1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push(). 
*/

let estadosNe = []

//Sergipe
let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)
//console.log(estadosNe)

//Alagoas
let estado2 = {
   nome: 'Alagoas',
   sigla: 'AL',
   area: 27848.14,
   populacao: 3322820
}

estadosNe.push(estado2)

//Rio Grande do Norte
let estado3 = {
   nome:'Rio Grande do Norte',
   sigla:'RN',
   area: 52811.05 ,
   populacao: 3479010
}
estadosNe.push(estado3)

//Paraíba
let estado4 = {
   nome: 'Paraíba',
   sigla: 'PB',
   area: 56469.78,
   populacao: 3996496
}

estadosNe.push(estado4)

//Pernambuco
let estado5 = { 
   nome: 'Pernambuco',
   sigla: 'PE',
   area: 98148.32,
   populacao: 9496294
}

estadosNe.push(estado5)

//Ceará
let estado6 = { 
   nome: 'Ceará',
   sigla: 'CE',
   area: 148920.47,
   populacao: 9075649
}

estadosNe.push(estado6)

//Piauí
let estado7 = { 
   nome: 'Piauí',
   sigla: 'PI',
   area: 251577.74,
   populacao: 3264531
}

estadosNe.push(estado7)

//Maranhão
let estado8 = { 
   nome: 'Maranhão',
   sigla: 'MA',
   area: 331937.45,
   populacao: 7035055
}

estadosNe.push(estado8)

//Bahia
let estado9 = { 

   nome: 'Bahia',
   sigla: 'BA',
   area: 564733.18,
   populacao: 14812617
}

estadosNe.push(estado9)

//vetor estadosNe agora possui 9 objetos{}.

//console.log(estadosNe)

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/

//Arrow function para calcular a densidade demografica, dividindo o 2 parametro pelo 1.
const densidade = (a, p) => parseFloat(p / a) 

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
console.log()
console.log('3)')

for(let i =0; i < estadosNe.length; i++) {
    x = 0
    x = densidade(estadosNe[i].area, estadosNe[i].populacao)
    estadosNe[i]['densidade demográfica'] = x
    delete estadosNe[i].sigla
    console.log(i, estadosNe[i])
}

/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/
console.log()
console.log('4)')
//console.log(estadosNe)

//arrow function que recebe objeto {} 
const objeto = (x) => { for(let atrib in x) {  //função executa o for..in com o parametro(objeto) que será denominado no for..of
    console.log(atrib + ' -> ' + x[atrib]) }   //listar propriedades e valores de um objeto 
}

 /*5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo. 
*/

//A cada objeto do vetor, a função objeto() será invocada. Listando as propriedades do objeto.
for(let x of estadosNe) { 
    objeto(x)
}

  /* 6)
      a) Declare um vetor vazio.
*/

let vet = []

  /*    b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/