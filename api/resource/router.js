// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const resourceModel = require('./model') 
const {
    validateResourceRequestBody,
    validateResourceIsUnique
} = require('./resource_middlewares')
router.get('/resources', async (req,res) => {
    res.json(await resourceModel.getAll())
})


router.post('/resources',validateResourceRequestBody,validateResourceIsUnique, async (req,res) => {
    const resource_id = (await resourceModel.insert(req.body))[0]
    res.json({...req.body,resource_id})
})

module.exports = router