const {json} = require('body-parser')
const  supervisorsModel=require('../Schema/supervisors')
const bcrypt=require('bcryptjs') //bcryptJS
const jwt=require('jsonwebtoken')
const { message } = require('statuses')
   
exports.register = async function (req, res) {
    try{
        let newSupervisors=new supervisorsModel(req.body)
        //hash password
                const hashedPassword=await bcrypt.hash(req.body.password,10)
                newSupervisors.password=hashedPassword

        let createSupervisors=await newSupervisors.save()
        res.json({message: "Supervisors added Successfully",student:createSupervisors})
    }catch(error){
        res.status(400).json({message:"error",data:error})

    }
}
 

exports.login = async function (req, res) {  
    try {  
        // Find student by national ID and wait for the result  
        let supervisors = await supervisorsModel.findOne({ email: req.body.email });  
        // console.log('Student found:', student); // Log the retrieved student  
        if (!supervisors) {  
            return res.status(401).json({ message: "Invalid national ID or password  " });  
        }  

        //retrive stored password from database into variable
        //async await here how?????
        const storedPassword=supervisors.password
        let passwordCheck=  bcrypt.compare(req.body.password, storedPassword)
        if (!passwordCheck) {  
            return res.status(401).json({ message: "Invalid national ID or password " });  
        }  

                        
        
        // Generate JWT token  
        const token = jwt.sign({ _id: supervisors._id,role: supervisors.role, email: supervisors.email }, 'secret');  
        res.status(200).json({  
            message: "supervisors logged in",  
            student: { 
                name: supervisors.name, 
                email: supervisors.email,
                role: supervisors.role,
                 token }  
        });  
    } catch (err) {  
        console.error(err);  // Log the error for debugging  
        res.status(400).json({ message: "Error in login", error: "An error occurred during login" });  
    }  
}

