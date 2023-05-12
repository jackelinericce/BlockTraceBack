import CRUDService from './CRUDService'
import IAnimeModel from '../../entity/interface/IAnime'

interface IOrderService extends CRUDService<IAnimeModel> {

}

export = IOrderService