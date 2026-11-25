
const express = require('express');
const router = express.Router();

const {
    obtenerCursos,
    crearCurso,
    obtenerCursoPorId,
    actualizarCurso,
    eliminarCurso
} = require('../controllers/cursoController');

// Listar todos los cursos
router.get('/', obtenerCursos);

// Registrar un curso
router.post('/', crearCurso);

// Consultar curso por ID
router.get('/:id', obtenerCursoPorId);

// Actualizar curso
router.put('/:id', actualizarCurso);

// Eliminar curso
router.delete('/:id', eliminarCurso);

module.exports = router;
