class Conta {
    constructor() {
        this.saldo = 0;
    }

    saque(valor) {
        if(valor > this.saldo) {
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
        }
    }

    deposito(valor) {
        
        this.saldo += valor;
    
    }
}

class ContaPoupança extends Conta {
    rendimento(taxa) {
        this.saldo += this.saldo * (taxa)/100;
    }
}

class ContaCorrente extends Conta {
    manutencao(taxa) {
        this.saldo -= this.saldo * (taxa)/100;
    }
}

let c1 = new ContaPoupança;

c1.deposito(1000);
console.log(c1);

c1.rendimento(10);
console.log(c1);

c1.saque(500);
console.log(c1);

let c2 = new ContaCorrente;

c2.deposito(1000);
console.log(c2);

c2.manutencao(10);
console.log(c2);

c2.saque(500);
console.log(c2);