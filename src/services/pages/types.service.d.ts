export interface IService {
    data: IDataService;
    meta: Meta;
}

export interface IDataService {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    SubtituloHeader: string;
    TituloHeader: string;
    textoHeader: string;
    TextoBotonHeader: string;
    LinkBotonHeader: string;
    TePropongoTitulo: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    SubtituloTransformacion: string;
    TituloTransformacion: string;
    DescripcionTransformacion: string;
    MasPreguntasTitulo: string;
    MasPreguntasTexto: string;
    MasPreguntasBoton: string;
    MasPreguntasLink: string;
    FaqTitulo: string;
    FaqTexto: string;
    BannerHeader: BannerHeader;
    ImagenTransformacion: BannerHeader;
    tePropongo: Card[];
    ListaTransformacion: Card[];
}

export interface BannerHeader {
    data: BannerHeaderData;
}

export interface BannerHeaderData {
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
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
}

export interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
}

export interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}

export interface Meta {}
