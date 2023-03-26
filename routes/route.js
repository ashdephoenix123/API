const express = require('express')
const router = express.Router();
const {allProducts, singleProduct}  = require('../controllers/products')

router.route('/').get(allProducts);
router.route('/singleproduct').get(singleProduct);

module.exports = router;