import { ObjectID } from "mongodb";

interface CRUDService<T>{
    registrar: (entity: T) => Promise<boolean>
    actualizar: (entity: T) => Promise<boolean>
    eliminar: (id: ObjectID) => Promise<boolean>

    listar: () => Promise<Array<T>>
    listarPorId: (id: ObjectID) => Promise<T | null>
}

export = CRUDService