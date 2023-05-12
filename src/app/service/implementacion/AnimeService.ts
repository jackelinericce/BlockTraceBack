import IAnimeService from '../interface/IAnimeService'
import AnimeRepository from '../../repository/implementacion/AnimeRepository'
import IAnime from '../../entity/interface/IAnime'
import { ObjectId } from 'mongodb';

class AnimeService implements IAnimeService{
    animeRepository: AnimeRepository

    constructor() {
        this.animeRepository = new AnimeRepository()
    }

    registrar = async(entity: IAnime) => await this.animeRepository.registrar(entity)
    actualizar = async(entity: IAnime) => await this.animeRepository.actualizar(entity)
    eliminar = async(id: ObjectId) => await this.animeRepository.eliminar(id)

    listar = async() => await this.animeRepository.listar()
    listarPorId = async(id: ObjectId) => await this.animeRepository.listarPorId(id)
}

export = AnimeService