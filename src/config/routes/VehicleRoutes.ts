import { Router } from 'express'

import VehicleController from '../../app/controller/VehicleController'

class VehicleRoutes {
    public router: Router
    private controller: VehicleController
    constructor() {
        this.router = Router()
        this.controller = new VehicleController
        this.routes()
    }

    routes = () => {
        this.router.get('/', this.controller.listar);
        this.router.get('/:id', this.controller.listarPorId);
        this.router.post('/', this.controller.registrar);
        this.router.put('/', this.controller.actualizar);
        this.router.delete('/:id', this.controller.eliminar);
    }
}
const vehicleRoutes = new VehicleRoutes()

export default vehicleRoutes.router


