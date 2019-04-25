const express = require('express');
const router = express.Router();
const { addPage } = require('../views');

router.get('/', async (req, res) => {
  res.send('got to GET /wiki');
});

router.post('/', async (req, res) => {
  res.send('got to POST /wiki');
});

router.get('/add', async (req, res) => {
  res.send(addPage(''));
});

module.exports = router;
