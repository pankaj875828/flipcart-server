const express = require('express');
const { signup, signin, requiredsignin } = require('../controller/auth');
const router = express.Router();

router.post('/signup',signup);

router.post('/signin',signin)

// router.post('/profile',requiredsignin,(req,res)=>{
//     res.status(201).json({user:"Profile"})
// })

module.exports = router