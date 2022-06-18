//Declaração de função (Function Hoisting)
helloWorld();
function helloWorld(){
    console.log('Hello!!');
}

//First-Class Object
//Function Expression

const dado = function(){
    console.log('Dado');
}
dado();

function executaFuncao(funcao){
    funcao();
}
executaFuncao(dado)


//Arrow function

const arrow = () => {
    console.log('Arrow');
}

arrow();
