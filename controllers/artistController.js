const Artist = require('../models/artistModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.createArtist = catchAsync(async (req, res, next) => {
  const newArtist = await Artist.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { artist: newArtist },
  });
});

exports.getAllArtists = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Artist.find(), req.body)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const artists = await features.query;

  res.status(200).json({
    status: 'success',
    results: artists.length,
    data: { artists },
  });
});
