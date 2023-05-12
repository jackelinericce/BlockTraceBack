import { Document } from 'mongoose'

interface IOrder extends Document {
    address: string,
    date: string,
    createdAt: string,
    idClient: string
    idDriver: string
    idVehicle: string
    product: string
    quantity: string
    state: string
}

export = IOrder