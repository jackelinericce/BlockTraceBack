import CRUDService from './CRUDService'
import IUserModel from '../../entity/interface/IUser'

interface IUserService extends CRUDService<IUserModel>{
    buscarPorUserName:(username: String) => Promise< IUserModel | null>
}

export = IUserService