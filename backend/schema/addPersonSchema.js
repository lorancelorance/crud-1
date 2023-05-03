const mongoose = require('mongoose');

const addPersonSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    }

});

var addPerson = mongoose.model('addperson',addPersonSchema);
module.exports  = addPerson;