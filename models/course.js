/*Creamos el esquema(tabla) para la base de datos*/
const {Schema} = require("mongoose"); 
const mongoose  = require("mongoose");

const courseSchema = new Schema(
    {
        name : String, //columna de datos
    },
    {
        tiemstamps : true, //columna de fecha creacion/fecha modificacion
    }
)

module.exports = mongoose.model("Course", courseSchema);