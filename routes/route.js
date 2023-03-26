const express = require('express')
const router = express.Router();
const {allProducts}  = require('../controllers/products')

router.route('/').get(allProducts);

module.exports = router;