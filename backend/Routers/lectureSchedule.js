const express = require('express')
const router = express.Router()
const lectureScheduleController=require('../Controllers/lectureSchedule')
const authntication=require('../Middleware/authntication')
//API to get all lectureSchedule
//Api to get one lectureSchedule
//API to delete lectureSchedule -admin
//API to update lectureSchedule- login
//API to add lectureSchedule -admin


//API to get all lectureSchedule-login
router.get('/api/lectureSchedule',authntication, lectureScheduleController.getAllLectureSchedule)
//Api to get one lectureSchedule according class  login
router.get('/api/lectureSchedule',authntication,lectureScheduleController.getOneCLectureSchedule)
//Api to get one lectureSchedule according  teacher login
router.get('/api/lectureSchedule',authntication,lectureScheduleController.getOneTLectureSchedule)
//Api to get one lectureSchedule according  day login
router.get('/api/lectureSchedule',authntication,lectureScheduleController.getOneDLectureSchedule)

//API to delete lectureSchedule -executive supervisor
router.delete('/api/lectureSchedule/:id',authntication,lectureScheduleController.deleteLectureSchedule)
//API to update lectureSchedule- login
router.put('/api/lectureSchedule/:id',authntication,lectureScheduleController.updateLectureSchedule)

//API to add lectureSchedule - executive supervisor 
router.post('/api/lectureSchedule',authntication,lectureScheduleController.createLectureSchedule)


module.exports=router