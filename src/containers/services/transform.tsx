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


const TransformSection = ({
    data: { section_title, items, paragraph1, img },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="lg:tw-w-full">
                    {section_title && (
                        <>
                            <Text
                                as="span"
                                size="md"
                                color="primary"
                                className="tw-w-full tw-mb-2 tw-block tw-text-left"
                            >
                                {section_title.subtitle}
                            </Text>
                            <Text
                                as="h2"
                                size="xl"
                                color="primary"
                                className="tw-w-full md:tw-w-2/3 tw-mb-4"
                            >
                                {section_title.title}
                            </Text>
                            <Text
                                as="p"
                                color="primary"
                                className="tw-w-full tw-mb-12 md:tw-w-2/3"
                            >
                                {paragraph1}
                            </Text>
                        </>
                    )}
                </div>
                <div className="lg:tw-flex-row tw-flex-col-reverse tw-mt-12 tw-flex tw-justify-between tw-gap-12">
                    <div  className="tw-flex tw-flex-col tw-w-full lg:tw-w-2/2 tw-items-center tw-justify-center tw-gap-10">
                        {items &&
                            items.map((e) => (
                                <div
                                    key={e.id}
                                    className="tw-flex tw-gap-4 tw-justify-between tw-items-center"
                                >
                                    <div className="tw-rounded-full tw-w-12 tw-h-12 tw-bg-spring tw-p-2 tw-flex tw-items-center tw-justify-center tw-aspect-square">
                                        <img
                                            src={e.icon}
                                            alt={e.title}
                                            width={25}
                                            height={25}
                                        />
                                    </div>
                                    <div className="tw-flex tw-flex-col">
                                        <Text as="h3">{e.title}</Text>
                                        <Text as="p">{e.description}</Text>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="tw-block tw-aspect-square">
                        <img
                            className="tw-h-full tw-w-full tw-object-cover h-95"
                            src={img}
                            alt={section_title?.title}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TransformSection;
