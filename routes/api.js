const express = require('express');
const router = express.Router();
const Judoka = require('../models/judoka');

//get list of judokas from db by using their last name
router.get('/judokas/:lastName',function(req, res, next){
    Judoka.findOne({lastName:req.params.lastName}).then(function(judokas){
        res.send(judokas);
    
    });
});

//update judoka to db
router.put('/judokas/:id',function(req, res, next){
    Judoka.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Judoka.findOne({_id:req.params.id}).then(function(judoka){
            res.send(judoka);
        });
    });
});

//add judoka to db
router.post('/judokas',function(req, res, next){
    Judoka.create(req.body).then(function(judoka){
        res.send(judoka);
    }).catch(next);
});

//delete judoka from db
router.delete('/judokas/:id',function(req, res, next){
    Judoka.findByIdAndDelete({_id:req.params.id}).then(function(judoka){
        res.send(judoka);
    });
});

module.exports = router;

