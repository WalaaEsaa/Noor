const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sbjectSchema = new Schema({
   subjectID:Number,
   // classID:Number,
   subjectName: String
   
   
    
     
})

module.exports=mongoose.model('Subject',sbjectSchema)