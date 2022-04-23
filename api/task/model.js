// build your `Task` model here
const cfg = require('../../data/dbConfig')
const db = (query) => cfg(query || 'tasks')


/** 
* returns the tasks with the project name and desc 
*/
const getAll = () => { 
    return db('tasks as T')
    .join('projects as P','P.project_id','T.project_id')
    .select('T.task_id','T.task_description','T.task_notes','T.task_completed','P.project_name','P.project_description')
}

const insert = (task) => { 
    return db().insert(task)
}

module.exports = {
    getAll,
    insert,
}