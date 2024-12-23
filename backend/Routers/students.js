const express = require('express')
const router = express.Router()
const studentsController=require('../Controllers/students')


router.post('/api/students/register',studentsController.register)
router.post('/api/students/login',studentsController.login)



module.exports=router