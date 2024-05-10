import { SectionTitleType } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";
import Button from "@components/ui/button";

type TProps = {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        paragraph2?: string;
        img?: string;
    };
};

const MyBook = ({
    data: { section_title, paragraph1, paragraph2 },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col-reverse md:tw-flex-row md:tw-gap-10">
                <div className="tw-w-full md:tw-w-1/2 tw-flex tw-flex-col tw-items-start tw-justify-center">
                    {section_title && (
                        <Text
                            as="h2"
                            size="xl"
                            color="primary"
                            className="tw-mb-8"
                        >
                            {/* {section_title.title} */}
                            Te presento La verdad que habita en ti
                        </Text>
                    )}
                    {paragraph1 && (
                        <Text size="lg" color="primary" className="tw-mb-4">
                            {paragraph1}
                        </Text>
                    )}
                    {paragraph2 && (
                        <Text size="md" color="primary" className="tw-mb-4">
                            {paragraph2}
                        </Text>
                    )}
                    <Button className="tw-mt-5">
                        <i className="tw-mr-4" />
                        Consigue mi libro
                    </Button>
                </div>
                <div className="tw-w-1/2 tw-mb-10 md:tw-mb-0 md:tw-px-4 tw-flex tw-justify-end">
                    <img
                        src="images/mybook/mybook.png"
                        alt={section_title?.title}
                        className="md:tw-max-w-[400px] tw-w-full"
                    />
                </div>
            </div>
        </Container>
    );
};

export default MyBook;
