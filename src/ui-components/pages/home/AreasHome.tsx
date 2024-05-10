

import { Card } from "services/pages/types.home";
import { Text } from "@uic/ui/text";
import { Container } from "@uic/ui/container";

type TProps = {
    data: {
        section_title?: string;
        paragraph1?: string;
        paragraph2?: string;
        items?: Card[];
        img?: string;
    };
};

const AreasHome = ({
    data: { section_title, paragraph1, paragraph2, items },
}: TProps) => {
    return (
        <Container clases="areas-area" bg="white">
            <div className="tw-flex tw-flex-col tw-gap-24">
                <div className="tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-gap-8 md:tw-gap-12">
                    {section_title && (
                        <Text
                            as="h2"
                            size="xl"
                            color="primary"
                            className="tw-w-full md:tw-w-1/2"
                        >
                            {section_title}
                        </Text>
                    )}
                    <div className="tw-flex tw-flex-col tw-w-full md:tw-w-1/2">
                        {paragraph1 && (
                            <Text size="md" color="primary">
                                {paragraph1}
                            </Text>
                        )}
                        {paragraph2 && (
                            <Text size="md" color="primary">
                                {paragraph2}
                            </Text>
                        )}
                    </div>
                </div>
                <div className="tw-auto-3-columns">
                    {items &&
                        items?.length > 0 &&
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="tw-transition-all tw-border-[1px] tw-border-transparent hover:tw-border-spring tw-p-4 hover:tw-shadow-md hover:tw-shadow-black/5"
                            >
                                <img
                                    src={item.icono ?? ""}
                                    alt={item.titulo}
                                    width={40}
                                    height={40}
                                    className="tw-mb-4"
                                />
                                <Text as="h3" size="lg">
                                    {item.titulo}
                                </Text>
                                <Text size="md">{item.cuerpo}</Text>
                            </div>
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default AreasHome;
