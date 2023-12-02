const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config')

//mongodb+srv://APICurso:<password>@clusterapi.tj4t0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//5uPWigfMGUbPsWET

const url = config.bd_string;

//const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true };
const options = { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true };


mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com obanco de dados: ' + err);
})

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectado do banco de dados');
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada no banco de dados');
})

//Body Parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;