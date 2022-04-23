// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const projectMiddlewares = require('./project_middlewares')
const projectModel = require('./model')

router.get('/projects', async (req,res) => {
    const projects = await projectModel.getAll()
    res.json(projects.map(project=>{
        return {...project, project_completed: !!project.project_completed}
    }))
})

router.post('/projects',projectMiddlewares.validateProjectRequestBody, async (req,res) => {
   const project_id = (await projectModel.insert(req.body))[0]
   res.json({...req.body,project_completed:!!req.body.project_completed, project_id})
})

module.exports = router