//Operadores aritméticos
let texto = 'Resultado: '
let num1 = 20;
let num2 = 5;
let contador = 0;
let passo = 2
//Operadores básicos
console.log(texto + num1 + num2); //Tranforma tudo em string: concatenação
console.log(num1 + num2); // Adição
console.log(num1 - num2); // Subtrai
console.log(num1 * num2); // Multiplica
console.log(num1 / num2); // Divide
console.log(num1 ** num2); // Potência
console.log(num1 % num2); // Resto da divisão
// contadores
console.log(contador++); //pós execução
console.log(contador);
console.log(++contador); //pré execução
console.log(contador--); //pós execução
console.log(contador);
console.log(--contador); //pré execução
// Operadores de atribuição += , -=, *=, /=, **=, %=
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
contador += passo;
console.log(contador);
let bits = 2;
let arquitetura = 32;
bits **= arquitetura;
console.log(bits);
num1 = '5';
num2 = 10;
console.log(num1*num2);
// Conversões
num1 = '5.6468';
console.log(typeof num1);
    
console.log(parseInt(num1));
console.log(typeof parseInt(num1));

console.log(parseFloat(num1));
console.log(typeof parseFloat(num1));

console.log(Number(num1));
console.log(typeof Number(num1));
