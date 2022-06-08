const express=require('express')
const app=express()
const cors=require('cors')
const dotenv=require('dotenv')
const randomProductRoutes=require('./routes/RandomProduct')
const { default: mongoose } = require('mongoose')

dotenv.config()

app.use(express.json())
app.use(cors())

app.use('/api/randomProduct',randomProductRoutes)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected")

    app.listen(process.env.PORT ,5000,()=>{
        console.log("Server running on port 5000")
       })
       
}).catch((err)=>{
 console.log("db error")
})

