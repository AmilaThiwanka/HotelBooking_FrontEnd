const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true }, // URL to the image file
  type: { type: String, required: true }, // e.g., "Luxury", "Standard", etc.
});


module.exports = mongoose.model('Room',roomSchema);