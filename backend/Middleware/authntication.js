const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    
    try{
        console.log(req.headers); // Log all headers
        const fullToken=req.headers.authorization
        const token=fullToken?.split(' ')[1]
        // console.log('fullToken: ',fullToken)
        // console.log('token: ', token)
        if(!token) res.status(400).send("Acess denied")
        const decodedToken=jwt.verify(token,'secret')
        // console.log('decodedToken: ',decodedToken); // Log the decoded token
        req.user=decodedToken
        next()


    }catch(err){
        console.log("error",err)
        res.status(400).send("Invaled Token")
    }
}
// module.exports={authntication}