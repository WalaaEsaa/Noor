const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lectureSchema = new Schema({
    lectName: String,
    teacherName: Number,
    subervisorName: String,
    lederName:String,
    zoomResponsible:String,
    zoomRoom:String,
    zoomLink:String,
    time:String,
    day:String
   
    
     
})

module.exports=mongoose.model('Lectures',lectureSchema)