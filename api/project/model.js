// build your `Project` model here
const cfg = require('../../data/dbConfig')
const db = () => cfg('projects')

const getAll = () => { 
    return db()
}

const getById = id => {
    return db().where('project_id',id).first()
}

const insert = (project) => {
    return db().insert(project)
}

module.exports = {
    getAll,
    insert,
    getById
}