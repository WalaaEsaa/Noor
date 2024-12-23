const { message } = require('statuses')
const quranScheduleSchema=require('../Schema/quranSchedule')


//API to get all QuranSchedule-login
exports.getAllQuranSchedule=async function(req,res){
    try{
        const quranSchedule=await quranScheduleSchema.find()
        res.json({message:"Done",data:quranSchedule})
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }

}
//Api to get one QuranSchedule according as teacher name - login
exports.getOneTQuranSchedule=async function(req,res){
    try{
        const quranSchedule=await quranScheduleSchema.find({teacherName:req.body.teacherName})
        res.json({message:"Done",data:quranSchedule})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one QuranSchedule according as class name - login
 exports.getOneCQuranSchedule=async function(req,res){
    try{
        const quranSchedule=await quranScheduleSchema.find({class:req.body.class})
        res.json({message:"Done",data:quranSchedule})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//API to delete QuranSchedule -executive supervisor

exports.deleteQuranSchedule=async function(req,res){
    try{
        await quranScheduleSchema.findByIdAndDelete(req.params.id)
        res.json({message:"done",data:[]})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
   
    }
}

//API to update QuranSchedule- login

exports.updateQuranSchedule=async function(req,res){
    try{
        await quranScheduleSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})



    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
 
    }
}

//API to add QuranSchedule - executive supervisor 

exports.createQuranSchedule=async function(req,res){
    try{
        if(req.user.role==='admin'){
            const createdQuranSchedule=await quranScheduleSchema.create(req.body)
            res.json({message:"Done",data:createdQuranSchedule})
        }
        else{
            res.status(400).json({message:"i don,t have permission"})

        }
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}









