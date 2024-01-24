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
    SectionTitleType,
} from "@utils/types";
import { Text } from "@components/ui/text";
import Button from "@components/ui/button";
import { Container } from "@components/ui/container";
import Input from "@components/ui/form-elements/input";
import { useId } from "react";

type TProps = {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        img?: string;
        button?: string;
    };
};
const HeroExtra = ({
    data: { section_title, paragraph1, img, button },
}: TProps) => {
    return (
        <div className="tw-flex tw-relative tw-min-h-[80vh] tw-pb-[30px] tw-px-4 tw-bg-spring tw-pt-[60px]">
            <div className="tw-w-full md:tw-w-1/2 tw-py-12 md:tw-py-0 tw-mx-auto tw-flex tw-justify-end  tw-bg-transparent tw-items-center">
                <div className="tw-w-full lg:tw-max-w-[600px] tw-mt-10 tw-block md:tw-pr-16 lg:tw-pr-24">
                    {section_title && (
                        <>
                            <Text
                                as="span"
                                size="md"
                                color="primary"
                                className="tw-w-full tw-text-left tw-mb-4 tw-block"
                            >
                                {section_title.subtitle}
                            </Text>
                            <Text
                                as="h1"
                                size="big"
                                color="primary"
                                className="tw-w-full tw-text-left tw-mb-8"
                            >
                                {section_title.title}
                            </Text>
                            <Text
                                as="p"
                                size="lg"
                                color="primary"
                                className="tw-w-full tw-mb-12 tw-text-left"
                            >
                                {paragraph1}
                            </Text>
                            <Button>{button}</Button>
                        </>
                    )}
                </div>
            </div>
            <div className="tw-bg-spring tw-items-center tw-w-1/2 tw-hidden tw-justify-start md:tw-flex">
                <div className="tw-max-w-[600px] md:tw-px-4 md:tw-pl-16 lg:tw-pl-24  tw-py-12 tw-w-full tw-block">
                    <img src={img} alt={section_title?.title} />
                </div>
            </div>
        </div>
    );
};

export default HeroExtra;
