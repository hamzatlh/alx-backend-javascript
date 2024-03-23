const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.status(404).send('Not a number');
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
