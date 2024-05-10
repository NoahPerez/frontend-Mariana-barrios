import { TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";
import { IBlock } from "services/pages/home";
import Link from "next/link";

type TProps = TSection & {
    data: IBlock;
};

const StillQuestionSection = ({
    data: { title, buttonText, paragraphs, link },
}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white" py="tw-pt-0 tw-py-0">
            <div className="tw-flex tw-flex-col tw-bg-spring tw-rounded-xl tw-p-6">
                <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center">
                    {title && (
                        <>
                            <Text
                                as="h2"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-text-center tw-mb-4"
                            >
                                {title}
                            </Text>
                            {paragraphs?.map((e) => (
                                <Text
                                    key={e.id}
                                    as="p"
                                    color="primary"
                                    className="tw-w-full tw-mb-8 tw-text-center"
                                >
                                    {e.parrafo}
                                </Text>
                            ))}

                            <Link
                                href={link ?? ""}
                                className="tw-mt-5 tw-p-2 tw-px-6 tw-rounded-lg tw-text-white tw-font-medium hover:tw-text-white tw-text-center tw-bg-primary"
                            >
                                {buttonText}
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default StillQuestionSection;
