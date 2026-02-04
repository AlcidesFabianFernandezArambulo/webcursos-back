const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) =>{
    res.send('hello World!')
})

app.listen(PORT, ()=>{
    console.log(`App excuchando en puerto ${PORT}`)
})