
const request = require('supertest');

const API = 'http://localhost:3001';

let estudianteId;

describe('Pruebas CRUD del microservicio de estudiantes', () => {

    test('GET - Listar estudiantes', async () => {
        const res = await request(API)
            .get('/api/estudiantes');

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST - Registrar estudiante', async () => {
        const codigo = 'TEST-' + Date.now();

        const res = await request(API)
            .post('/api/estudiantes')
            .send({
                codigo: codigo,
                nombres: 'Estudiante',
                apellidos: 'Prueba',
                correo: codigo + '@example.com',
                carrera: 'Ingenieria Sistemas',
                ciclo: 4
            });

        expect(res.statusCode).toBe(201);
        estudianteId = res.body.estudiante._id;
        expect(estudianteId).toBeDefined();
    });

    test('GET - Consultar estudiante por ID', async () => {
        const res = await request(API)
            .get('/api/estudiantes/' + estudianteId);

        expect(res.statusCode).toBe(200);
        expect(res.body.nombres).toBe('Estudiante');
    });

    test('PUT - Actualizar estudiante', async () => {
        const res = await request(API)
            .put('/api/estudiantes/' + estudianteId)
            .send({
                ciclo: 5
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.estudiante.ciclo).toBe(5);
    });

    test('DELETE - Eliminar estudiante', async () => {
        const res = await request(API)
            .delete('/api/estudiantes/' + estudianteId);

        expect(res.statusCode).toBe(200);
    });

    afterAll(async () => {
        if (estudianteId) {
            await request(API)
                .delete('/api/estudiantes/' + estudianteId);
        }
    });

});
