const express = require('express');
const router = express.Router();

router.post('/crear', (req,res)=> {
    console.log("andru.post...",req.body);
    res.send({"status":"creado"})
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