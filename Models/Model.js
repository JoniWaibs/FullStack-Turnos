//Importar el orm y defninir sus esquemas
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definir el schema de la ddbb
const dataBaseSchema = new Schema({
    paciente:{
        type: String,
        trim: true,
    },
    propietario:{
        type: String,
        trim: true,
    },
    fecha:{
        type: String,
        trim: true
    },
    hora:{
        type: String,
        trim: true
    },
    telefono:{
        type: String,
        trim: true
    },
    sintoma:{
        type: String,
        trim: true
    },
});
//Exportar el modelo al controlador
module.exports = mongoose.model('Modelo', dataBaseSchema)
