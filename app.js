const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('"<h1>Welcome to  DevOps CI/CD Project</h1>"<br>"<p>This is a simple Express application running on Node.js.</p>"');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
