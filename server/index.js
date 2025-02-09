import express from 'express';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import eventRouter from './routes/event.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/user', userRouter);
app.use('/event', eventRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
