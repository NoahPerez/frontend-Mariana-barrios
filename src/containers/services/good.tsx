import { ItemType, SectionTitleType, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";
import Accordion from "@components/ui/accordion";

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        img?: string;
        items?: ItemType[];
    };
};

const GoodSection = ({
    data: { section_title, items, paragraph1 },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="tw-w-full">
                    {section_title && (
                        <>
                            <Text
                                as="h2"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-text-center tw-mb-4"
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
                <div className="tw-mt-12 tw-w-full tw-max-w-[800px] tw-mx-auto">
                    {items && items?.length > 0 && (
                        <Accordion
                            items={items}
                            defaultActiveKey={items[0].id}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default GoodSection;
