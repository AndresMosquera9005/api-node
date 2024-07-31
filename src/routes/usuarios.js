const express = require('express');
const router = express.Router();
const userModel = require('../Models/user')

router.post('/crear', async (req,res)=> {
    try {
        var response = await userModel.create(req.body);
        console.log(response);
        res.status(200).send({'status':'creado'})
    } catch (error) {
        res.status(400).send({'errores': error})
    }
})

router.post('/login', async (req, res) => {
    try {
        var usuario = await userModel.find({email:req.body.email})
        if (usuario.length == 0) {
            res.status(200).send({status:'NOTFOUND'})
            return
        }
        if (usuario != null) {
            if (usuario[0].password == req.body.password) {
                res.status(200).send({status:'OK',usuario:usuario[0]})
            }else{
                res.status(200).send({status:'PASSWORDWRONG'})
            }
            return
        }
    } catch (error) {
        res.status(400).send({'errores': error})
    }
})


module.exports = router;