import { ItemType, SectionTitleType, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";
import Button from "@components/ui/button";

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        img?: string;
        items?: ItemType[];
        button?: string;
    };
};

const StillQuestionSection = ({
    data: { section_title, button, paragraph1 },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white" py="tw-pt-0 tw-py-0">
            <div className="tw-flex tw-flex-col tw-bg-spring tw-rounded-xl tw-p-6">
                <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center">
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
                                className="tw-w-full tw-mb-8 tw-text-center"
                            >
                                {paragraph1}
                            </Text>
                            <Button>{button}</Button>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default StillQuestionSection;
