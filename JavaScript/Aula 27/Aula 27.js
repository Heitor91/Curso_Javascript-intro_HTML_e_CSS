const pessoa = {
    nome: 'Luiz',
    idade: 30,
    endereço:{
        rua: 'Av. Brasil',
        numero: 320
    }
};

const { nome: alguem, sobrenome = '' } = pessoa;
const {endereço: {rua, numero}} = pessoa;
console.log(alguem, sobrenome);
console.log(rua, numero);
console.log(pessoa.nome);