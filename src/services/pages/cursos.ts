import { API_URL, STRAPI_URL } from "config/config";
import { Bloque, ICurso, Parrafo } from "./types.cursos";

export async function getCursos() {
    const response = await fetch(
        `${API_URL}/curso?populate[Imagen][fields][0]=url&populate[Bloques][fields][0]=*&populate[TituloTestimonio][fields][0]=*&populate[DownloadSeccion][populate][parrafos]=*&populate[posterVideo][fields][0]=url`
    );
    const result = (await response.json()) as ICurso;

    const attr = result.data.attributes;

    const mappedData = {
        id: result.data.id,
        titleHeader: attr.TituloHeader,
        textHeader: attr.TextoHeader,
        buttonHeader: attr.TextoBoton,
        linkHeader: attr.Link ?? "",
        image: `${STRAPI_URL}${attr?.Imagen?.data?.attributes?.url}`,
        posterVideo: `${STRAPI_URL}${attr?.posterVideo?.data?.attributes?.url}`,
        subtitleTrasnform: attr.SubtituloTransform,
        titleTrasnform: attr.TituloTransform,
        textTransform: attr.ParrafoTransform,
        blocks: attr.Bloques,
        linkVideo: attr.LinkVideo,
        titleTestimonio: attr.TituloTestimonio.Titulo,
        subTitleTestimonio: attr.TituloTestimonio.Subtitulo,
        buttonTestimonio: attr.TextoBotonTEstimonio,
        linkTestimonio: attr.LinkTestimonio,
        downloadTitle: attr.DownloadSeccion.Titulo,
        downloadSubtitle: attr.DownloadSeccion.Subtitulo,
        downloadParagraph: attr.DownloadSeccion.parrafos,
        buttonDownload: attr.BotonDownload,
        linkDownload: attr.LinkDowndload,
    };

    return mappedData;
}


export interface ICursoResult {
    id: number;
    titleHeader: string;
    textHeader: string;
    buttonHeader: string;
    linkHeader: string;
    image: string;
    posterVideo: string;
    subtitleTrasnform: string;
    titleTrasnform: string;
    textTransform: string;
    blocks: Bloque[];
    linkVideo: string;
    titleTestimonio: string;
    subTitleTestimonio: string | null;
    buttonTestimonio: string;
    linkTestimonio: string;
    downloadTitle: string;
    downloadSubtitle: string | null;
    downloadParagraph: Parrafo[] | undefined;
    buttonDownload: string;
    linkDownload: string;
} 