import { EntityRepository, Repository } from "typeorm";
import { User } from "../users";

@EntityRepository(User)
export class AdmRepository extends Repository<User> {

    async access(params : { 
        email : string, 
        password : string
    })
    {
        return this.findOne({
            where : {
                email : params.email,
                password : params.password,
                isAdm : true
            }
        })
    }
}