const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');
const { db } = require('./models');
db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/wikistack'));

app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
