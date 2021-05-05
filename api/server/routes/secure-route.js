const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/data', (req, res) => {
  res.send({ titans: ['Elon', 'Bill', 'Steve', 'Satya'] });
});

module.exports = router;
