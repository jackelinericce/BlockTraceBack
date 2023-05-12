import IUserRepository from '../interface/IUserRepository'
import IUser from '../../entity/interface/IUser'
import User from '../../entity/User'
import {ObjectId} from 'mongodb'

class UserRepository implements IUserRepository{
    static LOG: string = 'UserRepository'

    constructor(){

    }

    registrar = async(entity: IUser) => {
        try{
            const user = new User(entity)
            user.password = await user.encriptarPassword(entity.password)
            await user.save()
        }catch(error){
            console.log(UserRepository.LOG, error)
            return false
        }
        return true
    }  
    actualizar = async(entity: IUser) => false
    eliminar = async(id: ObjectId) => false
    listar = async() => []

    listarPorId = async(id: ObjectId) => {
        var resultado = null
        try{
            resultado = await User.findById(id,{password:0}).exec()
        }catch(error){
            console.log(UserRepository.LOG, error)
        }
        return resultado
    }
    buscarPorUserName = async(username: String) => {
        var resultado = null
        try{
            resultado = await User.findOne({'username':username}).exec()
        }catch(error){
            console.log(UserRepository.LOG, error)
        }
        return resultado
    }

}

export = UserRepository