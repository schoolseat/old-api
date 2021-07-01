/* eslint-disable no-unused-vars */
const router = require('express').Router();

const marked = require('marked');
const fs = require('fs');
const Users = require('../../database/models/Users');

router.get('/', (req, res) => {
  const path = `${__dirname}/ROUTES.md`;
  const file = fs.readFileSync(path, 'utf8');
  res.send(marked(file.toString()));
});
/**
 * @description Create user
*/
router.post('/users', (req, res) => {
  Users.add(req.body)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'cannot create user',
      });
    });
});

/**
 * @description show all users
 */

router.get('/users', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'cannot get users',
      });
    });
});

/**
 * @description show user by id
 */
router.get('/users/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((users) => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({
          message: 'this user is not exists',
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'cannot get user',
      });
    });
});

/**
 * @description delete user
 */

router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: 'the user has ben10 removed' });
      } else {
        res.status(500).json({ message: `error, cannot remove the user ${id}` });
      }
    })
    .catch((error) => {
      res.status(404).json({ message: 'unable to delete' });
    });
});

/**
 * @description update user
 */

router.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.update(id, changes)
    .then((users) => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: 'user not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'error updating user' });
    });
});

module.exports = router;
