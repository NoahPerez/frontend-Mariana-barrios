export interface IEvents {
    data: IEventsData;
    meta: Meta;
}

export interface IEventsData {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    SubituloHeader: string;
    TituloHeader: string;
    TextoHeader: string;
    BotonHeader: string;
    LinkHeader: null;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    TituloEventos: string;
    ImagenHeader: ImagenHeader;
    pasos: Viaje;
    Viaje: Viaje;
    blogs: Blogs;
}

export interface Viaje {
    id: number;
    titulo: string;
    parrafo: string;
    TextoBoton: string;
    LinkBoton: null;
    Imagen: Imagen;
}

export interface ImagenHeader {
    data: ImagenHeaderData;
}

export interface ImagenHeaderData {
    id: number;
    attributes: {
      url: string
    };
}

export interface Imagen {
    data: ImagenData;
}

export interface ImagenData {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: EXT;
    mime: MIME;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
}

export enum EXT {
    PNG = ".png",
}

export interface Formats {
    large?: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
}

export interface Large {
    ext: EXT;
    url: string;
    hash: string;
    mime: MIME;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}

export enum MIME {
    ImagePNG = "image/png",
}

export interface Blogs {
    data: Datum[];
}

export interface Datum {
    id: number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    titulo: string;
    slug: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    descripcionCorta: string;
    thumbnail: Imagen;
}

export interface Meta {}
