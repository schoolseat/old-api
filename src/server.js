const express = require('express') 
const app = express();
const Users = require('./database/models/Users');

app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: "see readme.md for more information" })
})

app.post('/api/users', (req, res) => {
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

app.get('/api/users', (req, res) => {
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

app.get('/api/users/:id', (req, res) => {
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
			message: "cannot get users"
		});
	})

});

app.listen(3333, () => console.log("API Online - 🚀"));
