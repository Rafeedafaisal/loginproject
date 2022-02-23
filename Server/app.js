const express=require("express")
const cors=require('cors')
const app=express()
app.use(cors())
app.use("/login",(req,res)=>{
    res.send({
        token:'test123'
    })
})
app.listen(8181,()=>console.log('API is running...http://localhost:8181/Login'))