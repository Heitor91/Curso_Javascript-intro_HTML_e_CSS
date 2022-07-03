// Factory Function

function criaPessoa(nome, sobrenome, p, a){
    return{
        nome, sobrenome,
        peso: p,
        altura: a,
        imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 80, 1.8);
console.log(p1.imc());

