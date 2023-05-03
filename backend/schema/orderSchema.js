const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    No : {
        type : Number,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    Quntity : {
        type : Number,
        required : true
    },
    Price : {
        type : Number,
        required : true
    },
    Total : {
        type : Number,
        required : true
    },
    Date : {
        type : Date,
        default : Date.now
    }

});

var Order = mongoose.model('orders',orderSchema);
module.exports  = Order;