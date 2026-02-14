require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT //Trae el valor de PORT de el archico .env

app.get('/', (req, res) =>{
    res.send('hello World!')
})

/*conexion a la base de datos*/
mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then(()=>{
            console.log("Conexion a MongoDB exitosa")
            app.listen(PORT, () =>{
                console.log(`App escuchando en puerto ${PORT}`)
            })
        })
        .catch(err => {
            console.log("Error al conectar a MongoDB", err)
        })


