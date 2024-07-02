const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('../config/db-config');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.urlDB, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use('/api/usuarios', require('./routes/usuarios'));



app.listen(3000, () => {
    console.log("Hola Andru desde app listen");    
});