function criaPessoa (nome, sobrenome, idade) {
    //Função construtora do objetos
    return {nome, sobrenome, idade};
}

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está on-line`);
    }
};

const pessoa2 = criaPessoa('Luiz', 'Miranda', 25)
/*
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);*/

pessoa1.fala();