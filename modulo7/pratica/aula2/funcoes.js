let lista = ['frango', 'maça', 'arroz', 'feijão', 'laranja'];

lista.forEach(funcao);

function funcao(item) {
    console.log(item);
}

function modificaLista(...vogais) {
    console.log(vogais);
}

modificaLista('a', 'e', 'i', 'o', 'u');

let comidas = [...lista, 'suco', 'uva', 'banana'];

console.log(comidas);

let numero = [3, 4, 5, 6, 7, 8];

let copia = numero.map(item=>item*2);

console.log(numero);
console.log(copia);