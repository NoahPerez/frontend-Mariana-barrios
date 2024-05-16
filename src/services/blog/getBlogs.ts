
import { API_URL } from "config/config";
import { IBlogs } from "./types";

export type IBlogData = {
    id: number;
    slug: string;
    title: string;
    body?: string;
    shortDescription: string;
    thumbnail: string;
};

export const PAGESIZE = 4

export async function getBlogs({ page = 1}: { page: number}) {
    const response = await fetch(
        `${API_URL}/blogs?populate=*&sort[0]=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${PAGESIZE}`
    );
    const { data } = (await response.json()) as IBlogs;

    const mapped: IBlogData[] = data.map((e) => {
        return {
            id: e.id,
            slug: e.attributes.slug,
            title: e.attributes.titulo,
            shortDescription: e.attributes.descripcionCorta,
            thumbnail: `${e?.attributes?.thumbnail?.data?.attributes?.url}`,
        };
    });
    return mapped;
}

export async function getMetaBlogs() {
    const response = await fetch(`${API_URL}/blogs?populate=*`);
    const { meta } = (await response.json()) as IBlogs;

    return meta;
}


export async function getSlugsBlogs(){
    const response = await fetch(`${API_URL}/blogs?[fields][0]=slug`);
    const { data } = (await response.json()) as IBlogs;

    const mapped = data.map(e => {
        return {
            slug: e.attributes.slug
        }
    })

    return mapped
}
export async function getIdsBlogs(){
    const response = await fetch(`${API_URL}/blogs?[fields][0]=id`);
    const { data } = (await response.json()) as IBlogs;

    const mapped = data.map(e => {
        return {
            id: e.id
        }
    })

    return mapped
}

export async function getBlogBySlug(slug: string){
    const response = await fetch(
        `${API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    const { data } = (await response.json()) as IBlogs;
    const mapped: IBlogData = data.map((e) => {
        return {
            id: e.id,
            slug: e.attributes.slug,
            title: e.attributes.titulo,
            body: e.attributes.descripcion,
            shortDescription: e.attributes.descripcionCorta,
            thumbnail: `${e?.attributes?.thumbnail?.data?.attributes?.url}`,
        };
    })[0];
    return mapped;
}