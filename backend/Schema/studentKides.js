const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
const Schema = mongoose.Schema

const kidSchema = new Schema({
    name: String,
    nationalID: Number,
    phoneFather: Number,
    phoneWhats: Number,
    phoneTelgram: Number,
    gender:String,
    school:String,
    email: String,
    birthOfDate:Date,
    class:String,
    department:String,
    password: String,
    code:String
    
})
kidSchema.methods.comparePassword=async function (password) {
    //compare pass enter, pass save in db
    return await bcrypt.compare(password,this.password)
    
}
module.exports=mongoose.model('Kids',kidSchema)