const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/proyecto',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
);

//habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//habilitar cors
app.use(cors());

app.use('/', routes());

app.listen(5000, function(){
    console.log('Servidor listo!')
});