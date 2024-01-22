import { motion } from "framer-motion";
import Section from "@ui/section";
import BlogCard from "@components/blog-card/blog-03";
import SectionTitle from "@components/section-title";
import { scrollUpVariants } from "@utils/variants";
import { MottoType, SectionTitleType, IBlog, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import { Text } from "@components/ui/text";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedBlogCard = motion(BlogCard);

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        paragraph1: string;
        paragraph2: string;
        img: string;
    };
};

const MyBook = ({ data: { section_title, paragraph1, paragraph2, img }}: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col-reverse md:tw-flex-row md:tw-gap-10">
                <div className="tw-w-1/2 tw-flex tw-flex-col">
                    {section_title && (
                        <Text as="h2" size="xl" color="primary">
                            {section_title.title}
                        </Text>
                    )}
                    {paragraph1 && (
                        <Text size="lg" color="primary">
                            {paragraph1}
                        </Text>
                    )}
                    {paragraph2 && (
                        <Text size="md" color="primary">
                            {paragraph2}
                        </Text>
                    )}
                </div>
                <div className="tw-w-1/2 tw-px-4">
                    <img
                        src={img}
                        alt={section_title?.title}
                        className="md:tw-max-w-[400px] tw-w-full"
                    />
                </div>
            </div>
        </Container>
    );
};


export default MyBook;
