const express = require('express');
const router = express.Router();

//user model
const transfers = require('../../models/transactions');
const user = require('../../models/users');

router.post('/:ids/:idr', (req, res) => {
  const newtransaction = new transfers({
    sentBy: req.body.sentBy,
    sentTo: req.body.sentTo,
    credits: req.body.credits
  });
  newtransaction
    .save()
    .then((transfer) => res.json(transfer))
    .catch((err) => console.log('error'));
});
router.put('/:ids/:idr', (req, res) => {
  user
    .updateOne(
      { _id: req.params.ids },
      { $inc: { credits: -req.body.credits } }
    )
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ error: err }));
  user
    .updateOne({ _id: req.params.idr }, { $inc: { credits: req.body.credits } })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ error: err }));
});

module.exports = router;
