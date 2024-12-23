const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
const Schema = mongoose.Schema

const supervisorSchema = new Schema({
    name: String,
    phoneWhats: Number,
    phoneTelgram: Number,
    email: String,
    time:String,
    day:String,
    department:String,
    password: String,
    role:String
    
})
supervisorSchema.methods.comparePassword=async function (password) {
    //compare pass enter, pass save in db
    return await bcrypt.compare(password,this.password)
    
}
module.exports=mongoose.model('Supervisors',supervisorSchema)