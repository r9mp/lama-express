const environment = process.env.NODE_ENV || 'development';
const client = process.env.DB_CLIENT || 'pg';
const connection = {
  host: 'localhost',
  database: process.env.DB_NAME || 'llama',
  user: process.env.DB_USER || 'llama',
  password: process.env.DB_PASSWORD || 'llama',
};

const migrations = {
  directory: './db/migrations',
  tableName: 'knex_migrations',
};
const seeds = {
  directory: './db/seeds',
};

const configurations = {
  development: {
    client,
    connection,
    migrations,
    seeds,
  },
  staging: {
    client,
    connection,
    migrations,
    seeds,
    pool: {
      min: 1,
      max: 2,
    },
  },
  iso: {
    client,
    connection,
    migrations,
    seeds,
    pool: {
      min: 2,
      max: 10,
    },
  },
  production: {
    client,
    connection,
    migrations,
    seeds,
    pool: {
      min: 2,
      max: 10,
    },
  },
};

export default configurations[environment];
