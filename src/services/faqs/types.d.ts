export interface IFaqs {
    data: Data[];
    meta: Meta;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    pregunta: string;
    respuesta: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
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
