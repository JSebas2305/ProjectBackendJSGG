const {Schema, model} = require('mongoose')

const schema = new Schema({   
    nombre :{
        type : String,
        required: true
    },
    genero :{
        type : String,
        required: true
    },
    temporadas :{
        type : Number,
        required: true
    }, 
    capitulos :{
        type : Number,
        required: true
    }, 
    clasificacion :{
        type : String,
        required: true
    },
    img :{
        type : String
    },
    trailer :{
        type : String
    },

})

const Series = model('Serie', schema)
module.exports = {Series}