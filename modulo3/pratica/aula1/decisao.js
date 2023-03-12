// Criando variaveis = var, let, const

var letra = 'Hello World !';

let palavra = 'Hello World !';
let n1 = 10, n2 = 10;

//letra = n1 * n2;
//palavra = n1 * n2;

console.log(letra);
console.log(palavra);
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 == n2);
console.log(n1 != n2);

letra = '10';
palavra = '10';

console.log('TIPAGEM');
console.log(n1 == letra); // igual
console.log(n1 === letra); // identico
console.log(n1 == palavra); // igual
console.log(n1 === palavra); // identico
console.log(palavra == letra); // igual
console.log(palavra === letra); // identico

console.log('ESTRUTURAS DE DECISÃO');

if(n1 === letra) {
    console.log('Gemeooooss');
} else {
    console.log('Gemeoooos nada');
}

let opcao = 3;

switch(opcao) {
    
    case 1 : console.log('ensino fundamental');
    break;

    case 2 : console.log('ensino medio');
    break;

    case 3 : console.log('ensino superior');
    break;

    default : console.log('nao definida');
    break;
}