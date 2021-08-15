const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const cancionesSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    album: {
        type: String,
        trim: true,
    },
    duration:{
        type: String,
        trim: true,
    },
    artist:{
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Canciones',cancionesSchema);