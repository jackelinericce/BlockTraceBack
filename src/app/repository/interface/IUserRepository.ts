import CRUDRepository from './CRUDRepository'
import IUserModel from '../../entity/interface/IUser'

interface IUserRepository extends CRUDRepository<IUserModel>{
    buscarPorUserName:(username: String) => Promise< IUserModel | null>
}
export = IUserRepository