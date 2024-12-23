const express = require('express')
const router = express.Router()
const quranAttendanceController=require('../Controllers/quranAttendance')
const authntication=require('../Middleware/authntication')
//API to get all quranAttendance
//Api to get one quranAttendance
//API to delete quranAttendance -admin
//API to update quranAttendance- login
//API to add quranAttendance -admin


//API to get all quranAttendance-login
router.get('/api/quranAttendance',authntication, quranAttendanceController.getAllQuranAttendance)
//Api to get one quranAttendance according class and teacher login
router.get('/api/quranAttendance',authntication,quranAttendanceController.getOneQuranAttendance)
//API to delete quranAttendance -executive supervisor
router.delete('/api/quranAttendance/:id',authntication,quranAttendanceController.deleteQuranAttendance)
//API to update quranAttendance- login
router.put('/api/quranAttendance/:id',authntication,quranAttendanceController.updateQuranAttendance)

//API to add quranAttendance - executive supervisor 
router.post('/api/quranAttendance',authntication,quranAttendanceController.createQuranAttendance)


module.exports=router