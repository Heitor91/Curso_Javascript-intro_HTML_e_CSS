function funcao(a, b){
    console.log('Função');
    console.log(a, b);
    console.log(arguments);
    console.log(arguments[2]);
}

funcao('valor', 1324, true, 'f');

funcao(2);


function soma(a, b=5, c=10){
    console.log(a + b + c);
}

soma(1, 2, 3);
soma(20);
soma(15, undefined, -15);