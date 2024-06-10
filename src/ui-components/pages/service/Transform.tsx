import { StrapiImage } from "@uic/common/StrapiImage";
import { Container } from "@uic/ui/container";
import { Text } from "@uic/ui/text";
import { TSection } from "@utils/types";

import { IBlock } from "services/pages/home";

type TProps = TSection & {
    data: IBlock;
};

const TransformSection = ({
    data: { title, subtitle, paragraphs, cards, img },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="lg:tw-w-full">
                    {title && (
                        <>
                            <Text
                                as="span"
                                size="md"
                                color="primary"
                                className="tw-w-full tw-mb-2 tw-block tw-text-left"
                            >
                                {subtitle}
                            </Text>
                            <Text
                                as="h2"
                                size="xl"
                                color="primary"
                                className="tw-w-full md:tw-w-2/3 tw-mb-4"
                            >
                                {title}
                            </Text>
                            {paragraphs &&
                                paragraphs.map((e) => (
                                    <Text
                                        key={e.id}
                                        as="p"
                                        color="primary"
                                        className="tw-w-full tw-mb-12 md:tw-w-2/3"
                                    >
                                        {e.parrafo}
                                    </Text>
                                ))}
                        </>
                    )}
                </div>
                <div className="lg:tw-flex-row tw-flex-col-reverse tw-mt-12 tw-flex tw-justify-between tw-gap-12">
                    <div className="tw-flex tw-flex-col tw-w-full lg:tw-w-2/2 tw-items-center tw-justify-center tw-gap-10">
                        {cards &&
                            cards.map((e) => (
                                <div
                                    key={e.id}
                                    className="tw-flex tw-gap-4 tw-justify-between tw-items-center"
                                >
                                    {e.icono && (
                                        <div className="tw-rounded-full tw-w-12 tw-h-12 tw-bg-spring tw-min-w-[3rem] tw-p-2 tw-flex tw-items-center tw-justify-center tw-aspect-square">
                                            <img
                                                src={`/icons/svg/${
                                                    e.icono ?? ""
                                                }.svg`}
                                                alt={e.titulo}
                                                width={25}
                                                height={25}
                                            />
                                        </div>
                                    )}
                                    {e.titulo && (
                                        <div className="tw-flex tw-flex-col">
                                            <Text as="h3">{e.titulo}</Text>
                                            <Text as="p">{e.cuerpo}</Text>
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                    <div className="tw-block tw-aspect-square">
                        <StrapiImage
                            alt={title || "transformacion"}
                            width={100}
                            height={250}
                            className="tw-h-full tw-w-full tw-object-cover h-95"
                            src={img}
                        />
                        {/* <img
                            className="tw-h-full tw-w-full tw-object-cover h-95"
                            src={img}
                            alt={title}
                        /> */}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TransformSection;
