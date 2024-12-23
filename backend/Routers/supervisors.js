const express = require('express')
const router = express.Router()
const supervisorsController=require('../Controllers/supervisors')


router.post('/api/supervisors/register',supervisorsController.register)
router.post('/api/supervisors/login',supervisorsController.login)



module.exports=router