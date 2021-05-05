const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send({ userId: 1, userName: 'Elon' });
});

module.exports = router;
