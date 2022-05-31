/*
alert('Com a nossa mensagem'); // Box alert somente texto

window.confirm('Deseja fazer isso?'); // Box alert com retorno bool

window.prompt("Insira o nome"); //Box com entrada de dados

let confirma = confirm("Deseja continuar?") // retorna para uma variável
*/

let num1 = prompt('Insira um valor:')
let num2 = prompt('Insira outro valor:')
let resultado = Number(num1) + Number(num2)
alert(`RESULTADO: ${resultado}`)