

import { IBlock } from "services/pages/home";
import { IFaqData } from "services/faqs/getFaqs";
import { Container } from "@uic/ui/container";
import { Text } from "@uic/ui/text";
import { TSection } from "@uic/types/types";
import Accordion from "@uic/ui/accordeon";

type TProps = TSection & {
    data: {
        texts: IBlock;
        faqs: IFaqData[];
    };
};

const GoodSection = ({ data: { texts, faqs } }: TProps) => {
    const faqsArr = faqs.map((e) => {
        return {
            id: e.id,
            title: e.question,
            description: e.question,
        };
    });
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="tw-w-full">
                    {texts && (
                        <>
                            <Text
                                as="h2"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-text-center tw-mb-4"
                            >
                                {texts.title}
                            </Text>
                            {texts.paragraphs &&
                                texts.paragraphs.map((paragraph) => (
                                    <Text
                                        key={paragraph.id}
                                        as="p"
                                        color="primary"
                                        className="tw-w-full tw-mb-12 tw-text-center"
                                    >
                                        {paragraph.parrafo}
                                    </Text>
                                ))}
                        </>
                    )}
                </div>
                <div className="tw-mt-12 tw-w-full tw-max-w-[800px] tw-mx-auto">
                    {faqs && faqs?.length > 0 && (
                        <Accordion
                            items={faqsArr}
                            defaultActiveKey={faqsArr[0].id}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default GoodSection;
