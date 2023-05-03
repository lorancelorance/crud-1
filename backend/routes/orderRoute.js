const express = require('express'); //import express
// 1.
const router  = express.Router(); 
// 2.
const order = require('../controllers/orderController'); 
// 3.
router.post('/', order.newOrder); 
router.get('/', order.getAllOrder);
router.put('/:id', order.updateAllOrder);
router.delete('/:id', order.deleteAllOrder);
// 4. 
module.exports = router;