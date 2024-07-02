const express = require('express');
const router = express.Router();
const userModel = require('../Models/user')

router.post('/crear', async (req,res)=> {
    try {
        var response = await userModel.create(req.body);
        console.log(response);
        res.status(200).send({'status':'creado'})
    } catch (error) {
        res.status(500).send({'errores': error,'status':'creado'})
    }
})

router.get('/:id', (req, res) => {
    console.log("andru.get...", req.body);
    res.send('get user with ID: ${userId}')
})

router.put('/', (req, res) => {
    console.log("andru.put..",req.body);
    res.sendStatus('Actualizado')
})

router.delete('/', (req, res) => {
    console.log("andru.delete", res.body);
    res.send('Datos borrados')
})

module.exports = router;