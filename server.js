
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// app.get('/test', (req, res) => {
//   res.send('hello world');
// });

const messages = []

app.post('/message',(req,res) => {
  // console.dir(req.body);
  // res.json(req.body);
  messages.push(req.body)
})

app.get('/message',(req,res) => {
  res.json({
    messages: messages
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});