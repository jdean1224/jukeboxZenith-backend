const express = require('express');
const cors = require('cors');
const artistRouter = require('./routes/artistRoutes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/artist', artistRouter);
app.use('/static', express.static('public'));

module.exports = app;
