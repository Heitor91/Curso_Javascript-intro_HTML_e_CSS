function meuEscopo (){
    const relogio = document.querySelector('.timer');
    const start = document.querySelector('.start');
    const pause = document.querySelector('.pause');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function segundosTimer(segundos){
        const data = new Date(segundos*1000)
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'})
    }
    function startTimer(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = segundosTimer(segundos);
        }, 1000);
    }
    function stopTimer(){
        clearInterval(timer);
    }


    start.addEventListener('click', function(event){
        startTimer();
        relogio.classList.add('run');
        relogio.classList.remove('stopped');
    });

    pause.addEventListener('click', function(event){
        stopTimer()
        relogio.classList.remove('run');
        relogio.classList.add('stopped');
    });

    zerar.addEventListener('click', function(event){
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('run');
        relogio.classList.remove('stopped');
    });
}

meuEscopo();