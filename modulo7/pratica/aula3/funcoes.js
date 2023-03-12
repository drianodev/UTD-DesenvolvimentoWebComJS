let numeros = [1, 2, 3, 4];

let [a, b, c, d] = numeros;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [e, ...f] = numeros;

console.log(e);
console.log(f);

const soma = numeros.reduce(function(resultado, item) {
    return resultado + item;
})

console.log(soma);

const filtro = numeros.filter(item=>item>2);

console.log(filtro);

const alunos = [
    {name: 'João', nota: 8},
    {name: 'Sarah', nota: 6},
    {name: 'Adriano', nota: 4},
    {name: 'Maria', nota: 9}
];

const aprovados = alunos.filter(alunos=>alunos.nota>=7);

console.log(aprovados);