// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const tasksModel = require('./model')
const {
    validateTaskRequestBody,
} = require('./task_middlewares')
const {validateProjectExists} = require('../project/project_middlewares')


router.get('/tasks', async (req,res) => {
    const tasks = await tasksModel.getAll()
    res.json(tasks.map(task=>{
        return {...task, project_completed:!!task.project_completed, task_completed: !!task.task_completed}
    }))
})


router.post('/tasks', validateTaskRequestBody,validateProjectExists, async (req,res) => {
    const task_id = (await tasksModel.insert(req.body))[0]
    res.json({
        ...req.body,task_id,
        task_completed: !!req.body.task_completed,
        task_notes: req.body.task_notes || null
    })
})

module.exports = router