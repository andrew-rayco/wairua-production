const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 80

app.listen(process.env.PORT || PORT, () => {
  console.log('Wairua running on ' + PORT)
});
