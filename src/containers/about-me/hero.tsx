import { motion } from "framer-motion";
// import CourseCard from "@components/course-card/course-01";
// import BottomShape from "@ui/bottom-shape/shape-01";
import { scrollUpVariants } from "@utils/variants";
import {
    HeadingType,
    TextType,
    ButtonType,
    ImageType,
    ICourse,
} from "@utils/types";
import { Text } from "@components/ui/text";
import Button from "@components/ui/button";
import { Container } from "@components/ui/container";

type TProps = {
    data: {
        headings?: HeadingType[];
        paragraph1?: string;
        buttons?: ButtonType[];
        images?: ImageType[];
        popularCourse: ICourse;
    };
};

const HeroAbout = ({ data: { headings, paragraph1, images } }: TProps) => {
    return (
        <div className="tw-h-full md:tw-min-h-[750px] xl:tw-min-h-[820px] tw-py-[50px] tw-relative tw-flex tw-items-center tw-isolate tw-bg-pearl tw-overflow-hidden">
            <div className="bgimg tw-absolute tw-inset-0 -tw-z-10 tw-hidden md:tw-block">
                {images?.[0]?.src && (
                    <img
                        src={images[0].src}
                        alt={images[0]?.alt || "bg"}
                        loading="eager"
                        className="tw-w-full tw-h-full tw-object-cover"
                    />
                )}
            </div>
            <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-px-4 md:tw-pl-24">
                <motion.div
                    className="content tw-text-center tw-mb-7.5 md:tw-text-left md:tw-self-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={scrollUpVariants}
                >
                    {headings?.[0]?.content && (
                        <span className="tw-text-sm tw-mb-2.5 -tw-tracking-tightest tw-font-bold tw-leading-loose tw-uppercase tw-text-white tw-block md:tw-mb-[18px] md:tw-tracking-[4px]">
                            {headings[0].content}
                        </span>
                    )}
                    {headings?.[1]?.content && (
                        <Text
                            className="tw-mb-8 tw-text-left"
                            size="big"
                            color="white"
                            as="h1"
                        >
                            {headings[1].content}
                        </Text>
                    )}
                    <Text color="white" size="lg" className="tw-mb-8">
                        {paragraph1}
                    </Text>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroAbout;
