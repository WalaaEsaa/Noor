const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quranAttendanceSchema = new Schema({
    class: String,
    teacherName: Number,
    studentName:String,
    studentPhone:Number,  
    attendance:String,
    dateDay:Date
   
    
     
})

module.exports=mongoose.model('QuranAttendance',quranAttendanceSchema)