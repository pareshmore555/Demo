const express = require('express');
const customerController = require('../controller/customer');

const router = express.Router();

router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);

module.exports = router;