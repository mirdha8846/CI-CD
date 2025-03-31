import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>res.json({message:"ci-cd working perfectly"}))

app.listen(3030,()=>console.log("server is runnig"));