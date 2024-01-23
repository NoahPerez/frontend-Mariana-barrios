import { ItemType, SectionTitleType } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";

type TProps = {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        paragraph2?: string;
        items?: ItemType[];
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
                            {section_title.title}
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
                                className="tw-transition-all tw-border-[1px] tw-border-transparent hover:tw-border-spring tw-p-4"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="tw-mb-4"
                                />
                                <Text as="h3" size="lg">
                                    {item.title}
                                </Text>
                                <Text size="md">{item.description}</Text>
                            </div>
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default AreasHome;
