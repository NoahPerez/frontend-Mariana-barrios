
import { API_URL } from "config/config";
import { IEvents } from "./types.events";
import { IBlogData } from "services/blog/getBlogs";

export async function getEvent() {
    const response = await fetch(
        `${API_URL}/evento?populate[ImagenHeader][fields][0]=url&populate[pasos][populate][Imagen]=*&populate[Viaje][populate][Imagen]=*&populate[blogs][populate][thumbnail]=*`
    );
    const result = (await response.json()) as IEvents;

    const attr = result.data.attributes;

    const mappedData: IEventResult = {
        id: result.data.id,
        titleHeader: attr.TituloEventos,
        subtitleHeader: attr.SubituloHeader,
        textHeader: attr.TextoHeader,
        buttonHeader: attr.BotonHeader,
        linkHeader: attr.LinkHeader ?? "",
        image: `${attr?.ImagenHeader?.data?.attributes?.url}`,
        titleEvent: attr.TituloEventos,
        pasos: {
            id: attr.pasos.id,
            title: attr.pasos.titulo,
            text: attr.pasos.parrafo,
            textButton: attr.pasos.TextoBoton,
            link: attr.pasos.LinkBoton,
            img: `${attr.pasos?.Imagen?.data?.attributes?.url}`,
        },
        viaje: {
            id: attr.Viaje.id,
            title: attr.Viaje.titulo,
            text: attr.Viaje.parrafo,
            textButton: attr.Viaje.TextoBoton,
            link: attr.Viaje.LinkBoton,
            img: `${attr.Viaje?.Imagen?.data?.attributes?.url}`,
        },
        blogs: attr.blogs.data.map((e) => {
            return {
                id: e.id,
                slug: e.attributes.slug,
                title: e.attributes.titulo,
                shortDescription: e.attributes.descripcionCorta,
                thumbnail: `${e.attributes?.thumbnail?.data?.attributes?.url}`,
            };
        }),
    };

    return mappedData;
}

export interface IEventResult {
    id: number;
    subtitleHeader?: string;
    titleHeader?: string;
    textHeader?: string;
    buttonHeader?: string;
    linkHeader?: string;
    image?: string;
    titleEvent?: string;
    pasos: Block;
    viaje: Block;
    blogs: IBlogData[];
}


export interface Block {
    id: number;
    title: string;
    text: string;
    textButton: string;
    link: null;
    img: string;
}