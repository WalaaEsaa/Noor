const express = require('express')
const router = express.Router()
const quranScheduleController=require('../Controllers/quranSchedule')
const authntication=require('../Middleware/authntication')
//API to get all quranSchedule
//Api to get one quranSchedule according as teacherName or class name
//API to delete quranSchedule -admin
//API to update quranSchedule- login
//API to add quranSchedule -admin


//API to get all QuranSchedule-login
router.get('/api/quranSchedule',authntication, quranScheduleController.getAllQuranSchedule)
//Api to get one QuranSchedule according as teacher name - login
router.get('/api/quranSchedule',authntication,quranScheduleController.getOneTQuranSchedule)
//Api to get one QuranSchedule according as class name - login
router.get('/api/quranSchedule',authntication,quranScheduleController.getOneCQuranSchedule)
//API to delete QuranSchedule -executive supervisor
router.delete('/api/quranSchedule/:id',authntication,quranScheduleController.deleteQuranSchedule)
//API to update QuranSchedule- login
router.put('/api/quranSchedule/:id',authntication,quranScheduleController.updateQuranSchedule)

//API to add QuranSchedule - executive supervisor 
router.post('/api/quranSchedule',authntication,quranScheduleController.createQuranSchedule)


module.exports=router