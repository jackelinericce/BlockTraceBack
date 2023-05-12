import IOrderRepository from '../interface/IOrderRepository'
import IOrder from '../../entity/interface/IOrder'
import Order from '../../entity/Order'
import { ObjectId } from 'mongodb';

class ORderRepository implements IOrderRepository {
    static LOG: string = 'AnimeRepository'

    constructor(){
        
    }

    registrar = async(entity: IOrder) => {
        try{
            const order = new Order(entity)
            await order.save()
        }catch(error){
            console.log(ORderRepository.LOG, error)
            return false
        }
        return true;
    };

    actualizar = async(entity: IOrder) => {
        try{
            const order = new Order(entity)
            await Order.findOneAndUpdate({"_id":order._id}, order).exec()
        }catch(error){
            console.log(ORderRepository.LOG, error)
            return false
        }
        return true;
    };

    eliminar = async(id: ObjectId) => {
        try{
            await Order.findByIdAndRemove(id).exec()
        }catch(error){
            console.log(ORderRepository.LOG, error)
            return false
        }
        return true
    };

    listar = async() => {
        var resultado = new Array<IOrder>()
        try{
            resultado = await Order.find().exec()
        }catch(error){
            console.log(ORderRepository.LOG, error)
        }
        return resultado
    };

    listarPorId = async(id: ObjectId) => {
        var resultado = null
        try{
            resultado = await Order.findById(id).exec()
        }catch(error){
            console.log(ORderRepository.LOG, error)
        }
        return resultado
    };
}

export = ORderRepository