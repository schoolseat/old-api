// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/dev.sqlite',
			charset: 'utf8',

    },

    migrations: {
      directory: __dirname + '/src/database/migrations',
    },
  },
	useNullAsDefault: true,
};
