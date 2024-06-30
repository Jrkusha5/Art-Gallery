const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image_url: { type: String, required: true },
  medium: String,
  dimensions: String,
  creation_date: Date
});

const Artwork = mongoose.model('Artwork', artworkSchema);
module.exports = Artwork;
