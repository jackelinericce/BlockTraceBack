import CRUDRepository from './CRUDRepository'
import IVehicleModel from '../../entity/interface/IVehicle'

interface IVehicleRepository extends CRUDRepository<IVehicleModel> {

}

export = IVehicleRepository