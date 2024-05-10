import { motion } from "framer-motion";
// import CourseCard from "@components/course-card/course-01";
// import BottomShape from "@ui/bottom-shape/shape-01";
import { scrollUpVariants } from "@utils/variants";

import { Text } from "@components/ui/text";
import Button from "@components/ui/button";

type TProps = {
    data: {
        subtitle?: string;
        title?: string;
        texto?: string;
        button?: string;
        link?: string;
        image: string;
    };
};

const HeroArea = ({
    data: { subtitle, title, texto, button, link, image },
}: TProps) => {
    return (
        <div className="tw-h-full md:tw-min-h-[90vh] xl:tw-min-h-[90vh]  tw-relative tw-flex tw-items-center tw-isolate tw-bg-pearl tw-overflow-hidden">
            <h1 className="tw-sr-only"> </h1>
            <div className="bgimg tw-absolute tw-inset-0 -tw-z-10 tw-hidden md:tw-block ">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        loading="eager"
                        className="tw-w-full tw-h-full tw-object-cover"
                    />
                )}
            </div>
            {/* <div className="tw-absolute tw-inset-0 -tw-z-10 tw-block md:tw-hidden">
                {images?.[0]?.src && (
                    <img
                        src={images[0].src}
                        alt={images[0]?.alt || "bg"}
                        loading="eager"
                        className="tw-w-full tw-h-full tw-object-cover"
                    />
                )}
            </div> */}
            <div className="tw-container 3xl:tw-max-w-full 3xl:tw-px-37">
                <div className="tw-grid md:tw-gap-7.5 md:tw-grid-cols-2 tw-pt-[80px]">
                    <motion.div
                        className="content tw-text-center tw-mb-7.5 md:tw-text-left md:tw-self-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={scrollUpVariants}
                    >
                        {subtitle && (
                            <span className="tw-text-sm tw-mb-2.5 -tw-tracking-tightest tw-font-bold tw-leading-loose tw-uppercase tw-text-white tw-block md:tw-mb-[18px] md:tw-tracking-[4px]">
                                {subtitle}
                            </span>
                        )}
                        {title && (
                            <Text
                                className="tw-mb-8"
                                size="big"
                                color="white"
                                as="h1"
                            >
                                {title}
                            </Text>
                        )}
                        {texto && (
                            <Text color="white" size="md" className="tw-mb-8">
                                {texto}
                            </Text>
                        )}
                        <Button>{button}</Button>
                    </motion.div>
                    {/* <motion.div
                        className="course tw-flex tw-space-between tw-justify-center xl:tw-justify-end tw-relative tw-z-10"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={scrollUpVariants}
                    >
                        <img
                            className="tw-absolute tw-left-0 -tw-top-7.5 tw-max-w-[100px] tw-z-1 sm:tw-relative sm:tw-left-auto sm:tw-top-auto sm:tw-z-20 sm:tw-self-end sm:tw-flex-auto sm:tw-ml-auto tw-mr-5 sm:tw-mb-[100px] sm:tw-max-w-[120px] md:-tw-mr-7.5 md:-tw-ml-[60px] lg:tw-max-w-[186px]"
                            src="/images/intro/intro1/intro-popular-course.png"
                            alt="popular"
                            width={186}
                            height={157}
                        />
                        <CourseCard
                            className="tw-max-w-[370px]"
                            title={popularCourse.title}
                            path={popularCourse.path}
                            published_at={popularCourse.published_at}
                            price={popularCourse.price}
                            currency={popularCourse.currency}
                            excerpt={popularCourse.excerpt}
                            thumbnail={{
                                ...popularCourse.thumbnail,
                                loading: "eager",
                            }}
                        />
                        <motion.div
                            className="intro1-scene tw-absolute -tw-z-1 -tw-right-11 -tw-bottom-11 tw-w-[136px]"
                            animate={{
                                x: trans1().x,
                                y: trans1().y,
                            }}
                        >
                            <img
                                src="/images/shape-animation/shape-1.png"
                                alt=""
                                width={136}
                                height={136}
                            />
                        </motion.div>
                    </motion.div> */}
                </div>
            </div>
            {/* <BottomShape /> */}
        </div>
    );
};

export default HeroArea;
