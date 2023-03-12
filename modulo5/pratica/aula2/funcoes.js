const variavel = 'java';

console.log(variavel);

function mostraIdade(idade = 33) { // valor padrão
    console.log(idade);
}

mostraIdade();
mostraIdade(100);

let nome = "joão", idade = 17, endereco = "jari";

//console.log("Nome: "+nome+" idade: "+idade+" endereco: "+endereco);
console.log(`Nome: ${nome} Idade: ${idade} Endereco: ${endereco}`);

function soma(x, y) {
    return x+y;
}

let somaArrow = (x,y) => x + y;

console.log(soma);
console.log(somaArrow);
console.log(soma(10,20));
console.log(somaArrow(10,20));