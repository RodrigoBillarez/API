const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    apellido: {
        type: String,
        trim: true,
    },
    edad: {
        type: String,
    },
    mail: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
});

module.exports = mongoose.model('Usuarios', usuariosSchema);