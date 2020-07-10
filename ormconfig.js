const path = require('path');

module.exports = {
  type: 'sqlite',
  database: path.resolve(__dirname, 'database.sqlite'),
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
