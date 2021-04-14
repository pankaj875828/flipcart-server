const express = require('express');
const { userMiddleware, requiredsignin } = require('../common-middleware');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();

router.post('/user/cart/addtocart',requiredsignin,userMiddleware,addItemToCart)


module.exports = router

