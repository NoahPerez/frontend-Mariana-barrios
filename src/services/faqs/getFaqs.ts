import { API_URL } from "config/config";
import { IFaqs } from "./types";

export type IFaqData = {
    id: number;
    question: string;
    answer: string;
};

export async function getFaqs() {
    const response = await fetch(`${API_URL}/faqs`);
    const { data } = (await response.json()) as IFaqs;

    const mapped: IFaqData[] = data.map((e) => {
        return {
            id: e.id,
            question: e.attributes.pregunta,
            answer: e.attributes.respuesta,
        };
    });
    return mapped;
}
