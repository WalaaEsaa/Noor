const { message } = require('statuses')
const examSchema=require('../Schema/exams')



exports.getAllExams=async function(req,res){
    try{
        const exams=await examSchema.find()
        res.json({message:"Done",data:exams})
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }

}
//Api to get one exams according class name login
exports.getOneCExams=async function(req,res){
    try{
        const exam=await examSchema.find({class:req.body.class})
        res.json({message:"Done",data:exam})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

//Api to get one exams according sbject name and class login

exports.getOneSExams=async function(req,res){
    try{
        const exam=await examSchema.find({class:req.body.class, subjectName:req.body.subjectName})
        res.json({message:"Done",data:exam})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

exports.deleteExams=async function(req,res){
    try{
        await examSchema.findByIdAndDelete(req.params.id)
        res.json({message:"done",data:[]})

    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
   
    }
}
exports.updateExams=async function(req,res){
    try{
        await examSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})



    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})
 
    }
}
exports.createExams=async function(req,res){
    try{
        // console.log('role:  ' ,req.user.role)
        if(req.user.role==='admin'){
            const createdExam=await examSchema.create(req.body)
            res.json({message:"Done",data:createdExam})
        }
        else{
            res.status(400).json({message:"i don't have permission"})

        }
    }catch(error){
        res.status(400).json({message:"something went wrong",error:error})

    }
}

// //grade
// //API to get all grads-login
// exports.getAllGrads=async function(req,res){
//     try{
//         const exams=await examSchema.find()
//         res.json({message:"Done",data:exams})
//     }catch(error){
//         res.status(400).json({message:"something went wrong",error:error})

//     }

// }

// //API to get one grads according subject-login
// router.get('/api/grade/:subjectName',authntication, examsController.getOneSGrads)
// //API to get one grads according student code-login
// router.get('/api/grade/:studentCode',authntication, examsController.getOneSCGrads)
// //API to delete Grads -admin
// router.delete('/api/grade/:id',authntication,examsController.deleteGrads)
// //API to update Grads- login
// router.put('/api/grade/:id',authntication,examsController.updateGrads)
// //API to add Grads -admin
// router.post('/api/grade',authntication,examsController.createGrads)