import CRUDService from './CRUDService'
import IAnimeModel from '../../entity/interface/IAnime'

interface IAnimeService extends CRUDService<IAnimeModel> {

}

export = IAnimeService