import { createConnection } from "typeorm";
import app from "./app";

const port = process.env.PORT || 8080
try {
    createConnection();
    app.listen(port, () => {
      console.log(`Servidor ta bala ${port}mm.`);
    });
  } catch (erro) {
    console.error('error -> ', erro);
  }