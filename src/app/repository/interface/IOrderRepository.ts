import CRUDRepository from './CRUDRepository'
import IOrderModel from '../../entity/interface/IOrder'

interface IOrderRepository extends CRUDRepository<IOrderModel> {

}

export = IOrderRepository