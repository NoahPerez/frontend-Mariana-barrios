export interface IContact {
    data: IDataContact;
    meta: Meta;
}

export interface IDataContact {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    Titulo: string;
    TituloFormulario: string;
    TextoBotonFormulario: string;
    Direccion: Direccion[];
    Horario: Direccion[];
}

export interface Direccion {
    id: number;
    parrafo: string;
}

export interface Meta {}
