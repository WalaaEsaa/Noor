const {json} = require('body-parser')
const  studentKidesModel=require('../Schema/studentKides')
const bcrypt=require('bcryptjs') //bcryptJS
const jwt=require('jsonwebtoken')
const { message } = require('statuses')
   
exports.register = async function (req, res) {
    try{
        let newStudent=new studentKidesModel(req.body)
        //hash password
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        newStudent.password=hashedPassword

        let createStudent=await newStudent.save()
        res.json({message: "student added Successfully",student:createStudent})
    }catch(error){
        res.status(400).json({message:"error",data:error})

    }
}
 

exports.login = async function (req, res) {  
    try {  
        // Find student by national ID and wait for the result  
        let student = await studentKidesModel.findOne({ nationalID: req.body.nationalID });  
        // console.log('Student found:', student); // Log the retrieved student  
        if (!student) {  
            return res.status(401).json({ message: "Invalid national ID or password  " });  
        }  

        //retrive stored password from database into variable
        //async await here how?????
        const storedPassword=student.password
        let passwordCheck=  bcrypt.compare(req.body.password, storedPassword)
        if (!passwordCheck) {  
            return res.status(401).json({ message: "Invalid national ID or password " });  
        }  

                        
        
        // Generate JWT token  
        const token = jwt.sign({ _id: student._id, nationalID: student.nationalID }, 'secret');  
        res.status(200).json({  
            message: "Student logged in",  
            student: { 
                name: student.name, 
                nationalID: student.nationalID,
                 token }  
        });  
    } catch (err) {  
        console.error(err);  // Log the error for debugging  
        res.status(400).json({ message: "Error in login", error: "An error occurred during login" });  
    }  
}

