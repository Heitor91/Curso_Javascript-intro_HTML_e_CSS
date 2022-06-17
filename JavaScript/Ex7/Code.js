function diaSemana(diaSemana){
    switch (diaSemana){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        }
}

function meuEscopo (){
    const data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth() > 9 ? data.getMonth()+1: `0${data.getMonth()+1}`;
    const dia = data.getDate() > 9 ? data.getDate(): `0${data.getDate()}`
    const hora = data.getHours() > 9 ? data.getHours(): `0${data.getHours()}`
    const minuto = data.getMinutes() > 9 ? data.getMinutes(): `0${data.getMinutes()}`
    const segundo = data.getSeconds() > 9 ? data.getSeconds(): `0${data.getSeconds()}`
    const dataSemana = data.getDay();
    let textoDia = diaSemana(dataSemana);
    const texto = document.querySelector('.titulo');
    texto.innerHTML = `${textoDia}<br>${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

meuEscopo();