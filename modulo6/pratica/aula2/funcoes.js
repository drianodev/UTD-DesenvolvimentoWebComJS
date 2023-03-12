// OBJETOS A PARTIR DO METODO LITERAL
let aluno = {
    nome: 'Adriano',
    idade: 19,
    curso: 'CIÊNCIA DA COMPUTAÇÃO',

    get getNome(){
        return this.nome;
    },

    set changeNome(novoNome) {
        this.nome = novoNome;
    },

    get getIdade(){
        return this.idade;
    },

    set changeIdade(novoIdade) {
        this.idade = novoIdade;
    }
}

console.log(aluno.getNome);

aluno.changeNome = 'Anita';
console.log(aluno.getNome);

console.log(aluno.getIdade);

aluno.changeIdade = 15;
console.log(aluno.getIdade);