require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors());
// //Funktion för att tillåta cors. 
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

//Mongoose connect till mongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Ansluten till databasen'))

app.use(express.json())
const CoursesRouter = require('./routes/courses')
app.use('/courses', CoursesRouter)

app.listen(3000)