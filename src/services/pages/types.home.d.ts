export interface IDataHome {
    data: IHome[];
    meta: Meta;
}

export interface IHome {
    id: number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    subtitle: string;
    titulo: string;
    texto: string;
    textoboton: string;
    linkboton: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    puedoAyudarteTitulo: string;
    puedoAyudarteTexto: string;
    ConsigueMiLibro: Block;
    banner: Banner;
    Cards: Card[];
    SesionGratuita: Block;
}

export interface Card {
    id: number;
    icono: null;
    titulo: string;
    cuerpo: string;
}

export interface Block {
    id: number;
    subtitulo: null | string;
    titulo: string;
    TextoBoton: string;
    LinkBoton: string;
    parrafos: IParrafo[];
    imagen: Banner;
}

export interface Banner {
    data: Data | null;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
}

export interface IParrafo {
    id: number;
    parrafo: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
