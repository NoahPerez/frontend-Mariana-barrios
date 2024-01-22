import { motion } from "framer-motion";
import NewsletterForm from "@components/forms/newsletter-form";
import { SectionTitleType, TSection } from "@utils/types";
import { scrollUpVariants } from "@utils/variants";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        paragraph1: string;
    };
};

const NewsletterArea = ({ data: { section_title, paragraph1 } }: TProps) => {
    return (
        <Container bg="grey" py="tw-py-6 md:tw-py-[50px]">
            <motion.div
                className="tw-flex tw-flex-col xl:tw-flex-row tw-gap-8 xl:tw-gap-4 xl:tw-justify-between"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                variants={scrollUpVariants}
            >
                <div className="tw-flex tw-flex-col">
                    {section_title && (
                        <Text
                            as="h2"
                            size="xlarge"
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
                </div>
                <NewsletterForm className="" />
            </motion.div>
        </Container>
    );
};

export default NewsletterArea;
