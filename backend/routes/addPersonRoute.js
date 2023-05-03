const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const addPersonController = require('../controllers/addPersonControllers'); 
// 3.
router.post('/', addPersonController.newPerson); 
router.get('/', addPersonController.getAllPerson);
router.put('/:id', addPersonController.updateAllPerson);
router.delete('/:id', addPersonController.deleteAllOrder);
// 4. 
module.exports = router;