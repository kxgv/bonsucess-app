import express from 'express';
import mongoose from 'mongoose'; 
import data from './data.js';


const app = express();
mongoose.connect('mongodb://localhost/bonsucess', {
  useNewUrlParser: true,
  userUnifiedTopology: true, 
  userCreateIndex: true,
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.use('/api/users', userRouter); 


app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
