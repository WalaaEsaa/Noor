const { message } = require('statuses')
const quranAttendanceSchema=require('../Schema/quranAttendance')


//API to get all quranAttendance-login
exports.getAllQuranAttendance=async function(req,res){
    try{
        const quranAttendance=await quranAttendanceSchema.find()
        res.json({message:"Done",data:quranAttendance})
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }

}
//Api to get one quranAttendance according class and teacher login
exports.getOneQuranAttendance=async function(req,res){
    try{
        const quranAttendance=await quranAttendanceSchema.find({class:req.body.class,teacherName:req.body.teacherName})
        res.json({message:"Done",data:quranAttendance})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one quranAttendance according  student to show in student page - login


//API to delete quranAttendance -executive supervisor

exports.deleteQuranAttendance=async function(req,res){
    try{
        await quranAttendanceSchema.findByIdAndDelete(req.params.id)
        res.json({message:"done",data:[]})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
   
    }
}

//API to update quranAttendance- login

exports.updateQuranAttendance=async function(req,res){
    try{
        await quranAttendanceSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})



    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
 
    }
}

//API to add quranAttendance - executive supervisor 

exports.createQuranAttendance=async function(req,res){
    try{
        if(req.user.role==='admin'){
            const createdQuranAttendance=await quranAttendanceSchema.create(req.body)
            res.json({message:"Done",data:createdQuranAttendance})
        }
        else{
            res.status(400).json({message:"i don,t have permission"})

        }
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}









