    const numero = Number(prompt('Digite um numero:'));
    const numeroTitulo = document.getElementById('numero-titulo');
    const texto = document.getElementById('texto');

    numeroTitulo.innerHTML = numero;
    texto.innerHTML = `<p>Raiz quadrada: ${numero**0.5}</p>`;
    texto.innerHTML += `<p>${numero} é número inteiro: ${Number.isInteger(numero)}</p>`;
    texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
    texto.innerHTML += `<p>Arredondado para mais: ${Math.ceil(numero)}</p>`;
    texto.innerHTML += `<p>Arredondado para menos: ${Math.floor(numero)}</p>`;
    texto.innerHTML += `<p>Com duas casas: ${numero.toFixed(2)}</p>`;