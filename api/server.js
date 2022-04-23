// build your server here and require it from index.js
const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')
const server = express()
server.use(express.json())

server.use('/api',projectRouter,resourceRouter,taskRouter)

server.use((err,req,res,next)=>{
    if(!err.status || !err.message) return res.status(500).json({message:'internal server error'})
    res.status(err.status).json({message:err.message})
})
module.exports = server; 