import { Request, Response } from "express"

export type HttpRequest = { body ?: any, params  ?:any, query ?: any, header ?: any, file ?: any, files ?: any}
export type HttpReponse = { status : number, body : any }

export interface IController {
    exec(request:HttpRequest) : Promise<HttpReponse>
}

export class ExpressAdapter {
    static adapt(controller: IController): any {
        return async (req: Request, res: Response) => {
            const request: HttpRequest = req
            const response : HttpReponse = await controller.exec(request)

            res.status(response.status).json(response.body)
        }
    }
}