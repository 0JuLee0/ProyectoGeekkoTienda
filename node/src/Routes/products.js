const { Router } = require('express');
const router = Router();
const { getProducts,createProduct, getProduct, updateProduct,deleteProducts } = require('../Controllers/Product.Controller');

router.route('/')
    .get(getProducts)
    .post(createProduct)


router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProducts);

module.exports = router;