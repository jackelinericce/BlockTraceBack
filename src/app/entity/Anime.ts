import {Schema, model} from 'mongoose'

import IAnime from './interface/IAnime'

var animeSchema = new Schema({
    nombre: {type:String, required: true},
    descripcion: {type:String},
    imagen: {type:String, required: true},
    link: {type:String, required: false}
})


var Anime = model<IAnime>("Anime", animeSchema);

export = Anime