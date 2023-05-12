import {Document} from 'mongoose'

interface IAnime extends Document{
    nombre: string,
    descripcion: string,
    imagen: string,
    link:string
}

export = IAnime