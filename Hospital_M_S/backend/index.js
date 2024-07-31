import express from 'express';
import dotenv from 'dotenv';
import cros from 'cors';
import router1  from './Routes/Auth.js';
import router2 from './Routes/Appoint.js';
import Stripe  from 'stripe';

dotenv.config();

import ConnectToDB from './db.js';
import bodyParser from 'body-parser';
const app = express();
ConnectToDB();

const port = process.env.PORT || 8081;
app.use(cros());
app.use(express.json());
const stripe = new Stripe(process.env.PAY_SCRT);
app.use('/api/auth',router1 );
app.use('/api/appoint',router2 );
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
})
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})