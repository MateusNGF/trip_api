import { HttpReponse, HttpRequest, IController } from "../../../main";
import { User } from "../users.entity";

export class Messager {
    public static sucess(body : any, statusCode : number = 200) : HttpReponse{
        return {status : statusCode, body}
    }

    public static failed(message: string, statusCode : number) : HttpReponse {
        return {status : statusCode,body : message}
    }
}

export interface IUserRepository {
    getAllUsers() : Promise<Array<User>> 
    findById(id:string) : Promise<User>
    findByEmail(email:string) :Promise<User>
    createUser(user: User)  :Promise<User>
}

export class GetUsers implements IController {

    constructor(
        private userRepository: IUserRepository
    ) { }

    async exec(request: HttpRequest): Promise<HttpReponse> {
        try {
            const response = await this.userRepository.getAllUsers() ?? []
            return Messager.sucess(response)
        } catch (error) {
            return Messager.failed(error.message, 400)
        }
    }
}
