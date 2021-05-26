const knex = require('knex');
const config = require('../../../knexfile.js');
const db = knex(config.development);

module.exports = {
	add,
	find,
	findById,
	remove,
  update
};

async function add(user) {
	const [id] = await db('users').insert(user);

	return findById(id);
};

function find() {
	return db('users');
};

function findById(id) {
	return db('users')
		.where({ id })
		.first();
};

function remove(id) {
	return db('users')
		.where({ id })
		.del()
};

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}
