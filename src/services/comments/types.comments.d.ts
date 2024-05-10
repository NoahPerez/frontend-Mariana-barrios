export interface IComments {
    data: IDataComment[];
    meta: Meta;
}

export interface IDataComment {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    Nombre: string;
    Comentario: string;
    estrellas: number;
    avatar: Avatar;
}

export interface Avatar {
    data: Data | null;
}

export interface Data {
    id: number;
    attributes: DataAttributesFormats;
}

export interface DataAttributesFormats {
    formats: Formats;
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

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
