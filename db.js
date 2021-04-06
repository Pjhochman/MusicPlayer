const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(
  `mongodb+srv://Pj:pegasus@cluster0.7tkfb.mongodb.net/<dbname>?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err) : console.log('Connected to database'),
);

module.exports = mongoose;
