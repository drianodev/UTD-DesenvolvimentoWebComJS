let tag = document.getElementsByTagName('p');

console.log(tag);
console.log(tag[0].innerText);
console.log(tag[0].innerHTML);
console.log(tag[1].innerText);

let novoElemento = document.createElement('li');
let tagUl = document.getElementsByName('ul');
let novoElemento2 = document.createElement('li');

novoElemento.innerText = 'PHP';
novoElemento2.innerText = 'RUBY';

tag[0].appendChild(novoElemento)
tag[0].appendChild(novoElemento2)

console.log(tag[4].innerHTML);

