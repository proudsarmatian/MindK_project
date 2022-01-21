const express = require('express');
const bodyParser = require('body-parser');

const config = require('./services/config');
const usersRoutes = require('./routes/users');

const app = express();
const port = config.appPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users/newUser', usersRoutes);
app.use('/users', usersRoutes);
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log('server started');
});
