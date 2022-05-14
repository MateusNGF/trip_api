import express from 'express';
import { userRoutes } from './features';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoutes);


export default app;
