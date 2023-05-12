import { Schema, model } from 'mongoose'
import IOrder from './interface/IOrder'

var OrderSchema = new Schema({
    address: { type: String, required: true },
    date: { type: String },
    createdAt: { type: String },
    idClient: { type: String, required: true },
    idDriver: { type: String, required: true },
    idVehicle: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: String, required: true },
    state: { type: String, required: true },
})


var Order = model<IOrder>("Order", OrderSchema);

export = Order