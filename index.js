const express = require('express');
const routes = require('./routes/api.js');
const mongoose = require('mongoose');

//set up express app
const app = express();

//set up front end
app.use(express.static('public'));
//express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set up connection 
mongoose.connect('mongodb://localhost/judokas');
mongoose.Promise = global.Promise;

//init routes 
app.use(routes);

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error : err.message});
});

//listen for requests at port:4000 or specified heroku port
app.listen(process.env.listen || 4000,function(){
    console.log('Waiting for request');
});