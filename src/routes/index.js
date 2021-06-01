import express from 'express';
import dotenv from 'dotenv';
import googleAuthRouter from './passport/google';
import facebookAuthRouter from './passport/facebook';

dotenv.config();

const app = express();

app.use('/auth/google', googleAuthRouter);
app.use('/auth/facebook', facebookAuthRouter);

export default app;
