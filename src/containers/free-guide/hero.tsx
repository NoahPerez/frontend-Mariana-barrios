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
        paragraph2?: string;
        img?: string;
        button?: string;
    };
};
const HeroFreeGuide = ({
    data: { section_title, paragraph1, paragraph2, img, button },
}: TProps) => {
    const idName = useId();
    const idEmail = useId();
    return (
        <div className="tw-flex tw-relative tw-min-h-[80vh] tw-px-4 tw-bg-spring md:tw-bg-transparent">
            <div className="tw-w-full md:tw-w-1/2 tw-py-12 md:tw-py-0 tw-mx-auto tw-flex tw-justify-end  md:tw-bg-white tw-items-center">
                <div className="tw-w-full lg:tw-max-w-[600px]  tw-block md:tw-pr-16 lg:tw-pr-24">
                    {section_title && (
                        <>
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
                            <Input
                                id={idName}
                                className="tw-mb-4"
                                placeholder="Your name"
                                name="name"
                            />
                            <Input
                                id={idEmail}
                                className="tw-mb-6"
                                placeholder="Enter your email"
                                name="email"
                            />
                            <Text
                                as="p"
                                color="primary"
                                className="tw-w-full tw-mb-4 tw-text-left"
                            >
                                {paragraph2}
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

export default HeroFreeGuide;
