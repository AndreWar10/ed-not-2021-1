
// 5 e 10 (6+7+8+9)

let num1 = 5;
let num2 = 10;
let maior
let menor
//maior
if(num1 > num2){
    maior = num1
    menor = num2
}
else {
    maior = num2
    menor = num1
}    

var resultado = 0;
console.log({menor}, {maior})
for (let i = menor; i <= maior; i++) {
    console.log({i})
    console.log({resultado}, '+', i)
    resultado += i;
      
}
console.log({resultado});



