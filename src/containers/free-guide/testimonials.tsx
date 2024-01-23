import { SectionTitleType, ItemType } from "@utils/types";
import { Text } from "@components/ui/text";
import Button from "@components/ui/button";
import { Container } from "@components/ui/container";
import Testimonial from "@components/testimonial/testimonial-06";

type TProps = {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        paragraph2?: string;
        img?: string;
        button?: string;
        items?: ItemType[];
    };
};
const TestimonialGuide = ({
    data: { section_title, items, button },
}: TProps) => {
    return (
        <Container bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="tw-w-full tw-flex-col sm:tw-flex-row tw-flex tw-gap-4 sm:tw-justify-between">
                    {section_title && (
                        <div className="tw-flex tw-flex-col">
                            <Text
                                as="span"
                                size="md"
                                color="primary"
                                className="tw-capitalize tw-w-full tw-block tw-text-left tw-mb-2"
                            >
                                {section_title.subtitle}
                            </Text>
                            <Text
                                as="h1"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-text-left tw-mb-2 sm:tw-mb-0"
                            >
                                {section_title.title}
                            </Text>
                        </div>
                    )}
                    <Button className="tw-self-start sm:tw-self-center">
                        {button}
                    </Button>
                </div>
                <div className="tw-w-full tw-max-w-[800px] tw-mx-auto tw-mt-16 tw-auto-testimonial-columns">
                    {items &&
                        items.length > 0 &&
                        items.map((item) => (
                            <Testimonial
                                key={item.id}
                                name={item.name}
                                designation={item.designation}
                                review={item.description}
                                image={item.images?.[0]}
                                rating={item.rating ?? 5}
                            />
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default TestimonialGuide;
