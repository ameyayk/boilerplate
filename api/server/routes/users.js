const express = require('express');
const consola = require('consola');

const router = express.Router();
const { createUser } = require('../services/user-service');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send({ userId: 1, userName: 'Elon' });
});

/* create a user */
router.post('/', async (req, res) => {
  consola.info(req.body);
  try {
    const createdUser = await createUser(req.body);
    res.send({ userId: createdUser.userId, userName: createdUser.userName });
  } catch (err) {
    consola.error('Error while creating the user', err);
  }
});

module.exports = router;
