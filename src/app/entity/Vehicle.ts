import { Schema, model } from 'mongoose'
import IVehicle from './interface/IVehicle'

var VehicleSchema = new Schema({
    registrationNumber: { type: String, required: true },
    propertyCard: { type: String, required: true },
    numberOfAxes: { type: String, required: true },
    with: { type: String, required: true },
    long: { type: String, required: true },
    hasSure: { type: Boolean, required: true },
    hasSoat: { type: String, required: true },
    hasRefrigeration: { type: Boolean, required: true },
})


var Vehicle = model<IVehicle>("Vehicle", VehicleSchema);

export = Vehicle