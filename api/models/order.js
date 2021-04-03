const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  }, // I create a relation between product and order by using ref.
  progress: { type: String, required: true },
  comment: { type: String, required: true }
});

module.exports = mongoose.model("Order", orderSchema);
