const express = require('express')
// const router = express.Router()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const cors=require('cors')
app.use(bodyparser.json())
// Use CORS with specific domains or credentials if needed  
app.use(cors({  
    origin: 'http://localhost:3000', // You can also use '*' to allow all origins  
}));  

const examsRouter=require('./Routers/exams')
const lectureScheduleRouter=require('./Routers/lectureSchedule')
const multiMediaRouter=require('./Routers/multiMedia')
const quranAttendanceRouter=require('./Routers/quranAttendance')
const quranScheduleRouter=require('./Routers/quranSchedule')
const studentKidesRouter=require('./Routers/studentKides')
const studentsRouter=require('./Routers/students')
const supervisorsRouter=require('./Routers/supervisors')
const teachersRouter=require('./Routers/teachers')
// const bookRouter=require('./Routers/books')


// connect uri from mongodb site
const uri = "mongodb+srv://walaaEsaa:Walaa4495@nooracadmy.vu4n1.mongodb.net/?retryWrites=true&w=majority&appName=noorAcadmy";
//import schames
const studentSchema = require('./Schema/students') 
const teacherSchema = require('./Schema/teachers') 
const studentKidsSchema = require('./Schema/studentKides') 
const supervisorsSchema = require('./Schema/supervisors') 
const examsSchema = require('./Schema/exams') 
const lectureScheduleSchema = require('./Schema/lectureSchedule') 
const multiMediaKidsSchema = require('./Schema/multiMedia') 
const quranAttendancesSchema = require('./Schema/quranAttendance') 
const quranScheduleSchema = require('./Schema/quranSchedule') 

//connection function
const connectToDB = async () => {
    try {
        //connect to db
        mongoose.set('strictQuery', false)
        mongoose.connect(uri)
        console.log('connected to db')
    } catch (error) {
        console.log('errror', error)
        process.exit()
    }


}

app.use('/',examsRouter)
app.use('/',lectureScheduleRouter)
app.use('/',multiMediaRouter)
app.use('/',quranAttendanceRouter)
app.use('/',quranScheduleRouter)
app.use('/',studentKidesRouter)
app.use('/',supervisorsRouter)
app.use('/',teachersRouter)
app.use('/',studentsRouter)
// app.use('/',bookRouter)
connectToDB()



app.listen('9092')

//lect9
//book mangment api's
//secure our api's
//roles صالحيات لليوسير 