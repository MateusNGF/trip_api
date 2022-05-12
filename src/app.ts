import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { userRoutes } from './features/users';

const app = express();

app.use('/user', userRoutes);

try {
  createConnection();
  app.listen(8080, () => {
    console.log('Servidor ta bala.');
  });
} catch (erro) {
  console.log('error');
}

export default app;
