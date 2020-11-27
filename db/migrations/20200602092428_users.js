export const up = (knex) => {
  return knex.schema.createTable('users', (t) => {
    t.increments('id');
    t.string('auth0_id');
  });
};

export const down = (knex) => {
  return knex.schema.dropTable('users');
};
