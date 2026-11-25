
const Curso = require('../models/Curso');

// Listar todos los cursos
const listar = async () => {
    return await Curso.find();
};

// Registrar curso
const crear = async (datos) => {
    const curso = new Curso(datos);
    return await curso.save();
};

// Buscar curso por ID
const buscarPorId = async (id) => {
    return await Curso.findById(id);
};

// Actualizar curso
const actualizar = async (id, datos) => {
    return await Curso.findByIdAndUpdate(
        id,
        datos,
        { new: true, runValidators: true }
    );
};

// Eliminar curso
const eliminar = async (id) => {
    return await Curso.findByIdAndDelete(id);
};

module.exports = {
    listar,
    crear,
    buscarPorId,
    actualizar,
    eliminar
};
