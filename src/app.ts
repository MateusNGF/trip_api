import express from 'express';
import { userRoutes, cityRoute, touristSpotsRoutes, commentsRoutes, touristSpotImageRoutes, commentsImageRoutes, rentalsRoutes } from './features';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoutes);
app.use('/city', cityRoute);
app.use('/spot', touristSpotsRoutes);
app.use('/comment', commentsRoutes);
app.use('/touristSpotImage', touristSpotImageRoutes)
app.use('/commentsImage', commentsImageRoutes)
app.use('/rentals', rentalsRoutes)

export default app;
