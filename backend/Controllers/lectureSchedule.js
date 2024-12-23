
const { message } = require('statuses')
const lectureScheduleSchema=require('../Schema/lectureSchedule')


//API to get all lectureSchedule-login
exports.getAllLectureSchedule=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find()
        res.json({message:"Done",data:quranAttendance})
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }

}
//Api to get one quranAttendance according class name login
exports.getOneCLectureSchedule=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find({class:req.body.class})
        res.json({message:"Done",data:quranAttendance})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one lectureSchedule according  teacher login

exports.getOneTLectureSchedule=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find({teacherName:req.body.teacherName})
        res.json({message:"Done",data:quranAttendance})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one lectureSchedule according  day login
exports.getOneDLectureSchedule=async function(req,res){
    try{
        const quranAttendance=await lectureScheduleSchema.find({day:req.body.day})
        res.json({message:"Done",data:quranAttendance})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//API to delete lectureSchedule -executive supervisor

exports.deleteLectureSchedule=async function(req,res){
    try{
        await lectureScheduleSchema.findByIdAndDelete(req.params.id)
        res.json({message:"done",data:[]})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
   
    }
}

//API to update lectureSchedule- login

exports.updateLectureSchedule=async function(req,res){
    try{
        await lectureScheduleSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})



    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
 
    }
}

//API to add lectureSchedule - executive supervisor 

exports.createLectureSchedule=async function(req,res){
    try{
        if(req.user.role==='admin'){
            const createdLectureSchedule=await lectureScheduleSchema.create(req.body)
            res.json({message:"Done",data:createdLectureSchedule})
        }
        else{
            res.status(400).json({message:"i don,t have permission"})

        }
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}







