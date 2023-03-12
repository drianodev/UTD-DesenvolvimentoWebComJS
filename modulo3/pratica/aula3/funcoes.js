const painel = document.getElementById('painel');

let texto = '';
let n1 = 10, n2 = 10;

// funcao com parametro e retorno
function soma(variavel1, variavel2) {
    return variavel1 + variavel2;
}

// funcao sem parametro e com retorno
function mundo() {
    return 'HELLO WORLD';
}

// funcao sem parametro e sem retorno
function a() {
    console.log('AAAAAAAAAAAAAAA');
}

a();

//texto = soma(n1, n2);
texto = mundo();

let resultado = document.createTextNode(texto);

painel.appendChild(resultado);
