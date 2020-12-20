import express from 'express';
import mongoose from 'mongoose'; 
import data from './data.js';

/**
 * Server module - See {@tutorial node-server-tutorial.html}
 * @module server
 * @param {string} uri - URL 
 * @param {boolean} useNewUrlParser - connect option
 * @param {boolean} userUnifiedTopology - connect option
 * @param {boolean} userCreateIndex - connect option
 * @returns {Connection} Mongoose default connection to MongoDB  
 */

const app = express();


app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x => x._id === req.params.id); 
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not Found'}); 
  }
  res.send(data.products);
});


/**
 * mongoose.connect('mongodb://localhost/bonsucess', {
  useNewUrlParser: true,
  userUnifiedTopology: true, 
  userCreateIndex: true,
});
 */

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

//app.use('/api/users', userRouter); 

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
