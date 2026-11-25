
const estudianteRepository = require('../repositories/estudianteRepository');

// Listar estudiantes
const listarEstudiantes = async () => {
    return await estudianteRepository.listar();
};

// Registrar estudiante
const registrarEstudiante = async (datos) => {
    return await estudianteRepository.crear(datos);
};

// Consultar estudiante por ID
const consultarEstudiante = async (id) => {
    return await estudianteRepository.buscarPorId(id);
};

// Actualizar estudiante
const actualizarEstudiante = async (id, datos) => {
    return await estudianteRepository.actualizar(id, datos);
};

// Eliminar estudiante
const eliminarEstudiante = async (id) => {
    return await estudianteRepository.eliminar(id);
};

module.exports = {
    listarEstudiantes,
    registrarEstudiante,
    consultarEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};
