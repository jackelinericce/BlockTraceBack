import {Router} from 'express'
import AccountController from '../../app/controller/AccountController'
import {verificarToken} from '../../app/util/token'

class AccountRoutes{
    public router: Router
    private accountController: AccountController
    constructor(){
        this.router = Router()
        this.accountController = new AccountController
        this.routes()
    }

    routes = () => {
        this.router.get('/', verificarToken, this.accountController.autenticacion)
        this.router.post('/login', this.accountController.login)
        this.router.post('/registrate', this.accountController.registrate)
    }
}
const accountRoutes = new AccountRoutes()

export default accountRoutes.router