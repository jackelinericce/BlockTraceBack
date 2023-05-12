import IUserService from '../interface/IUserService'
// import userRepository from '../../repository/implementacion/UserRepository'
import IUser from '../../entity/interface/IUser';
import UserRepository from '../../repository/implementacion/UserRepository';
import {ObjectId} from 'mongodb'

class UserService implements IUserService{
    userRepository: UserRepository
    constructor(){
        this.userRepository = new UserRepository()
    }

    registrar = async(entity: IUser) => await this.userRepository.registrar(entity)  
    actualizar = async(entity: IUser) => await this.userRepository.actualizar(entity);
    eliminar = async(id: ObjectId) => await this.userRepository.eliminar(id)
    
    listar = async() => await this.userRepository.listar()
    listarPorId = async(id: ObjectId) => await this.userRepository.listarPorId(id)

    buscarPorUserName = async(username: String) => await this.userRepository.buscarPorUserName(username)
}

export = UserService