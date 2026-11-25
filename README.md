
# PA3 - Universidad Tecnológica XYZ

## 1. Descripción del proyecto

Sistema backend de gestión académica basado en una arquitectura de microservicios, diseñado para administrar información de estudiantes y cursos mediante servicios API RESTful.

El proyecto permite registrar, consultar, actualizar, eliminar y listar información académica de manera independiente.

## 2. Tecnologías utilizadas

- Visual Studio Code
- Node.js
- Express.js
- MongoDB 8.0
- Mongoose
- Docker y Docker Compose
- API Gateway
- Postman
- Jest
- Supertest
- Git y GitHub

Se utiliza MongoDB con Docker como alternativa a las bases de datos relacionales sugeridas en el enunciado.

## 3. Arquitectura del sistema

El proyecto está organizado en dos microservicios independientes y un API Gateway.

| Componente | Puerto |
|---|---|
| API Gateway | 3000 |
| Microservicio de estudiantes | 3001 |
| Microservicio de cursos | 3002 |
| MongoDB | 27017 |

Cada microservicio implementa una arquitectura por capas:

- Controller: gestión de solicitudes HTTP.
- Service: capa de servicio.
- Repository: acceso a la base de datos.
- Model: estructura y validación de datos.
- Routes: definición de endpoints.
- Config: configuración de conexión.

## 4. Estructura del proyecto

    PA3_Universidad_XYZ/
    ├── api-gateway/
    ├── estudiantes-service/
    │   ├── src/
    │   │   ├── config/
    │   │   ├── controllers/
    │   │   ├── models/
    │   │   ├── repositories/
    │   │   ├── routes/
    │   │   └── services/
    │   ├── tests/
    │   ├── package.json
    │   └── server.js
    ├── cursos-service/
    │   ├── src/
    │   │   ├── config/
    │   │   ├── controllers/
    │   │   ├── models/
    │   │   ├── repositories/
    │   │   ├── routes/
    │   │   └── services/
    │   ├── tests/
    │   ├── package.json
    │   └── server.js
    ├── docker-compose.yml
    ├── .gitignore
    └── README.md

## 5. Requisitos de instalación

- Node.js y npm.
- Docker Desktop.
- Git.
- Postman (opcional para pruebas manuales).

## 6. Instalación del proyecto

Clonar el repositorio:

    git clone https://github.com/73355123-web/PA3_Universidad_XYZ.git

    cd PA3_Universidad_XYZ

Instalar las dependencias:

    cd estudiantes-service
    npm install

    cd ../cursos-service
    npm install

    cd ../api-gateway
    npm install

    cd ..

## 7. Configuración de variables de entorno

Crear un archivo .env en la raíz del proyecto:

    MONGO_ROOT_USER=admin
    MONGO_ROOT_PASSWORD=TU_PASSWORD_LOCAL

Crear un archivo .env dentro de estudiantes-service:

    PORT=3001
    MONGO_URI=mongodb://admin:TU_PASSWORD_LOCAL@localhost:27017/universidad_estudiantes?authSource=admin

Crear un archivo .env dentro de cursos-service:

    PORT=3002
    MONGO_URI=mongodb://admin:TU_PASSWORD_LOCAL@localhost:27017/universidad_cursos?authSource=admin

Reemplazar TU_PASSWORD_LOCAL por una contraseña propia y utilizar la misma credencial en los tres archivos.

Los archivos .env están excluidos del repositorio mediante .gitignore.

## 8. Iniciar la base de datos

Desde la carpeta principal:

    docker compose up -d

Verificar el contenedor:

    docker ps

## 9. Ejecutar los microservicios

Abrir tres terminales independientes.

Terminal 1:

    cd estudiantes-service
    node server.js

Terminal 2, desde la raíz del proyecto:

    cd cursos-service
    node server.js

Terminal 3, desde la raíz del proyecto:

    cd api-gateway
    node server.js

## 10. Endpoints REST

### Microservicio de estudiantes

| Método | Endpoint | Función |
|---|---|---|
| GET | /api/estudiantes | Listar estudiantes |
| POST | /api/estudiantes | Registrar estudiante |
| GET | /api/estudiantes/:id | Consultar estudiante |
| PUT | /api/estudiantes/:id | Actualizar estudiante |
| DELETE | /api/estudiantes/:id | Eliminar estudiante |

Ejemplo de registro:

    {
        "codigo": "EST001",
        "nombres": "Estudiante",
        "apellidos": "Ejemplo",
        "correo": "estudiante@example.com",
        "carrera": "Ingenieria Sistemas",
        "ciclo": 5
    }

### Microservicio de cursos

| Método | Endpoint | Función |
|---|---|---|
| GET | /api/cursos | Listar cursos |
| POST | /api/cursos | Registrar curso |
| GET | /api/cursos/:id | Consultar curso |
| PUT | /api/cursos/:id | Actualizar curso |
| DELETE | /api/cursos/:id | Eliminar curso |

Ejemplo de registro:

    {
        "codigo": "CUR001",
        "nombre": "Programacion Web",
        "creditos": 4,
        "docente": "Docente de ejemplo"
    }

El identificador _id es generado automáticamente por MongoDB.

## 11. API Gateway

El punto de acceso centralizado es:

    http://localhost:3000

Servicios directos:

    http://localhost:3001/api/estudiantes
    http://localhost:3002/api/cursos

Servicios mediante Gateway:

    http://localhost:3000/api/estudiantes
    http://localhost:3000/api/cursos

## 12. Pruebas manuales con Postman

Se realizaron pruebas de registro, consulta, listado, actualización y eliminación de estudiantes y cursos.

Resultados:

| Microservicio | Pruebas exitosas |
|---|---|
| Estudiantes | 5 de 5 |
| Cursos | 5 de 5 |
| Total | 10 de 10 |

También se verificaron consultas y el registro de estudiantes mediante el API Gateway.

## 13. Pruebas automatizadas

Las pruebas fueron implementadas utilizando Jest y Supertest.

Mantener MongoDB y los microservicios activos durante la ejecución.

Desde estudiantes-service:

    npm test

Desde cursos-service:

    npm test

En Windows PowerShell también se puede utilizar:

    npm.cmd test

Resultados obtenidos:

| Microservicio | Pruebas aprobadas |
|---|---|
| Estudiantes | 5 de 5 |
| Cursos | 5 de 5 |
| Total | 10 de 10 |

Las pruebas utilizan registros temporales para verificar las operaciones CRUD.

## 14. Control de versiones

El proyecto utiliza Git para el control de versiones y GitHub como repositorio remoto público.

## 15. Conclusiones

Se implementó un sistema backend de gestión académica mediante microservicios independientes, aplicando una arquitectura por capas, servicios RESTful, persistencia de datos y pruebas automatizadas.

La solución facilita el mantenimiento y la ampliación de las funcionalidades del sistema.

Proyecto Académico 3 - PA3
