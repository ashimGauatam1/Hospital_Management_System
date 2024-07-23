import express from 'express';
import dotenv from 'dotenv';
import cros from 'cors';
import router  from './Routes/Auth.js';
dotenv.config();

import ConnectToDB from './db.js';
const app = express();
ConnectToDB();

const port = process.env.PORT || 5000;
app.use(cros());
app.use(express.json());
app.use('/api/auth',router );

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})