const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sbjectTeacherSchema = new Schema({
   subjectID:Number,
   teacherID:Number,
   classID:Number


   
   
    
     
})

module.exports=mongoose.model('SubjectTeacher',sbjectTeacherSchema)