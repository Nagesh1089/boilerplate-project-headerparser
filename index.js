// init project
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// serve static files
app.use(express.static('public'));

// serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint: /api/whoami
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({ ipaddress, language, software });
});

// listen for requests
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
