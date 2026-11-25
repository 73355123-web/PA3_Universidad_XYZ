
const cursoService = require('../services/cursoService');

// Listar todos los cursos
const obtenerCursos = async (req, res) => {
    try {
        const cursos = await cursoService.listarCursos();
        res.status(200).json(cursos);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener cursos',
            error: error.message
        });
    }
};

// Registrar curso
const crearCurso = async (req, res) => {
    try {
        const curso = await cursoService.registrarCurso(req.body);

        res.status(201).json({
            mensaje: 'Curso registrado correctamente',
            curso
        });
    } catch (error) {
        res.status(error.code === 11000 ? 409 : 400).json({
            mensaje: 'No se pudo registrar el curso',
            error: error.message
        });
    }
};

// Consultar curso por ID
const obtenerCursoPorId = async (req, res) => {
    try {
        const curso = await cursoService.consultarCurso(req.params.id);

        if (!curso) {
            return res.status(404).json({
                mensaje: 'Curso no encontrado'
            });
        }

        res.status(200).json(curso);
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al consultar curso',
            error: error.message
        });
    }
};

// Actualizar curso
const actualizarCurso = async (req, res) => {
    try {
        const curso = await cursoService.actualizarCurso(
            req.params.id,
            req.body
        );

        if (!curso) {
            return res.status(404).json({
                mensaje: 'Curso no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Curso actualizado correctamente',
            curso
        });
    } catch (error) {
        res.status(error.code === 11000 ? 409 : 400).json({
            mensaje: 'Error al actualizar curso',
            error: error.message
        });
    }
};

// Eliminar curso
const eliminarCurso = async (req, res) => {
    try {
        const curso = await cursoService.eliminarCurso(req.params.id);

        if (!curso) {
            return res.status(404).json({
                mensaje: 'Curso no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Curso eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar curso',
            error: error.message
        });
    }
};

module.exports = {
    obtenerCursos,
    crearCurso,
    obtenerCursoPorId,
    actualizarCurso,
    eliminarCurso
};
