
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send(express.static('index.html'));
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});