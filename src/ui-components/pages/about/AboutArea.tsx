import { motion } from "framer-motion";


import { scrollUpVariants } from "@utils/variants";
import { IBlock } from "services/pages/aboutme";
import { TSection } from "@uic/types/types";
import Section from "@uic/ui/Section";
import SectionTitle from "@uic/common/title/SectionTitle";
import { StrapiImage } from "@uic/common/StrapiImage";

type TProps = TSection & {
    block: IBlock;
};

const AboutArea = ({ block, space, bg, titleSize }: TProps) => {
    return (
        <Section className="about-area" space={space} bg={bg}>
            <div className="tw-container tw-grid lg:tw-grid-cols-2 tw-items-center tw-gap-[50px] lg:tw-gap-7.5">
                <motion.div
                    className="lg:tw-max-w-[420px] tw-order-2 lg:tw-order-1"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={scrollUpVariants}
                >
                    {block.id && (
                        <SectionTitle
                            data={block}
                            align="left"
                            titleSize={titleSize}
                        />
                    )}
                    {/* {motto && (
                        <MottoText className="tw-mt-4" size="md" {...motto} />
                    )} */}
                </motion.div>
                <div className="tw-relative tw-order-1 lg:tw-order-2">
                    {block.img && (
                        <motion.div
                            className="tw-relative tw-z-10"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={scrollUpVariants}
                        >
                            <StrapiImage
                                src={block.img}
                                alt={block.title ?? "About One"}
                                width={570}
                                height={360}
                                className="tw-rounded tw-w-full"
                            />
                            {/* <img
                                src={block.img}
                                alt={block.title ?? "About One"}
                                width={570}
                                height={360}
                                loading="lazy"
                                className="tw-rounded"
                            /> */}
                        </motion.div>
                    )}
                    {/* {images?.[1]?.src && (
                        <div className="tw-absolute tw-z-20 tw-top-[-90px] tw-right-0 3xl:tw-right-[-73px]">
                            <img
                                src={images[1].src}
                                alt={images[1]?.alt || "About Two"}
                                width={190}
                                height={190}
                                loading="lazy"
                                className="tw-rounded"
                            />
                        </div>
                    )} */}

                 
                </div>
            </div>
        </Section>
    );
};

AboutArea.defaultProps = {
    bg: "tw-bg-gray-200",
};

export default AboutArea;
