const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gradeSchema = new Schema({
    gradID:Number,
    examID:Number,
    class: String,
    subjectName: Number,
    studentName:String,
    studentPhone:Number,  
    link:String,
    studentCode:String,
    grade:Number
   
    
     
})

module.exports=mongoose.model('Grade',gradeSchema)