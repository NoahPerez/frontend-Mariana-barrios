import { Text } from "@components/ui/text";
import Button from "@components/ui/button";
import { Container } from "@components/ui/container";
import Testimonial from "./Testimonail-06";
import { ICommentResult } from "services/comments/getComments";

type TProps = {
    data: {
        title: string;
        subtitle: string;
        img?: string;
        button?: string;
        items?: ICommentResult[];
    };
};
const TestimonialCursos = ({
    data: { title, subtitle, items, button },
}: TProps) => {
    return (
        <Container bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="tw-w-full tw-flex-col sm:tw-flex-row tw-flex tw-gap-4 sm:tw-justify-between">
                    {title && (
                        <div className="tw-flex tw-flex-col">
                            <Text
                                as="span"
                                size="md"
                                color="primary"
                                className="tw-capitalize tw-w-full tw-block tw-text-left tw-mb-2"
                            >
                                {subtitle}
                            </Text>
                            <Text
                                as="h1"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-text-left tw-mb-2 sm:tw-mb-0"
                            >
                                {title}
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
                                name={item.title ?? ""}
                                review={item.body ?? ""}
                                image={{
                                    height: 70,
                                    width: 70,
                                    src: item.img,
                                }}
                                rating={item.stars}
                            />
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default TestimonialCursos;
