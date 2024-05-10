import { Block } from "./types.home";

export interface IAboutMe {
    data: IDataAboutMe;
    meta: Meta;
}

export interface IDataAboutMe {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    TextoHeader: string;
    BotonHeader: string;
    LinkHeader: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    OurWork: OurWork;
    BannerHeader: BannerHeader;
}

export interface BannerHeader {
    data: BannerHeaderData;
}

export interface OurWork {
    id: number;
    titulo: string;
    subtitulo: null;
    TextoBoton: string;
    LinkBoton: null;
    parrafos: Parrafo[];
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

export interface Parrafo {
    id: number;
    parrafo: string;
}

export interface BannerHeaderData {
    id: number;
    attributes: FluffyAttributes;
}

export interface Meta {}
