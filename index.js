const rotasalas = require('./rotas/salas.rota')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors())

app.use('/salas', rotasalas)

app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})

app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})