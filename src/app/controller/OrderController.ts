import { Request, Response } from 'express'

import AnimeService from '../service/implementacion/AnimeService'
import IAnimeModel from '../entity/interface/IAnime'
class OrderController {
    animeService: AnimeService

    constructor() {
        this.animeService = new AnimeService()
    }

    registrar = async (req: Request, res: Response): Promise<void> => {
        var anime: IAnimeModel = <IAnimeModel>req.body
        var respuesta = await this.animeService.registrar(anime)
        res.json({ status: res.statusCode, operation: respuesta, data: anime })
    }

    actualizar = async (req: Request, res: Response) => {
        var anime: IAnimeModel = <IAnimeModel>req.body
        var respuesta = await this.animeService.actualizar(anime)
        res.json({ status: res.statusCode, operation: respuesta, data: anime })
    }

    eliminar = async (req: Request, res: Response) => {
        var respuesta = await this.animeService.eliminar(req.params.id)
        res.json({ status: res.statusCode, operation: respuesta })
    }

    listar = async (req: Request, res: Response): Promise<void> => {
        var animes = await this.animeService.listar()
        res.json(animes)
    }

    listarPorId = async (req: Request, res: Response) => {
        var anime = await this.animeService.listarPorId(req.params.id)
        res.json(anime)
    }
}

export = OrderController