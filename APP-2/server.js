import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>res.json({message:"this is app-2 hosted"}))

app.listen(3040,()=>console.log("server is runnig"));