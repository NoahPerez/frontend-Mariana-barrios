import { Card, IParrafo } from "./types.home";
import { IAboutMe } from "./types.aboutme";
import { API_URL, STRAPI_URL } from "config/config";

export async function getAboutMe() {
    const response = await fetch(
        `${API_URL}/sobremi?populate[OurWork][populate][parrafos]=*&populate[BannerHeader][fields][0]=url&populate[OurWork][populate][Imagen][fields][0]=url`
    );
    const result = (await response.json()) as IAboutMe;

    const attr = result.data.attributes;

    const mappedData: IAboutMeResult = {
        id: result.data.id,
        title: attr.TextoHeader,
        buttonHeader: attr.BotonHeader,
        linkHeader: attr.LinkHeader,
        banner: `${STRAPI_URL}${attr.BannerHeader.data.attributes.url}`,
        ourWork: {
            buttonText: attr.OurWork.TextoBoton,
            title: attr.OurWork.titulo,
            subtitle: attr.OurWork.subtitulo ?? "",
            img: `${STRAPI_URL}${attr.OurWork.Imagen.data.attributes.url}`,
            paragraphs: attr.OurWork.parrafos,
            link: attr.OurWork.LinkBoton ?? "",
            id: attr.OurWork.id,
        },
    };

    return mappedData;
}

export interface IAboutMeResult {
    id: number;
    title: string;
    buttonHeader: string;
    linkHeader: string;
    banner: string;
    ourWork: IBlock;
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
