const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/static', express.static(
  path.join(__dirname, 'client'),
  { 'maxage': '2h' }) // same as res.header('Cache-Control', 'public, max-age=7200')
);

app.get('/hello', (req, res) => {
  res.header('Cache-Control', 'public, max-age=86400');
  res.header('Content-Type', 'text/html');
  res.send('<h2>Hello World!!!</h2>');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));