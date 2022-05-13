import express from 'express';
import {userRoutes} from './core/'

import "reflect-metadata";
import { createConnection } from "typeorm";

const app = express()

app.use("/user", userRoutes)


try{
    createConnection()
    app.listen(8080, () => {
        console.log("Servidor ta bala.")
    })

}catch(erro){
    console.log("error")
}

export default app;