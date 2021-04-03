//Mongoose works with Models & schemas (models my application data),
//I can define how objects stored in my database will looke like.
//The model I create will have different functions (save data, update data, fetch by id, merge etc)
//I've created product.js to define how the product should look like.

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: false },
  artist: { type: String, required: false },
  key: { type: String, required: false },
  comment: { type: String, required: false },
  intro: { type: String, required: false },
  verse: { type: String, required: false },
  bridge: { type: String, required: false },
  chorus: { type: String, required: false },
  outro: { type: String, required: false },
  link: { type: String, required: false },
  fileName: { type: String, required: false },

  // file: { type: String, required: false }, // Type is tring because it's just an URL.
});

module.exports = mongoose.model('Product', productSchema);
