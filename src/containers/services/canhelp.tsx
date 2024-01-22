import { ItemType, SectionTitleType, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        paragraph1: string;
        paragraph2: string;
        img: string;
        items: ItemType[];
    };
};

const CanHelp = ({ data: { section_title, items } }: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="tw-mx-auto md:tw-w-1/2">
                    {section_title && (
                        <Text
                            as="h2"
                            size="xl"
                            color="primary"
                            className="tw-w-full tw-text-center tw-mb-8"
                        >
                            {section_title.title}
                        </Text>
                    )}
                </div>
                <div className="tw-auto-2-columns tw-max-w-[800px] tw-mx-auto tw-mt-10">
                    {items.map((e) => (
                        <div
                            key={e.id}
                            className="tw-p-10 tw-border-[1px] tw-border-spring"
                        >
                            <Text type="title" size="lg" as="h3">
                                {e.title}
                            </Text>
                            <Text>{e.description}</Text>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default CanHelp;
