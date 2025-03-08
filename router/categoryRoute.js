const express = require('express');
const router = express.Router();
const authentication = require('../mid/authentication')
const CategoryController = require('../controller/category');

router.post('/category', authentication, CategoryController.createCatgory);
router.get('/categories', authentication, CategoryController.getCatgory);
router.put('/category/:categoryId', authentication, CategoryController.updateCatgory);

router.delete('/category/:categoryId', authentication, CategoryController.deteleCatgory)

module.exports = router;