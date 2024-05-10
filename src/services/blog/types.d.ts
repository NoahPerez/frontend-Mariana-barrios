export interface IBlogs {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id: number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    titulo: string;
    slug: string;
    descripcion: string;
    descripcionCorta: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    data: Data;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
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
    small: Medium;
    medium: Medium;
    thumbnail: Medium;
}

export interface Medium {
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
