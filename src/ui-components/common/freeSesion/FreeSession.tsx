import { Container } from "@uic/ui/container";
import { Text } from "@uic/ui/text";
import { TSection } from "@utils/types";
import Link from "next/link";
import { IFreeSesionResult } from "services/freeSesion/getFreeSesion";
import { StrapiImage } from "../StrapiImage";

type TProps = TSection & {
    data: IFreeSesionResult;
};

const FreeSession = ({
    data: { img, link, text, textButton, title },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-rounded-3xl tw-overflow-hidden tw-bg-spring md:tw-flex-row tw-flex-col">
                <div className="tw-p-12 md:tw-p-16 tw-w-full md:tw-w-2/3 tw-flex tw-flex-col tw-items-start tw-justify-center">
                    {title && (
                        <Text
                            as="h2"
                            size="xl"
                            color="primary"
                            className="tw-mb-8"
                        >
                            {title}
                        </Text>
                    )}

                    {text && (
                        <Text size="lg" color="primary" className="tw-mb-4">
                            {text}
                        </Text>
                    )}
                    <Link
                        href={link ?? ""}
                        className="tw-mt-5 tw-p-2 tw-px-6 tw-rounded-lg tw-text-white tw-font-medium hover:tw-text-white tw-text-center tw-bg-primary"
                    >
                        {textButton}
                    </Link>
                </div>
                <div className="tw-w-full tw-rounded-r-3xl md:tw-w-1/3 tw-flex tw-justify-end tw-aspect-square">
                    <StrapiImage
                        src={img}
                        alt={title || "Sesion gratuita"}
                        width={100}
                        height={250}
                        className="md:tw-max-w-[400px] tw-w-full tw-aspect-square tw-object-cover"
                    />
                    {/* <img
                        src={img}
                        alt={title}
                        className="md:tw-max-w-[400px] tw-w-full tw-aspect-square tw-object-cover"
                    /> */}
                </div>
            </div>
        </Container>
    );
};

export default FreeSession;
