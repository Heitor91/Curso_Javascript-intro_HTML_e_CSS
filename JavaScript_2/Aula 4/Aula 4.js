//Função Construtora -> Objetos
//Função Fábrica  -> objetos

function Pessoa(nome, sobrenome){
    // Atributos e métodos privados
    const ID = 123;
    const metodoInterno = function(){
        
    }
    // Atributos e métodos públicos---------------
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.fala = function(){
        console.log(`Sou o ${this.nome} ${this.sobrenome}`)
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Oliveira');

p2.fala();