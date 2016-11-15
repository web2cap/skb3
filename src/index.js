import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Promise from 'bluebird';

import saveDataInDb from './saveDataInDb';
import Pet from './models/Pet';
import User from './models/User';

mongoose.Promise = Promise;
mongoose.connect('mongodb://public.mgbeta.ru/pkoshelev_skb3');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  return res.json(users);
});

app.get('/pets', async (req, res) => {
  const pets = await Pet.find();
  return res.json(pets);
});

app.post('/data', async (req, res) => {
  const data = req.body;
  saveDataInDb(data);
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});




/*
const data = {
  user: {
    name: 'p1',
  },
  pets: [
    {
      name: 'DjonDir',
      type: 'cat',
    },
    {
      name: 'Dogo',
      type: 'dog',
    },
  ],
};
//console.log(data);
saveDataInDb(data);

const Pet = mongoose.model('Pet',{
  type: String,
  name: String,
});
const kitty = new Pet({
  name: 'Jandarm',
  type: 'cat',
});

kitty.save()
  .then(() => {
    console.log('success');
  })
  .catch(() =>{
    console.log('err');
  })

*/

