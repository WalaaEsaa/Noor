const express = require('express')
const router = express.Router()
const teachersController=require('../Controllers/teachers')


router.post('/api/teachers/register',teachersController.register)
router.post('/api/teachers/login',teachersController.login)



module.exports=router