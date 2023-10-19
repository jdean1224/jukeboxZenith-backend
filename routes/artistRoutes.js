const express = require('express');
const artistController = require('../controllers/artistController');

const artistRouter = express.Router();

artistRouter
  .route('/')
  .get(artistController.getAllArtists)
  .post(artistController.createArtist);

artistRouter
  .route('/:id')
  .get(artistController.getArtist)
  .patch(artistController.updateArtist);

module.exports = artistRouter;
