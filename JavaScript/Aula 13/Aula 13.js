let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(num1.toFixed(2));
console.log(Number.isInteger(num2));
console.log(Number.isNaN(num1 * 'dfg'));

let num3 = 0.7;
let num4 = 0.1;
num3 += num4
num3 += num4
num3 += num4
num3 = Number(num3.toFixed(2))
console.log(num3)
console.log(Number.isInteger(num3))

num3 = 0.7;
num4 = 0.1;
num3 = ((num4 * 10) + (num3 * 10))/10
num3 = ((num4 * 10) + (num3 * 10))/10
num3 = ((num4 * 10) + (num3 * 10))/10
console.log(num3)
console.log(Number.isInteger(num3))