const express = require('express');
const { adminMiddleware, requiredsignin } = require('../common-middleware');
const { addCategory, getCategories } = require('../controller/category');
const router = express.Router();

router.post('/category/create',requiredsignin,adminMiddleware,addCategory)
router.get('/category/getcategory',getCategories)


module.exports = router

