import { API_URL, STRAPI_URL } from "config/config";
import { Card, IDataHome, IParrafo } from "./types.home";

export type TMyBook = {
    myBook: IBlock;
};

export async function getMyBook() {
    const response = await fetch(
        `${API_URL}/homes?populate[ConsigueMiLibro][populate][parrafos]=*&populate[ConsigueMiLibro][populate][imagen][fields]`
    );

    const result = (await response.json()) as IDataHome;
    const attr = result.data[0].attributes;

    const mappedData: TMyBook = {
        myBook: {
            id: attr.ConsigueMiLibro.id,
            title: attr.ConsigueMiLibro.titulo,
            subtitle: attr.ConsigueMiLibro.subtitulo ?? "",
            buttonText: attr.ConsigueMiLibro.TextoBoton,
            img: `${STRAPI_URL}${attr.ConsigueMiLibro.imagen.data?.attributes.url}`,
            paragraphs: attr.ConsigueMiLibro.parrafos,
        },
    };
    return mappedData;
}

export async function getHome() {
    const response = await fetch(
        `${API_URL}/homes?populate[ConsigueMiLibro][populate][parrafos]=*&populate[ConsigueMiLibro][populate][imagen][fields][0]=url&populate[banner][fields][0]=url&populate[Cards]=*&populate[SesionGratuita][populate][parrafos]=*&populate[SesionGratuita][populate][imagen][fields][0]=url`
    );
    const result = (await response.json()) as IDataHome;

    const attr = result.data[0].attributes;

    const mappedData: IHomeResult = {
        id: result.data[0].id,
        subtitle: attr.subtitle,
        title: attr.titulo,
        text: attr.texto,
        textButton: attr.textoboton,
        linkButton: attr.linkboton,
        banner: `${STRAPI_URL}${attr?.banner?.data?.attributes?.url}`,
        puedoAyudarteTitle: attr.puedoAyudarteTitulo,
        puedoAyudarteText: attr.puedoAyudarteTexto,
        puedoAyudarteCards: attr.Cards,
        myBook: {
            id: attr.ConsigueMiLibro.id,
            title: attr.ConsigueMiLibro.titulo,
            subtitle: attr.ConsigueMiLibro.subtitulo ?? "",
            buttonText: attr.ConsigueMiLibro.TextoBoton,
            img: `${STRAPI_URL}${attr?.ConsigueMiLibro?.imagen?.data?.attributes.url}`,
            paragraphs: attr.ConsigueMiLibro.parrafos,
        },
        freeSesion: {
            id: attr.SesionGratuita.id,
            title: attr.SesionGratuita.titulo,
            subtitle: attr.SesionGratuita.subtitulo ?? "",
            buttonText: attr.SesionGratuita.TextoBoton,
            img: `${STRAPI_URL}${attr?.SesionGratuita?.imagen?.data?.attributes.url}`,
            paragraphs: attr.SesionGratuita.parrafos,
        },
    };

    return mappedData;
}

export interface IHomeResult {
    id: number;
    subtitle?: string;
    title?: string;
    text?: string;
    textButton?: string;
    linkButton?: string;
    banner?: string;
    puedoAyudarteTitle?: string;
    puedoAyudarteText?: string;
    puedoAyudarteCards?: Card[];
    myBook?: IBlock;
    freeSesion?: IBlock;
}

export interface IBlock {
    id?: number;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    link?: string;
    img?: string;
    paragraphs?: IParrafo[];
    cards?: Card[];
}
