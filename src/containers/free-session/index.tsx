import { SectionTitleType, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";
import Button from "@components/ui/button";

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        paragraph2?: string;
        img?: string;
    };
};

const FreeSession = ({ data: { section_title, paragraph1, img } }: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-rounded-3xl tw-overflow-hidden tw-bg-spring md:tw-flex-row tw-flex-col">
                <div className="tw-p-12 md:tw-p-16 tw-w-full md:tw-w-2/3 tw-flex tw-flex-col tw-items-start tw-justify-center">
                    {section_title && (
                        <Text
                            as="h2"
                            size="xl"
                            color="primary"
                            className="tw-mb-8"
                        >
                            {section_title.title}
                        </Text>
                    )}
                    {paragraph1 && (
                        <Text size="lg" color="primary" className="tw-mb-4">
                            {paragraph1}
                        </Text>
                    )}
                    <Button className="tw-mt-5">
                        <i className="tw-mr-4" />
                        Book now
                    </Button>
                </div>
                <div className="tw-w-full tw-rounded-r-3xl md:tw-w-1/3 tw-flex tw-justify-end tw-aspect-square">
                    <img
                        src={img}
                        alt={section_title?.title}
                        className="md:tw-max-w-[400px] tw-w-full tw-aspect-square tw-object-cover"
                    />
                </div>
            </div>
        </Container>
    );
};

export default FreeSession;
