// OBJETOS A PARTIR DO METODO CONSTRUTOR
function Person() {
    this.nome = '';
    this.idade = '';
}

let p1 = new Person();

p1.nome = 'Adriano';
p1.idade = 19;

console.log(p1.nome);
console.log(p1.idade);

// OBJETOS A PARTIR DO METODO LITERAL
let aluno = {
    nome: 'Adriano',
    idade: 19,
    curso: 'CIÊNCIA DA COMPUTAÇÃO'
}

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);

// DESESTRUTURAÇÃO
let {nome, idade} = aluno;

console.log(nome);
console.log(idade);