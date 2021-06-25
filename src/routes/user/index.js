import express from 'express';
import profileRouter from './profile';

const app = express();

app.use('/profile', profileRouter);

export default app;
