const express = require('express');
const path = require('path');

const app = express();
const port = 3010;

// FIX: absolute paths (this is important)
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});