
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/database');

// Importar rutas de cursos
const cursoRoutes = require('./src/routes/cursoRoutes');

const app = express();

// Configuración de middlewares
app.use(cors());
app.use(express.json());

// Registrar rutas del microservicio
app.use('/api/cursos', cursoRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Microservicio de cursos funcionando correctamente',
        estado: 'OK'
    });
});

// Verificar estado del servicio
app.get('/api/health', (req, res) => {
    res.json({
        servicio: 'cursos-service',
        estado: 'activo'
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3002;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Servidor de cursos ejecutándose en puerto ${PORT}`);
        });

    } catch (error) {
        console.error('Error al iniciar:', error.message);
        process.exit(1);
    }
};

startServer();
