const { message } = require('statuses')
const multiMediaSchema=require('../Schema/multiMedia')


//API to get all multiMedia-login
exports.getAllMultiMedia=async function(req,res){
    try{
        const multiMedia=await multiMediaSchema.find()
        res.json({message:"Done",data:multiMedia})
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }

}
 //Api to get one multiMedia according class  login
 exports.getOneCMultiMedia=async function(req,res){
    try{
        const multiMedia=await multiMediaSchema.find({class:req.body.class})
        res.json({message:"Done",data:multiMedia})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one multiMedia according  teacher login

exports.getOneTMultiMedia=async function(req,res){
    try{
        const multiMedia=await multiMediaSchema.find({teacherName:req.body.teacherName})
        res.json({message:"Done",data:multiMedia})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one multiMedia according  day login
exports.getOneDMultiMedia=async function(req,res){
    try{
        const multiMedia=await multiMediaSchema.find({day:req.body.day})
        res.json({message:"Done",data:multiMedia})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//API to delete lectureSchedule -executive supervisor

exports.deleteMultiMedia=async function(req,res){
    try{
        await multiMediaSchema.findByIdAndDelete(req.params.id)
        res.json({message:"done",data:[]})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
   
    }
}

//API to update lectureSchedule- login

exports.updateMultiMedia=async function(req,res){
    try{
        await multiMediaSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})



    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
 
    }
}

//API to add multiMedia - executive supervisor 

exports.createMultiMedia=async function(req,res){
    try{
        if(req.user.role==='admin'){
            const createdMultiMedia=await multiMediaSchema.create(req.body)
            res.json({message:"Done",data:createdMultiMedia})
        }
        else{
            res.status(400).json({message:"i don,t have permission"})

        }
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}









