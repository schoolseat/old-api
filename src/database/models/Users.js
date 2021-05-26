const knex = require('knex');
const config = require('../../../knexfile');

const db = knex(config.development);

/**
 * @returns UserData
 */
function find() {
  return db('users');
}
/**
 * @param {Number} id
 * @returns UserData
 */
function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

/**
 * @param {{
  "name": "username",
  "email": "user@email.com",
  "password": "passwd"
}
} user
 * @returns UserData
 */
async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

/**
 * @param {Number} id
 * @returns Null
 */
function remove(id) {
  return db('users')
    .where({ id })
    .del();
}
/**
 * @param {{
  "name": "newUsername",
  "email": "newUser@email.com",
  "password": "passwd"
}
} user
 * @returns UserData
 */
function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(() => findById(id));
}

module.exports = {
  add,
  find,
  findById,
  remove,
  update,
};
