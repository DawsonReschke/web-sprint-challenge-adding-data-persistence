const resourceModel = require('./model')
const validateResourceRequestBody = (req, res, next) => { 
    if(!req.body.resource_name) return next({status:400,message:'an error has occurred'})
    next()
}

const validateResourceIsUnique = async (req,res,next) => {
    const exists = await resourceModel.getByName(req.body.resource_name)
    if(exists) return next({status:401,message:'a resource with that name already exists'})
    next()
}

module.exports = {
    validateResourceRequestBody,
    validateResourceIsUnique
}