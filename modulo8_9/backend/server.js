const express = require('express');
const app = express();

var bodyParser = require('body-parser');

global.__basedir = __dirname;

const db = require('./config/db.config.js');

const Cliente = db.Cliente;

let router = require('./routes/router.js');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSucessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);

// create o servidor
const server = app.listen(8080, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("O app está executando em http://%s:%s", host, port);
})

db.sequelize.sync({force: true}).then(() => {
    console.log("Reescrever e popula a tabela com { force: true }");
    Cliente.sync().then(() => {
        const clientes = [
            { nome: 'Pedro', email: 'pedro@email.com', idade: 23 },
            { nome: 'Adriano', email: 'adriano@email.com', idade: 34 },
            { nome: 'Sarah', email: 'sarah@email.com', idade: 18 },
            { nome: 'João', email: 'joao@email.com', idade: 19 }
        ]

        for(let i = 0; i < clientes.length; i++) {
            Cliente.create(clientes[i]);
        }
    })
});