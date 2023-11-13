const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.CONNECT_MONGO)
        console.log('base de datos conectada')
    } catch {
        console.log('error al conectarse con la base de datos')
    }
}
module.exports = {connect}