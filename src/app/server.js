const express = require('express');
const { networkInterfaces } = require('os');

const nets = networkInterfaces();

const app = express();
// const Users = require('../database/models/Users');
const UsersRouter = require('./routes/UsersRouter');

app.use(express.json());
app.use('/api', UsersRouter);

app.listen(3333, () => console.log(`API Online - 🚀 - http://${nets.wlp1s0[0].address}:3333/api or http://localhost:3333/api`));
