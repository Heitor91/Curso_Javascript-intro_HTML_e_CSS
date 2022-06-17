const paragrafos = document.querySelector('.paragrafos');
const pHtml = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const background = estilosBody.backgroundColor;
const cores = ['red', 'green', 'blue', 'yellow'];
let contador = 0;

for(let p of pHtml){
    p.style.backgroundColor = background;
    p.style.color = cores[contador];
    contador += 1;
}

