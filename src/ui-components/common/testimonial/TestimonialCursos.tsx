import { Text } from "@components/ui/text";
import { Container } from "@components/ui/container";
import Testimonial from "./Testimonail-06";
import { ICommentResult } from "services/comments/getComments";
import Link from "next/link";

type TProps = {
    data: {
        title: string;
        subtitle: string;
        img?: string;
        button?: string;
        link?: string;
        items?: ICommentResult[];
    };
};
const TestimonialCursos = ({
    data: { title, subtitle, items, button, link },
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
                    <Link
                        href={link ?? "/"}
                        className="tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-rounded-md tw-transition-colors tw-min-w-max tw-inline-flex tw-bg-primary tw-border-primary tw-text-white hover:tw-bg-secondary hover:tw-border-secondary hover:tw-text-white tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px] md:tw-px-10 tw-self-start sm:tw-self-center"
                    >
                        {button}
                    </Link>
                </div>
                <div className="tw-w-full tw-max-w-[800px] tw-mx-auto tw-mt-16 tw-auto-testimonial-columns">
                    {items &&
                        items.length > 0 &&
                        items.map((item) => (
                            <Testimonial
                                key={item.id}
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
