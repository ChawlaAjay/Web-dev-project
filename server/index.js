import {CONNECTION} from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/post.js'



const app = express()

app.use('/post',postRoutes)


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())


const CONNECTION_URL=process.env.CONNECTION

const PORT=process.env.PORT || 5000

mongoose.connect(   CONNECTION_URL,{
    
    useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server running on port : ${PORT}`)))
    .catch((error=>console.log(error)))

// mongoose.set('useFindAndModify',false);