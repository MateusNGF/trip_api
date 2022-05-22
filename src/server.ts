import dotenv from 'dotenv'
import app from "./app";

import "reflect-metadata";
import { createConnection } from "typeorm";

const port = process.env.PORT || 8080
try {

    dotenv.config()
    createConnection();
    app.listen(port, () => {
      console.log(`Servidor ta bala ${port}mm.`);
    });
  } catch (erro) {
    console.error('error -> ', erro);
  }