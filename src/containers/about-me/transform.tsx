import { ItemType, SectionTitleType, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        img?: string;
        items?: ItemType[];
    };
};

const TransformAbout = ({
    data: { section_title, items, paragraph1 },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col tw-w-full tw-gap-16">
                <div className="tw-flex tw-flex-col tw-w-full tw-max-w-[800px] tw-mx-auto">
                    {section_title && (
                        <>
                            <Text
                                as="span"
                                size="md"
                                color="primary"
                                className="tw-w-full tw-mb-2 tw-block tw-text-center"
                            >
                                {section_title.subtitle}
                            </Text>
                            <Text
                                as="h2"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-mb-4 tw-text-center"
                            >
                                {section_title.title}
                            </Text>
                            <Text
                                as="p"
                                color="primary"
                                className="tw-w-full tw-mb-12 tw-text-center"
                            >
                                {paragraph1}
                            </Text>
                        </>
                    )}
                </div>
                <div className="tw-auto-3-columns">
                    {items?.map((e) => (
                        <div
                            key={e.id}
                            className="tw-flex tw-flex-col tw-gap-4 tw-mb-8 tw-justify-between tw-items-center "
                        >
                            <div className="tw-rounded-full tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-bg-spring">
                                <img
                                    src={e.icono ?? ''}
                                    alt={e.title}
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <div className="tw-flex tw-flex-col">
                                <Text
                                    as="h3"
                                    className="tw-w-full tw-text-center"
                                >
                                    {e.title}
                                </Text>
                                <Text
                                    as="p"
                                    className="tw-w-full tw-text-center"
                                >
                                    {e.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default TransformAbout;
