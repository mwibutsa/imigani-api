import express from 'express';
import dotenv from 'dotenv';
import googleAuthRouter from './passport/google';
import facebookAuthRouter from './passport/facebook';
import userRouter from './user';

dotenv.config();

const app = express();

app.use('/auth/google', googleAuthRouter);
app.use('/auth/facebook', facebookAuthRouter);
app.use('/user', userRouter);

export default app;
