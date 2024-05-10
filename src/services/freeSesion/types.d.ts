export interface IFreeSesion {
    data: IDataFreeSesion;
    meta: Meta;
}

export interface IDataFreeSesion {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    freeSesion: FreeSesion;
}

export interface FreeSesion {
    id: number;
    titulo: string;
    Descripcion: string;
    TextoBoton: string;
    TextoLink: string;
    Imagen: Imagen;
}

export interface Imagen {
    data: ImagenData;
}

export interface ImagenData {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    url: string;
}

export interface Meta {}
