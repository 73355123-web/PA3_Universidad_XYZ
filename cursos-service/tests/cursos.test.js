
const request = require('supertest');

const API = 'http://localhost:3002';

let cursoId;

describe('Pruebas CRUD del microservicio de cursos', () => {

    test('GET - Listar cursos', async () => {
        const res = await request(API)
            .get('/api/cursos');

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST - Registrar curso', async () => {
        const codigo = 'TEST-' + Date.now();

        const res = await request(API)
            .post('/api/cursos')
            .send({
                codigo: codigo,
                nombre: 'Curso de prueba',
                creditos: 4,
                docente: 'Docente de prueba'
            });

        expect(res.statusCode).toBe(201);
        cursoId = res.body.curso._id;
        expect(cursoId).toBeDefined();
    });

    test('GET - Consultar curso por ID', async () => {
        const res = await request(API)
            .get('/api/cursos/' + cursoId);

        expect(res.statusCode).toBe(200);
        expect(res.body.nombre).toBe('Curso de prueba');
    });

    test('PUT - Actualizar curso', async () => {
        const res = await request(API)
            .put('/api/cursos/' + cursoId)
            .send({
                creditos: 5
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.curso.creditos).toBe(5);
    });

    test('DELETE - Eliminar curso', async () => {
        const res = await request(API)
            .delete('/api/cursos/' + cursoId);

        expect(res.statusCode).toBe(200);
    });

    afterAll(async () => {
        if (cursoId) {
            await request(API)
                .delete('/api/cursos/' + cursoId);
        }
    });

});
