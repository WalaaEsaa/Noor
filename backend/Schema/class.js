const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classSchema = new Schema({
    classID:Number,
    className: String,
    quranPortion: String
   
    
     
})

module.exports=mongoose.model('Class',classSchema)