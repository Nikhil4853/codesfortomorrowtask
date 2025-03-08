const express = require('express');
const router = express.Router();
const authentication = require('../mid/authentication')
const ServiceController = require('../controller/service');

router.post('/category/:categoryId/service', authentication, ServiceController.createService);
router.get('/category/:categoryId/services', authentication, ServiceController.getService)
router.put('/category/:categoryId/service/:serviceId', authentication, ServiceController.updateService)

router.delete('/category/:categoryId/service/:serviceId', authentication, ServiceController.deleteService)

module.exports = router;