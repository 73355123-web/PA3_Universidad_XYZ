
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB de cursos conectado correctamente');

    } catch (error) {
        console.error('Error al conectar MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
