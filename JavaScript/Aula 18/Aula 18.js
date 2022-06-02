//primitivos
let nome = 'Luiz'
console.log(nome);
nome[0] = 'R';
console.log(nome);
let a = 'A';
let b = a;
console.log(a, b);
a = 'B'
console.log(a, b);

//mutáveis

let listaA = [1, 2, 3];
let listaB = listaA;
console.log(listaA, listaB);
listaA.push(4)
console.log(listaA, listaB);