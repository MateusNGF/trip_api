import express from 'express';
import { userRoutes, cityRoute, touristSpotsRoutes } from './features';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoutes);
app.use('/city', cityRoute);
app.use("/spot", touristSpotsRoutes);


export default app;
