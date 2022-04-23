const projectModel = require('./model')

const validateProjectRequestBody = (req,res,next) => {
    if(!req.body.project_name) return next({status:400,message:'project_name is a required field'})
    next();
}

const validateProjectExists = async (req,res,next) => { 
    const exists = await projectModel.getById(req.body.project_id)
    if(!exists) return next({status:404,message:`The project with project_id : ${req.body.project_id} does not exist`})
    next()
}

module.exports = {
    validateProjectRequestBody,
    validateProjectExists
}