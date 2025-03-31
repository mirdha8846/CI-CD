import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>res.json({message:"this is app-1 hosted"}))

app.listen(3030,()=>console.log("server is runnig"));