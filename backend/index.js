const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { DB_URL, PORT, CORS_OPTIONS, NODE_ENV } = require('./config/config');
const server = express();

server.use(cors(NODE_ENV === 'development' ? CORS_OPTIONS.corsOptionsDev : CORS_OPTIONS.corsOptionsProd));

mongoose.connect(DB_URL)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

server.use(express.json());

server.use('/api', require('./routes'));

server.listen(PORT, () => {
    console.log('Server Port 4000');
});