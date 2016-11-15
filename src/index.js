//import express from 'express';
//import cors from 'cors';

import mongoose from 'mongoose';
import Promise from 'bluebird';
//var mongoose = require('mongoose');

import saveDataInDb from './saveDataInDb';

mongoose.Promise = Promise;
mongoose.connect('mongodb://public.mgbeta.ru/pkoshelev_skb3');

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

/*const Pet = mongoose.model('Pet',{
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

/*const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
*/
