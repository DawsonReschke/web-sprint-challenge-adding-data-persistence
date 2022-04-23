/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {project_id: 1, project_name: 'First project',project_completed:0,project_description:'This is my first project'},
    {project_id: 2, project_name: 'Second project',project_completed:1,project_description:'This is my first project'},
    {project_id: 3, project_name: 'Third project',project_completed:0},
  ]);
  await knex('resources').del()
  await knex('resources').insert([
    {resource_id: 0,resource_name:'First Resource',resource_description:'First resource description'},
    {resource_id: 1,resource_name:'Second Resource',resource_description:'Second resource description'},
    {resource_id: 2,resource_name:'Third Resource'},
  ])
  await knex('tasks').del()
  await knex('tasks').insert([
    {task_id: 0,task_description:'First Description',task_completed:0,task_notes:'first notes',project_id:1},
    {task_id: 1,task_description:'Second Description',task_completed:1,project_id:1},
    {task_id: 2,task_description:'Third Description',task_completed:0,project_id:2},
  ])
};
