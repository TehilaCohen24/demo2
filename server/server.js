require("dotenv").config()
const express=require("express")
const cors=require("cors")
const { default: mongoose } = require("mongoose")

const corsOptions=require("./config/corsOptions")
const connectDB=require('./config/dbConn')

const PORT=process.env.PORT||3262

const app=express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/photos",require("./routes/photoRouts"))
app.use("/api/users",require("./routes/userRouts"))
app.use("/api/todos",require("./routes/todoRouts"))
app.use("/api/posts",require("./routes/postRouts"))

app.get("/",(req,res)=>{
    res.send("this is homepage")
})
mongoose.connection.once('open',()=>{
    console.log('Connected')
    app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})
})
mongoose.connection.on('error',err=>{
    console.log(err)
})