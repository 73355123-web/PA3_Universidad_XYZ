
const express = require('express');
const router = express.Router();

const {
    obtenerEstudiantes,
    crearEstudiante,
    obtenerEstudiantePorId,
    actualizarEstudiante,
    eliminarEstudiante
} = require('../controllers/estudianteController');

// Listar todos los estudiantes
router.get('/', obtenerEstudiantes);

// Registrar un estudiante
router.post('/', crearEstudiante);

// Consultar estudiante por ID
router.get('/:id', obtenerEstudiantePorId);

// Actualizar estudiante
router.put('/:id', actualizarEstudiante);

// Eliminar estudiante
router.delete('/:id', eliminarEstudiante);

module.exports = router;
