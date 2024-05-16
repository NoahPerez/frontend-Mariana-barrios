import { API_URL } from "config/config";
import { IComments, IDataComment } from "./types.comments";

export async function getComments() {
    const response = await fetch(
        `${API_URL}/testimonios?[fields][0]=Nombre&[fields][1]=Comentario&fields[2]=estrellas&populate[avatar][fields][3]=formats`
    );
    const res = (await response.json()) as IComments;

    const mapped: ICommentResult[] = res.data.map((e: IDataComment) => {
        return {
            id: e.id,
            title: e.attributes.Nombre,
            body: e.attributes.Comentario,
            stars: e.attributes.estrellas,
            img: `${e?.attributes?.avatar?.data?.attributes?.formats?.small?.url}`,
        };
    });
    return mapped;
}

export interface ICommentResult {
    id: number;
    title: string;
    body: string;
    stars: number;
    img: string;
}
