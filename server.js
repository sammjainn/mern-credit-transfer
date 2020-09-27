const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const path = require('path');

// Env variables in .env file
require('dotenv').config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//DB Config
const db = process.env.ATLAS_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connected successfully');
});

//Routes
app.use('/users', require('./routes/api/users'));
app.use('/transfer', require('./routes/api/transfer'));
app.use('/transactions', require('./routes/api/transactions'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running at port ${port}`));
