const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema({
    examID:Number,
    classID: Number,
    subjectID: Number,
    link:String,
    exameDate:Date,
    examTitle:String,
    totalGrad:Number,
    ExamMaker:String
   
   
    
     
})

module.exports=mongoose.model('Exams',examSchema)