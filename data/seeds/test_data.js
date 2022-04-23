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
};
