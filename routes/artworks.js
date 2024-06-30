const express = require('express');
const router = express.Router();
const Artwork = require('../model/Artwork');

// Create a new artwork
router.post('/', async (req, res) => {
  try {
    const artwork = new Artwork(req.body);
    await artwork.save();
    res.status(201).send(artwork);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all artworks
router.get('/', async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.status(200).send(artworks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single artwork by ID
router.get('/:id', async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res.status(404).send();
    }
    res.status(200).send(artwork);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an artwork by ID
router.put('/:id', async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(req.params.id, 
      req.body, 
      { new: true, runValidators: true });
    if (!artwork) {
      return res.status(404).send();
    }
    res.status(200).send(artwork);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an artwork by ID
router.delete('/:id', async (req, res) => {
  try {
    const artwork = await Artwork.findByIdAndDelete(req.params.id);
    if (!artwork) {
      return res.status(404).send();
    }
    res.status(200).send(artwork);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
