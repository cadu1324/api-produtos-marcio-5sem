const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  color: String,
  weight: Number,
  type: String,
  price: Number,
  registerDate: Date
});

module.exports = mongoose.model('Product', ProductSchema);
