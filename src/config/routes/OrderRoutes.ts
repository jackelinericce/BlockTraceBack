import { Router } from 'express'

import OrderController from '../../app/controller/OrderController'

class OrderRoutes {
    public router: Router
    private controller: OrderController
    constructor() {
        this.router = Router()
        this.controller = new OrderController
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
const orderRoutes = new OrderRoutes()

export default orderRoutes.router


