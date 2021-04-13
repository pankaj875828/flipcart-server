const express = require('express');
const { signup, signin, requiredsignin } = require('../../controller/admin/auth');
const { validateSignupRequest,isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();

router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);

router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin)


module.exports = router