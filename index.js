const express = require('express');
const keys = require('./config/keys');
const colors = require('colors');

const mongoose = require('mongoose');
require('./models/Dock');
mongoose.connect(keys.mogno);

const Dock = mongoose.model('docks');

const app = express();

app.get('/populate', async (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('[Server] '.magenta + 'Server started on port ' + PORT);
});
