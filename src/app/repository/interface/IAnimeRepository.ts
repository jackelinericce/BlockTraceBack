import CRUDRepository from './CRUDRepository'
import IAnimeModel from '../../entity/interface/IAnime'

interface IAnimeRepository extends CRUDRepository<IAnimeModel>{

}

export = IAnimeRepository