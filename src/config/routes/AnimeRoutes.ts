import {Router} from 'express'

import AnimeController from '../../app/controller/AnimeController'

class AnimeRoutes{
    public router: Router
    private animeController: AnimeController
    constructor(){
        this.router = Router()
        this.animeController = new AnimeController
        this.routes()
    }
    
    routes = () => {
        this.router.get('/', this.animeController.listar);
        this.router.get('/:id', this.animeController.listarPorId);
        this.router.post('/', this.animeController.registrar);
        this.router.put('/', this.animeController.actualizar);
        this.router.delete('/:id', this.animeController.eliminar);
    } 
}
const animeRoutes = new AnimeRoutes()

export default animeRoutes.router


