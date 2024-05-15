export interface ICurso {
    data: ICursoData;
    meta: Meta;
}

export interface ICursoData {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    TituloHeader: string;
    TextoHeader: string;
    TextoBoton: string;
    Link: string;
    SubtituloTransform: string;
    TituloTransform: string;
    ParrafoTransform: string;
    LinkVideo: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    TextoBotonTEstimonio: string;
    LinkTestimonio: string;
    BotonDownload: string;
    LinkDowndload: string;
    Imagen: Imagen;
    posterVideo: Imagen;
    Bloques: Bloque[];
    TituloTestimonio: DownloadSeccion;
    DownloadSeccion: DownloadSeccion;
}

export interface Bloque {
    id: number;
    icono: string;
    titulo: string;
    cuerpo: string;
}

export interface DownloadSeccion {
    id: number;
    Titulo: string;
    Subtitulo: null | string;
    parrafos?: Parrafo[];
}

export interface Parrafo {
    id: number;
    parrafo: string;
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
