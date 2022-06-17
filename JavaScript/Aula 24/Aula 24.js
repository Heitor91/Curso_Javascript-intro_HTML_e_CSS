const data = new Date();
const diaSemana = data.getDay();
let diaSemanaEscrito;

switch (diaSemana){
    case 0:
        console.log('Domingo');
    case 1:
        console.log('Segunda-feira');
    case 2:
        console.log('Terça-feira');
    case 3:
        console.log('Quarta-feira');
    case 4:
        console.log('Quinta-feira');
    case 5:
        console.log('Sexta-feira');
    case 6:
        console.log('Sábado');
}
