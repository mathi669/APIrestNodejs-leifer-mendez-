const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.MONGO_URI;
    try {
        
        mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('*** Conexion Correcta ***');
    } catch (error) {
        console.log(error)
        throw new Error('*** Error de Conexion ***')
    }
}

module.exports = dbConnect