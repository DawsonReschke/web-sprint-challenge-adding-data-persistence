const cfg = require('../../data/dbConfig')
const db = () => cfg('resources')

const getAll = () => {
    return db()
}

const getByName = (resource_name) => {
    return db().where('resource_name',resource_name).first() 
}

const insert = (resource) => {
    return db().insert(resource)
}

module.exports = {
    getAll,
    insert,
    getByName,
}
