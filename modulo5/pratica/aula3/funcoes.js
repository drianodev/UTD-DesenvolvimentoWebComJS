function efetuarPagamento(total) {
    if(total <= saldo)
        return Promise.resolve("Autorizada");
    else
        return Promise.reject("Nops");
}

let saldo = 100;

efetuarPagamento(80)
    .then(result => console.log("Promisse resolved: "+result))
    .catch(error => console.log("Promisse rejected: "+error));

console.log("Processando....................")