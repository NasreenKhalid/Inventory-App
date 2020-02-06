const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  qty: Number,
  qtysold: Number,
  pricesold: Number,
  dateadded: Date
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = { MenuItem };
