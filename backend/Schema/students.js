const mongoose = require('mongoose');  
const bcrypt = require('bcryptjs');  
const Schema = mongoose.Schema;  
// Define the student schema  
const studentSchema = new Schema({  
    name: { type: String, required: true },  
    nationalID: { type: Number, unique: true, required: true },  
    phoneWhats: { type: String },  
    phoneTelgram: { type: String },  
    email: { type: String, required: true, unique: true },  
    birthOfDate: { type: Date },  
    class: { type: String },  
    department: { type: String },  
    password: { type: String, required: true },
    note:String, //على حسب اختبار تحديد المستوى according for level test 
    code: { type: String }  
});  


// Pre-save hook to hash the password  
studentSchema.pre('save', async function(next) {  
    if (this.isModified('password')) {  
        this.password = await bcrypt.hash(this.password,10);  
    }  
    next();  
}); 
//********************************************************************** */ 
// write compare method here when compare password return false every time 
// solution retrive hashed password from database in variable next compare it
//can not retrive pass here , reetrive it in controller log in method
//*********************************************************** */
// Instance method for comparing passwords  
// studentSchema.methods.comparePassword = async function(candidatePassword) { 
//     console.log('candidatePassword',candidatePassword)
//     console.log('this.password',this.password)
//     // let pass=this.password
//     const dbPass=studentSchema.password
//     console.log(dbPass)

//     return await bcrypt.compare(candidatePassword, dbPass);  
// };  

// Export the model  
module.exports = mongoose.model('Students', studentSchema);