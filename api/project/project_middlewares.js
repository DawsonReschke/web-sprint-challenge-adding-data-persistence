const validateProjectRequestBody = (req,res,next) => {
    if(!req.body.project_name) return next({status:400,message:'project_name is a required field'})
    next();
}

module.exports = {
    validateProjectRequestBody
}