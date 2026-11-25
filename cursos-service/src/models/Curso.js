
const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    creditos: {
        type: Number,
        required: true,
        min: 1
    },
    docente: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Curso', cursoSchema);
