const router = require('express').Router();
const Users = require('../../database/models/Users.js');

router.get('/', (req, res) => {
	res.json({ message: "see readme.md for more information" })
})

// create user

router.post('/users', (req, res) => {
	Users.add(req.body)
	.then(Users => {
		res.status(200).json(Users)
	})
	.catch(error => {
		res.status(500).json({
			message: "cannot create user"
		});
	});
});

// show all users

router.get('/users', (req, res) => {
	Users.find()
	.then(Users => {
		res.status(200).json(Users)
	})
	.catch(error => {
		res.status(500).json({
			message: "cannot get users"
		});
	})
});

// show user by id

router.get('/users/:id', (req, res) => {
	
const { id } = req.params;

	Users.findById(id)
	.then(Users => {
		if(Users) {
			res.status(200).json(Users)
		} else {
			res.status(404).json({
				message: "this user is not exists"
		});
	}
})
	.catch(error => {
		res.status(500).json({
			message: "cannot get user"
		});
	})
});

// delete user

router.delete('/users/:id', (req, res) => {
	const { id } = req.params;

	Users.remove(id)
	.then(count => {
		if(count > 0) {
			res.status(200).json({ message: "the user is ben10 removed"} )} 
				else {
			res.status(500).json({ message: `error, cannot remove the user ${id}`});
	}})
	.catch(error => {
		res.status(404).json({ message: "unable to delete"});
	})
});

// update user

router.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.update(id, changes)
  .then(Users => {
    if (Users) {
      res.status(200).json(Users);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  })
  .catch(error => {
    res.status(500).json({ message: "error updating user"});
  });
});

module.exports = router;
