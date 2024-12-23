const express = require('express')
const router = express.Router()
const examsController=require('../Controllers/exams')
const authntication=require('../Middleware/authntication')
//API to get all exams
//Api to get one exams
//API to delete exams -admin
//API to update exams- login
//API to add exams -admin


//exam
//API to get all exams-login
router.get('/api/exams',authntication, examsController.getAllExams)
//Api to get one exams according class name login
router.get('/api/exams',authntication,examsController.getOneCExams)
//Api to get one exams according sbject name and class login
router.get('/api/exams',authntication,examsController.getOneSExams)
//API to delete exams -admin
router.delete('/api/exams/:id',authntication,examsController.deleteExams)
//API to update exams- login
router.put('/api/exams/:id',authntication,examsController.updateExams)
//API to add exams -admin
router.post('/api/exams',authntication,examsController.createExams)

// //grade
// //API to get all grads-login
// router.get('/api/grade',authntication, examsController.getAllGrads)
// //API to get one grads according subject-login
// router.get('/api/grade/:subjectName',authntication, examsController.getOneSGrads)
// //API to get one grads according student code-login
// router.get('/api/grade/:studentCode',authntication, examsController.getOneSCGrads)
// //API to delete Grads -admin
// router.delete('/api/grade/:id',authntication,examsController.deleteGrads)
// //API to update Grads- login
// router.put('/api/grade/:id',authntication,examsController.updateGrads)
// //API to add Grads -admin
// router.post('/api/grade',authntication,examsController.createGrads)


module.exports=router