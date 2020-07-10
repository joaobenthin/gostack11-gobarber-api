import path from 'path';

module.exports = {
  type: 'sqlite3',
  database: path.resolve(__dirname, 'database.sqlite'),
};
