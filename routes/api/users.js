const express = require('express');
const router = express.Router();

//user model
const users = require('../../models/users');

// @route GET api/users
// @desc get all users
// @access public
router.get('/', (req, res) => {
  users
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
