const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quranSchema = new Schema({
    class: String,
    teacherName: Number,
    lederName: String,
    telegramLink:String,  
    time:String,
    day:String,
    year:String
     
     
})

module.exports=mongoose.model('Quran',quranSchema)