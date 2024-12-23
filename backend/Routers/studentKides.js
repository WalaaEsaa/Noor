const express = require('express')
const router = express.Router()
const studentKidesController=require('../Controllers/studentKides')


router.post('/api/studentKides/register',studentKidesController.register)
router.post('/api/studentKides/login',studentKidesController.login)



module.exports=router