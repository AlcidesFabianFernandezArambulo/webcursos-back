const dotenv = require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT //Trae el valor de PORT de el archico .env

app.get('/', (req, res) =>{
    res.send('hello World!')
})

app.listen(PORT, ()=>{
    console.log(`App excuchando en puerto ${PORT}`)
})