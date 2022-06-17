

function meuEscopo(){
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ];
    const texto = document.querySelector('.conteiner');
    for(let i = 0; i < elementos.length;i++){
        texto.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`;
    }
}

meuEscopo();