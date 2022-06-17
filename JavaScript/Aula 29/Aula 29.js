// let i = 0;

// while(i <= 10){ //a quebra ocorre no inicio
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// }while(i<=10);//a quebra ocorre no final

let min = 0;
let max = 100;
let tentativa = 0;
let numero = 0;
const registroGeral = [];


function random(max){
    return Math.round(Math.random() * max);
}


while(max > 0){
    for(let i = 0; i < 100 ; i++){
        while(numero !== Math.round(max/2)){
            numero = random(max);
            tentativa++;
        }
        numero = 0;
    }
    registroGeral.push({max, min, Attempt: ((100/tentativa)*100).toFixed(2)});
    tentativa = 0;
    max = Math.floor(max/2);
}
console.log(registroGeral)
