import IVehicleRepository from '../interface/IVehicleRepository'
import IVehicle from '../../entity/interface/IVehicle'
import Vehicle from '../../entity/Vehicle'
import { ObjectId } from 'mongodb';

class VehicleRepository implements IVehicleRepository {
    static LOG: string = 'IVehicleRepository'

    constructor() {

    }

    registrar = async (entity: IVehicle) => {
        try {
            const order = new Vehicle(entity)
            await order.save()
        } catch (error) {
            console.log(VehicleRepository.LOG, error)
            return false
        }
        return true;
    };

    actualizar = async (entity: IVehicle) => {
        try {
            const order = new Vehicle(entity)
            await Vehicle.findOneAndUpdate({ "_id": order._id }, order).exec()
        } catch (error) {
            console.log(VehicleRepository.LOG, error)
            return false
        }
        return true;
    };

    eliminar = async (id: ObjectId) => {
        try {
            await Vehicle.findByIdAndRemove(id).exec()
        } catch (error) {
            console.log(VehicleRepository.LOG, error)
            return false
        }
        return true
    };

    listar = async () => {
        var resultado = new Array<IVehicle>()
        try {
            resultado = await Vehicle.find().exec()
        } catch (error) {
            console.log(VehicleRepository.LOG, error)
        }
        return resultado
    };

    listarPorId = async (id: ObjectId) => {
        var resultado = null
        try {
            resultado = await Vehicle.findById(id).exec()
        } catch (error) {
            console.log(VehicleRepository.LOG, error)
        }
        return resultado
    };
}

export = VehicleRepository