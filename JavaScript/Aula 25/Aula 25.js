const condicao = true;
let numero = 1;
var nome = 'Sr. Alguém'

function printa(){
    let numero = 2;
    var nome = 'Sr. Alguém'
    console.log(numero, nome);
}

console.log(numero, nome);
if (condicao){
    let numero = 10;
    var nome = 'Sr. Niguém'
    console.log(numero, nome);
    if(condicao){
        let numero = 100;
        var nome = 'Sr. Coiso'
        console.log(numero, nome);
    }
    console.log(numero, nome);
}
console.log(numero, nome);
printa();
console.log(numero, nome);