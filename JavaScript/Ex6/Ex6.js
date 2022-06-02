function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    function calculaIMC(peso, altura){
        return (peso / altura**2).toFixed(1);
    };

    function retornaResultado(imc){
        if(imc < 18.5){
            return 'Abaixo do peso';
        }else if(18.5 <= imc && imc <=24.9){
            return 'Peso normal';
        }else if(25 <= imc && imc <=29.9){
            return 'Sobrepeso';
        }else if(30 <= imc && imc <=34.9){
            return 'Obesidade grau 1';
        }else if(35 <= imc && imc <=39.9){
            return 'Obesidade grau 2';
        }else if(40 < imc){
            return 'Obesidade grau 3';
        }else{
            return 'Valores inválidos';
        }
    };
    
    function validaInput(peso, altura){
        if(isNaN(peso) && isNaN(altura)){
            return `<p class="resultado-errado">Peso e altura inválidos</p>`;
        }else if(isNaN(peso)){
            return `<p class="resultado-errado">Peso inválido</p>`;
        }else if(isNaN(altura)){
            return `<p class="resultado-errado">Altura inválida</p>`;
        }else{
            const imc = calculaIMC(peso, altura);
            return `<p class="resultado-sucesso">Seu IMC é ${imc}, e o resultado é ${retornaResultado(imc)}</p>`;
        }
    };

    function recebeEventoIMC(evento){
        evento.preventDefault();
        const inputPeso = form.querySelector('.peso');
        const inputAltura = form.querySelector('.altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        resultado.innerHTML = validaInput(peso, altura);
    };
    form.addEventListener('submit', recebeEventoIMC);
}

meuEscopo();