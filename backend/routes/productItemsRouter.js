const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const productItemsController = require('../controllers/productItemsController'); 
// 3.
router.post('/', productItemsController.newProduct); 
router.get('/', productItemsController.getAllOrder);
router.put('/:id', productItemsController.updateProductItems);
router.delete('/:id', productItemsController.deleteProductItems);
// 4. 
module.exports = router;