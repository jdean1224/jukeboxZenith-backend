const express = require('express');
const artistController = require('../controllers/artistController');

const artistRouter = express.Router();

artistRouter
  .route('/')
  .get(artistController.getAllArtists)
  .post(artistController.createArtist);

module.exports = artistRouter;
