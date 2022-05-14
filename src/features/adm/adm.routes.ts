import {Router} from 'express'
import { getCustomRepository } from 'typeorm'
import { User } from '../users'
import { AdmRepository } from './adm.repository'
export const AdmRouters = Router()


const repository = getCustomRepository(AdmRepository)


AdmRouters.post("/i", async (req, res) => {
    const newAdm = new User({
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        isAdm : true
    })

    return res.send(await newAdm.save())
})


AdmRouters.get("/login", async (req, res) => {
    try{
        const currentAccess = req.body
        const foundedAdm = await repository.access({
            email : currentAccess.email,
            password : currentAccess.password
        })
    
        if (!foundedAdm) throw { status : 400, message : "User not found"}
    }catch(error){
        res.status(+error.status).send(error.message)
    }

})