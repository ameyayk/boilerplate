/* eslint-disable no-underscore-dangle */
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { pipeFile } = require('../services/file-reader');

const router = express.Router();

/* create a user */
router.post('/register', passport.authenticate('signup', { session: false }), async (req, res) => {
  res.json({
    message: 'registered',
    user: req.user,
  });
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user) => {
    try {
      if (err || !user) {
        const error = new Error('An error occurred.');
        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, 'TOP_SECRET');

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
    return next();
  })(req, res, next);
});

router.all('/read', async (res, req, next) => {
  await pipeFile('logfile', res);
});

module.exports = router;
