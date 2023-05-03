const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/orderManagement')
    .then(() => console.log('Connected!'))
    .catch(error => console.log(error));

require('./schema/orderSchema');
require('./schema/addPersonSchema');
require('./schema/productItemsSchema');