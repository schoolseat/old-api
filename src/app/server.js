const express = require('express');

const app = express();
const Users = require('../database/models/Users');
const UsersRouter = require('./routes/UsersRouter');

app.use(express.json());
app.use('/api', UsersRouter);

app.listen(3333, () => console.log('API Online - 🚀'));
