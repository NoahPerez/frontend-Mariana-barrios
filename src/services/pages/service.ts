import { API_URL, STRAPI_URL } from "config/config";
import { IService } from "./types.service";
import { Card } from "./types.home";

export async function getService() {
    const response = await fetch(`${API_URL}/servicio?populate=*`);
    const result = (await response.json()) as IService;

    const attr = result.data.attributes;

    const mappedData: IServiceResult = {
        id: result.data.id,
        subtitle: attr.SubtituloHeader,
        title: attr.TituloHeader,
        text: attr.textoHeader,
        textButton: attr.TextoBotonHeader,
        linkButton: attr.LinkBotonHeader,
        banner: `${STRAPI_URL}${attr.BannerHeader.data.attributes.url}`,
        tePropongoTitle: attr.TePropongoTitulo,
        tePropongo: attr.tePropongo,
        subtitleTransform: attr.SubtituloTransformacion,
        titleTransform: attr.TituloTransformacion,
        textTransform: attr.DescripcionTransformacion,
        listTransform: attr.ListaTransformacion,
        imgTransform: `${STRAPI_URL}${attr.ImagenTransformacion.data.attributes.url}`,
        faqTitle: attr.FaqTitulo,
        faqText: attr.FaqTexto,
        moreQuestionsTitle: attr.MasPreguntasTitulo,
        moreQuestionsText: attr.MasPreguntasTexto,
        moreQuestionsButtonText: attr.MasPreguntasBoton,
        moreQuestionsLink: attr.MasPreguntasLink,
    };

    return mappedData;
}

export interface IServiceResult {
    id: number;
    subtitle: string;
    title: string;
    text: string;
    textButton: string;
    linkButton: string;
    banner: string;
    tePropongoTitle: string;
    tePropongo: Card[];
    subtitleTransform: string;
    titleTransform: string;
    textTransform: string;
    listTransform: Card[];
    imgTransform: string;
    faqTitle: string;
    faqText: string;
    moreQuestionsTitle: string;
    moreQuestionsText: string;
    moreQuestionsButtonText: string;
    moreQuestionsLink: string;
}
