/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  /** 
  * project: id, name, description, completed
  * resource:id, name, description, *contained in step? 
  * task:    id, description, completed, notes, [project][id] 
  */
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name',64).unique().notNullable()
        tbl.string('project_description')
        tbl.integer('project_completed',1).notNullable().defaultTo(0)
    })
    .createTable('tasks', tbl => { 
        tbl.increments('task_id')
        tbl.string('task_description',64).notNullable()
        tbl.string('task_notes',64)
        tbl.integer('task_completed',1).notNullable().defaultTo(0)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
    })
    .createTable('resources',tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name',64).notNullable().unique()
        tbl.string('resource_description',128)
    })
    .createTable('project_resources',tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects'); 
};
