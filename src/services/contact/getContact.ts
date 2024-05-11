import { API_URL } from "config/config";
import { Direccion, IContact } from "./types";


export async function getContact() {
    const response = await fetch(`${API_URL}/contacto?populate=*`);
    const { data } = (await response.json()) as IContact;

    const mapped: IContactResult = {
      id: data.id,
      title: data.attributes.Titulo,
      titleForm: data.attributes.TituloFormulario,
      buttonText: data.attributes.TextoBotonFormulario,
      address: data.attributes.Direccion,
      hour: data.attributes.Horario,
    };
    return mapped
}


export type IContactResult = {
  id: number;
  title: string;
  titleForm: string;
  buttonText: string;
  address: Direccion[];
  hour: Direccion[];
};