const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mediaSchema = new Schema({
    class: String,
    subjectName: Number,
    lectName:String,
    teacherName:String,
    link:String,
    date:String
     
     
})

module.exports=mongoose.model('multiMedia',mediaSchema)