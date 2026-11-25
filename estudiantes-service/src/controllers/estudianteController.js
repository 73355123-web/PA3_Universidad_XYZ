
const estudianteService = require('../services/estudianteService');

// Obtener todos los estudiantes
const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudianteService.listarEstudiantes();
        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener estudiantes',
            error: error.message
        });
    }
};

// Registrar estudiante
const crearEstudiante = async (req, res) => {
    try {
        const estudiante = await estudianteService.registrarEstudiante(req.body);

        res.status(201).json({
            mensaje: 'Estudiante registrado correctamente',
            estudiante
        });
    } catch (error) {
        res.status(error.code === 11000 ? 409 : 400).json({
            mensaje: 'No se pudo registrar el estudiante',
            error: error.message
        });
    }
};

// Consultar estudiante por ID
const obtenerEstudiantePorId = async (req, res) => {
    try {
        const estudiante = await estudianteService.consultarEstudiante(req.params.id);

        if (!estudiante) {
            return res.status(404).json({
                mensaje: 'Estudiante no encontrado'
            });
        }

        res.status(200).json(estudiante);
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al consultar estudiante',
            error: error.message
        });
    }
};

// Actualizar estudiante
const actualizarEstudiante = async (req, res) => {
    try {
        const estudiante = await estudianteService.actualizarEstudiante(
            req.params.id,
            req.body
        );

        if (!estudiante) {
            return res.status(404).json({
                mensaje: 'Estudiante no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Estudiante actualizado correctamente',
            estudiante
        });
    } catch (error) {
        res.status(error.code === 11000 ? 409 : 400).json({
            mensaje: 'Error al actualizar estudiante',
            error: error.message
        });
    }
};

// Eliminar estudiante
const eliminarEstudiante = async (req, res) => {
    try {
        const estudiante = await estudianteService.eliminarEstudiante(req.params.id);

        if (!estudiante) {
            return res.status(404).json({
                mensaje: 'Estudiante no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Estudiante eliminado correctamente'
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'Error al eliminar estudiante',
            error: error.message
        });
    }
};

module.exports = {
    obtenerEstudiantes,
    crearEstudiante,
    obtenerEstudiantePorId,
    actualizarEstudiante,
    eliminarEstudiante
};

