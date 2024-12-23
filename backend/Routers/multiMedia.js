const express = require('express')
const router = express.Router()
const multiMediaController=require('../Controllers/multiMedia')
const authntication=require('../Middleware/authntication')
//API to get all multiMedia
//Api to get one multiMedia
//API to delete multiMedia -admin
//API to update multiMedia- login
//API to add multiMedia -admin


//API to get all multiMedia-login
router.get('/api/multiMedia',authntication, multiMediaController.getAllMultiMedia)
//Api to get one multiMedia according class  login
router.get('/api/multiMedia',authntication,multiMediaController.getOneCMultiMedia)
//Api to get one multiMedia according  teacher login
router.get('/api/multiMedia',authntication,multiMediaController.getOneTMultiMedia)
//Api to get one multiMedia according  day login
router.get('/api/multiMedia',authntication,multiMediaController.getOneDMultiMedia)

//API to delete lectureSchedule -executive supervisor
router.delete('/api/multiMedia/:id',authntication,multiMediaController.deleteMultiMedia)
//API to update lectureSchedule- login
router.put('/api/multiMedia/:id',authntication,multiMediaController.updateMultiMedia)

//API to add multiMedia - executive supervisor 
router.post('/api/multiMedia',authntication,multiMediaController.createMultiMedia)


module.exports=router