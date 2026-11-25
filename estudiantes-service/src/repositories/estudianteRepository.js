
const Estudiante = require('../models/Estudiante');

// Listar todos los estudiantes
const listar = async () => {
    return await Estudiante.find();
};

// Registrar estudiante
const crear = async (datos) => {
    const estudiante = new Estudiante(datos);
    return await estudiante.save();
};

// Buscar estudiante por ID
const buscarPorId = async (id) => {
    return await Estudiante.findById(id);
};

// Actualizar estudiante
const actualizar = async (id, datos) => {
    return await Estudiante.findByIdAndUpdate(
        id,
        datos,
        { new: true, runValidators: true }
    );
};

// Eliminar estudiante
const eliminar = async (id) => {
    return await Estudiante.findByIdAndDelete(id);
};

module.exports = {
    listar,
    crear,
    buscarPorId,
    actualizar,
    eliminar
};
