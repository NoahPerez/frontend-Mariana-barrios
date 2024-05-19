
import { Container } from "@uic/ui/container";
import { Text } from "@uic/ui/text";
import Link from "next/link";
import { IBlock } from "services/pages/home";
import { StrapiImage } from "../StrapiImage";

type TProps = {
    data: IBlock;
};

const MyBook = ({
    data: {  buttonText, img, link, paragraphs, subtitle, title },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col-reverse md:tw-flex-row md:tw-gap-10">
                <div className="tw-w-full md:tw-w-1/2 tw-flex tw-flex-col tw-items-start tw-justify-center">
                    {subtitle && (
                        <Text
                            as="h3"
                            size="lg"
                            color="primary"
                            className="tw-mb-8"
                        >
                            {subtitle}
                        </Text>
                    )}
                    {title && (
                        <Text
                            as="h2"
                            size="xl"
                            color="primary"
                            className="tw-mb-8"
                        >
                            {title}
                        </Text>
                    )}

                    {paragraphs &&
                        paragraphs.map((paragraph) => (
                            <Text
                                key={paragraph.id}
                                size="lg"
                                color="primary"
                                className="tw-mb-4"
                            >
                                {paragraph.parrafo}
                            </Text>
                        ))}

                    <Link
                        href={link ?? ""}
                        className="tw-mt-5 tw-p-2 tw-px-6 tw-rounded-lg tw-text-white tw-font-medium hover:tw-text-white tw-text-center tw-bg-primary"
                    >
                        {buttonText}
                    </Link>
                </div>
                <div className="tw-w-full md:tw-w-1/2 tw-mb-10 md:tw-mb-0 md:tw-px-4 tw-flex tw-justify-end">
                    <StrapiImage
                        alt={title || "Mi libro"}
                        width={200}
                        height={250}
                        className="md:tw-max-w-[400px] tw-w-full tw-object-cover"
                        src={img}
                    />
                    {/* <img
                        src={img}
                        alt={title}
                        className="md:tw-max-w-[400px] tw-w-full tw-object-cover"
                    /> */}
                </div>
            </div>
        </Container>
    );
};

export default MyBook;
