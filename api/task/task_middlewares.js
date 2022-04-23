const validateTaskRequestBody = (req,res,next) => { 
    if(!req.body.task_description || !req.body.project_id) return next({status:400,message:'project_id and task_description are required fields'})
    next()
}

module.exports = {
    validateTaskRequestBody
}