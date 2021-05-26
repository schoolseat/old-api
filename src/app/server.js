const express = require('express') 
const app = express();
const Users = require('../database/models/Users.js');
const UsersRouter = require('./routes/UsersRouter.js');

app.use(express.json());
app.use('/api', UsersRouter)

app.listen(3333, () => console.log("API Online - 🚀"));
