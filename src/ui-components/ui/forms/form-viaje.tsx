import { forwardRef, useState } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@ui/form-elements/input";
import Feedback from "@ui/form-elements/feedback";
import Button from "@ui/button";
import { hasKey } from "@utils/methods";
import { Text } from "../text";

type TProps = {
    className?: string;
    button?: string;
};

interface IFormValues {
    name: string;
    email: string;
}

const FormViajes = forwardRef<HTMLFormElement, TProps>(
    ({ className, button = "Enviar" }, ref) => {
        const [message, setMessage] = useState("");
        const {
            register,
            handleSubmit,
            formState: { errors },
            reset,
        } = useForm<IFormValues>();

        const onSubmit: SubmitHandler<IFormValues> = async (form) => {
            // eslint-disable-next-line no-console
            const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
            let url = `${API_URL}/formulario-viajes`;

            const data = {
                data: { ...form },
            };
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const data2 = await response.json();

            console.log({ data2 });
            reset();
            setMessage(
                "Muchas gracias!, pronto nos pondremos en contacto contigo."
            );
        };
        return (
            <form
                className={`${clsx(
                    className
                )} tw-flex tw-flex-col tw-gap-4 tw-w-full `}
                ref={ref}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="tw-flex tw-flex-col tw-w-full tw-gap-2">
                    <div>
                        <label htmlFor="name" className="tw-sr-only">
                            Nombre
                        </label>
                        <Input
                            id="name"
                            placeholder="Tu nombre*"
                            bg="light"
                            feedbackText={errors?.name?.message}
                            state={hasKey(errors, "name") ? "error" : "success"}
                            showState={!!hasKey(errors, "name")}
                            {...register("name", {
                                required: "Nombre es requerido",
                            })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="tw-sr-only">
                            email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Tu email*"
                            bg="light"
                            feedbackText={errors?.email?.message}
                            state={
                                hasKey(errors, "email") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "email")}
                            {...register("email", {
                                required: "Email es requerido",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                    </div>
                </div>
                <Text>We care about your data un your privacy policy</Text>
                <Button
                    type="submit"
                    className="tw-rounded-lg tw-bg-primary tw-text-white tw-px-4 tw-p-2 hover:tw-text-white tw-max-w-[200px]"
                >
                    {button}
                </Button>
                {message && <Feedback state="success">{message}</Feedback>}
            </form>
        );
    }
);

export default FormViajes;
