const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Categories : {
        type : String,
        required : true
    }

});

var Items = mongoose.model('items',productSchema);
module.exports  = Items;