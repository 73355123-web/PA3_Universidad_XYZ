
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

// IMPORTANTE: No colocar express.json() en el Gateway.
// Así evitamos consumir el cuerpo de las solicitudes POST y PUT.

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Gateway funcionando correctamente',
        servicios: {
            estudiantes: 'http://localhost:3001',
            cursos: 'http://localhost:3002'
        }
    });
});

// Servicio de estudiantes
app.use(
    createProxyMiddleware({
        pathFilter: '/api/estudiantes',
        target: 'http://localhost:3001',
        changeOrigin: true
    })
);

// Servicio de cursos
app.use(
    createProxyMiddleware({
        pathFilter: '/api/cursos',
        target: 'http://localhost:3002',
        changeOrigin: true
    })
);

// Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API Gateway ejecutándose en puerto ${PORT}`);
});
