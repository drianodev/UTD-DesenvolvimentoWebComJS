let lista = [];

lista[0] = "leite";
lista[1] = "carne";
lista[2] = "maça";
lista[3] = "abacate";
lista[4] = "peixe";

console.log(lista);
console.log(lista[2]);

let numeros = [1, 2, 3, 4, 5];

console.log(numeros);

// insere no final
lista.push("uva");
console.log(lista);

// insere no começo
lista.unshift("aveia");
console.log(lista);

// retira no final
lista.pop();
console.log(lista);

// retira no começo
lista.shift();
console.log(lista);

// retira tanto como add
lista.splice(3, 2);
console.log(lista);

lista.splice(1, 2, "melancia");
console.log(lista);