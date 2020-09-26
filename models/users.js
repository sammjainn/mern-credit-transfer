const mongoose = require('mongoose');
const schema = mongoose.Schema;

//create schema
const user = new schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    required: true
  }
});

module.exports = Users = mongoose.model('users', user);
