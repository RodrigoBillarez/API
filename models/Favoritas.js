const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const favoritasSchema = new Schema({
    usuario: {
        type: Schema.ObjectId,
        ref: 'Usuarios',
    },
    canciones: [{
        cancion: {
            type: Schema.ObjectId,
            ref: 'Canciones',
        }
    }]
});

module.exports = mongoose.model('Favoritas',favoritasSchema);