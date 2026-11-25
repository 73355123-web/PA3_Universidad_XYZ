
const cursoRepository = require('../repositories/cursoRepository');

// Listar todos los cursos
const listarCursos = async () => {
    return await cursoRepository.listar();
};

// Registrar curso
const registrarCurso = async (datos) => {
    return await cursoRepository.crear(datos);
};

// Consultar curso por ID
const consultarCurso = async (id) => {
    return await cursoRepository.buscarPorId(id);
};

// Actualizar curso
const actualizarCurso = async (id, datos) => {
    return await cursoRepository.actualizar(id, datos);
};

// Eliminar curso
const eliminarCurso = async (id) => {
    return await cursoRepository.eliminar(id);
};

module.exports = {
    listarCursos,
    registrarCurso,
    consultarCurso,
    actualizarCurso,
    eliminarCurso
};
