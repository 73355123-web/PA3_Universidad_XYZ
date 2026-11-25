
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/database');

// Importar rutas de estudiantes
const estudianteRoutes = require('./src/routes/estudianteRoutes');

const app = express();

// Configuración de middlewares
app.use(cors());
app.use(express.json());

// Registrar rutas del microservicio
app.use('/api/estudiantes', estudianteRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Microservicio de estudiantes funcionando correctamente',
        estado: 'OK'
    });
});

// Verificar estado del servicio
app.get('/api/health', (req, res) => {
    res.json({
        servicio: 'estudiantes-service',
        estado: 'activo'
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en puerto ${PORT}`);
        });

    } catch (error) {
        console.error('Error al iniciar:', error.message);
        process.exit(1);
    }
};

startServer();
