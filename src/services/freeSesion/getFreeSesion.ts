import { API_URL, STRAPI_URL } from "config/config";
import { IFreeSesion } from "./types";

export async function getFreeSesion() {
    const response = await fetch(
        `${API_URL}/free-sesion?populate[freeSesion][populate][Imagen][fields][0]=url`
    );
    const res = (await response.json()) as IFreeSesion;

    const mapped: IFreeSesionResult = {
        id: res.data.id,
        title: res.data.attributes.freeSesion.titulo,
        text: res.data.attributes.freeSesion.Descripcion,
        textButton: res.data.attributes.freeSesion.TextoBoton,
        link: res.data.attributes.freeSesion.TextoLink,
        img: `${STRAPI_URL}${res.data.attributes.freeSesion.Imagen.data.attributes.url}`,
    };
    return mapped;
}

export interface IFreeSesionResult {
    id: number;
    title: string;
    text: string;
    textButton: string;
    link: string;
    img: string;
}
