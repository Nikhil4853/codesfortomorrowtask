const express = require('express');
const router = express.Router();
const AdminContorller = require('../controller/admin');
router.post('/login', AdminContorller.adminLogin);
module.exports = router;
