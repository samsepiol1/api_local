const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const salas = {}

router.get('/:id', (req, res) => {
    res.json({salas: salas[req.params.id]})
})

router.put('/', (req, res) => {
    const id = req.query.id
    if (id && salas[id]){
        const sala = req.body
        sala.id = id
        salas[id] = sala
        res.json({msg: "Sala atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Sala não encontrado!"})
    }
})

router.delete('/', (req, res) => {
    const id = req.query.id
    if (id && salas[id]){
        delete salas[id]
        res.json({msg: "Sala deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Sala não encontrado!"})
    }
})

router.post('/', (req, res) => {
    const sala = req.body
    const idsalas = uuidv4()
    sala.id = idsalas
    salas[idsalas] = sala
    res.json({msg: "Sala adicionado com sucesso!"})
})

router.get('/', (req, res) => {
    res.json({salas: Object.values(salas)})
})

module.exports = router