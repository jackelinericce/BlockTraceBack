import {Request, Response} from 'express'
import {crearToken} from '../util/token' 

import UserService from '../service/implementacion/UserService'
import IUserModel from '../entity/interface/IUser'


class AccountController{
    userService: UserService

    constructor(){
        this.userService = new UserService()
    }

    login = async(req: Request, res: Response) => {
        var user: IUserModel = <IUserModel>req.body
        
        var userDB = await this.userService.buscarPorUserName(user.username)
        if(!userDB) return res.status(404).json({auth: false, message: "El username no existe"})

        var validate = await userDB.compararPassword(user.password)
        if(!validate) return res.status(401).json({auth: false, message: "Constraseña incorrecta"})

        const token = await crearToken(userDB)
        return res.json({auth: true, token })
    }

    registrate = async(req: Request, res: Response) => {
        var user: IUserModel = <IUserModel>req.body

        var respuesta = await this.userService.registrar(user)
        if(!respuesta) return res.json({status: res.statusCode, operation: respuesta, message: 'Error al crear el usuario' })

        const userBD = await this.userService.buscarPorUserName(user.username)
        const token = await crearToken(userBD)
        return res.json({status: res.statusCode, operation: respuesta, token })
    }

    autenticacion = async (req: Request, res: Response) => {
        const user = await this.userService.listarPorId(req.params.id)
        if(!user) return res.status(404).send('Usuario no encontrado')
        
        return res.json({auth: true, user})
    }

}

export = AccountController