const data = new Date(); //a, m, d, H, M, S, MS
const data2 = new Date(2019, 3, 20, 15, 14, 27, 500);
const data3 = new Date('2019-3-20 20:20:59');
console.log(data.toString());
console.log(data2.toString());
console.log(data3.toString());
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('Dia da semana', data.getDay())