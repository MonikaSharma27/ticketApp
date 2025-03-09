import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import ticketRoute from './routes/ticketRoute.js';

const app = express()

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


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})