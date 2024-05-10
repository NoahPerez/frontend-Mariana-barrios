import { SectionTitleType } from "@utils/types";
import { Text } from "@components/ui/text";
import Button from "@components/ui/button";
import { Container } from "@components/ui/container";


type TProps = {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        paragraph2?: string;
        button?: string;
    };
};
const DownloadGuide = ({
    data: { section_title, paragraph1, paragraph2, button },
}: TProps) => {
    return (
        <Container bg="white" clases="">
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-max-w-[600px] tw-mx-auto ">
                {section_title && (
                    <>
                        <Text
                            as="h1"
                            size="xl"
                            color="primary"
                            className="tw-w-full tw-text-center tw-mb-4"
                        >
                            {section_title.title}
                        </Text>
                        <Text className="tw-text-center tw-max-w-[500px] tw-mx-auto tw-mb-6">
                            {paragraph1}
                        </Text>
                        <Button className="tw-mb-24">{button}</Button>
                        <Text>{paragraph2}</Text>
                    </>
                )}
            </div>
        </Container>
    );
};

export default DownloadGuide;
