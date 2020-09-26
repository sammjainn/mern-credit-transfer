const express = require('express');
const router = express.Router();

//user model
const transactions = require('../../models/transactions');

router.get('/', (req, res) => {
  transactions.find().then((transaction) => res.json(transaction));
});

module.exports = router;
