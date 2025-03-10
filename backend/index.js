import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import ticketRoute from './routes/ticketRoute.js';

const app = express()
app.use(bodyParser.json());

app.use(cors());

const port = 3000

dotenv.config();

const URI = process.env.MONGODB_URI;

// connect to mongodb

try{
  mongoose.connect(URI)
  console.log("connected to mongodb")
}catch(error){
  console.log("error",error)
}

app.use("/ticket", ticketRoute)
app.use("/", ticketRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})