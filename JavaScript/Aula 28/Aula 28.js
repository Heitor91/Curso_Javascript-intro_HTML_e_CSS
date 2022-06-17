// for classico
for(let i = 0; i <= 5; i++){
    console.log(i);
}

const lista = ['a', 'b', 'c', 'd'];


//for in
for(let i in lista){
    console.log(i);
}

const pessoa ={
    nome: 'Luiz',
    idade: 30,
    altura: 1.80
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

//for of

const nome = ['Luiz', 'Otávio', 'Hnerique']

for (let valor of nome){
    console.log(valor);
}

nome.forEach(function(valor, indice){console.log(valor, indice);});