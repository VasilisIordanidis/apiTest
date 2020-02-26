const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const judokaSchema = new Schema({
    firstName:{
        type:String,
        required:[true,'First name is required']
    },
    lastName:{
        type:String,
        required:[true,'Last name is required']
    },
    country:{
        type:String,
        required:[true,'Country is required']
    }


});

const judoka = mongoose.model('judokas', judokaSchema);
module.exports = judoka ;