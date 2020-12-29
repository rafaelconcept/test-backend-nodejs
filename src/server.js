const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes'); 




mongoose.connect('mongodb+srv://rafaelconcept:teste-anotaai@cluster0.fe79l.mongodb.net/rafaelconcept?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




  
server.use(cors());
server.use(express.json());
server.use(routes);



  




console.log('server rodando');
server.listen(3333);
