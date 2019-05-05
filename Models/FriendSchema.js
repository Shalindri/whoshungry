//import mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema definition
const FriendSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    secondName:{
        type:String,
        required:false

    },
    phone: {
        type: String,
        required: true
    },
    enabled:{
        type:Boolean,
        required:false
    }
});

module.exports = FriendSchema;

