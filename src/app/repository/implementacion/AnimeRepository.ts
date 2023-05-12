import IAnimeRepository from '../interface/IAnimeRepository'
import IAnime from '../../entity/interface/IAnime'
import Anime from '../../entity/Anime'
import { ObjectId } from 'mongodb';

class AnimeRepository implements IAnimeRepository {
    static LOG: string = 'AnimeRepository'

    constructor(){
        
    }

    registrar = async(entity: IAnime) => {
        try{
            const anime = new Anime(entity)
            await anime.save()
        }catch(error){
            console.log(AnimeRepository.LOG, error)
            return false
        }
        return true;
    };

    actualizar = async(entity: IAnime) => {
        try{
            const anime = new Anime(entity)
            await Anime.findOneAndUpdate({"_id":anime._id}, anime).exec()
        }catch(error){
            console.log(AnimeRepository.LOG, error)
            return false
        }
        return true;
    };

    eliminar = async(id: ObjectId) => {
        try{
            await Anime.findByIdAndRemove(id).exec()
        }catch(error){
            console.log(AnimeRepository.LOG, error)
            return false
        }
        return true
    };

    listar = async() => {
        var resultado = new Array<IAnime>()
        try{
            resultado = await Anime.find().exec()
        }catch(error){
            console.log(AnimeRepository.LOG, error)
        }
        return resultado
    };

    listarPorId = async(id: ObjectId) => {
        var resultado = null
        try{
            resultado = await Anime.findById(id).exec()
        }catch(error){
            console.log(AnimeRepository.LOG, error)
        }
        return resultado
    };
}

export = AnimeRepository