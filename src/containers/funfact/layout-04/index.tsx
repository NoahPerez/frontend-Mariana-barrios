import { motion } from "framer-motion";
import Section from "@ui/section";
import SectionTitle from "@components/section-title";
import MottoText from "@ui/motto-text";
import ServiceCard from "@components/icon-box/icon-box-01";
import FunFact from "@components/funfact/funfact-01";
import { ItemType, MottoType, SectionTitleType, TSection } from "@utils/types";
import { scrollUpVariants } from "@utils/variants";

const AnimatedFunFact = motion(FunFact);
const AnimatedServiceCard = motion(ServiceCard);

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        motto?: MottoType;
        items?: ItemType[];
    };
};

const FunfactArea = ({
    data: { section_title, motto, items },
    titleSize,
}: TProps) => {
    return (
        <section className="funfact-area tw-bg-white tw-px-4 tw-py-12 md:tw-p-12 tw-flex tw-flex-col">
            <div className="tw-w-full tw-max-w-[1200px] tw-m-auto tw-gap-[50px] lg:tw-gap-7.5">
                <motion.div
                    className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-gap-4 md:tw-gap-10"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={scrollUpVariants}
                >
                    <h2 className="tw-w-full md:tw-w-1/2 title tw-m-0 tw-text-secondary tw-text-2xl md:tw-text-3xl lg:tw-text-[50px] tw-leading-heading lg:tw-leading-heading tw-text-center md:tw-text-left">
                        Puedo ayudarte en estas áreas
                    </h2>
                    <p className="tw-w-full tw-text-center md:tw-text-left md:tw-w-1/2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quos reprehenderit temporibus sunt voluptatibus
                        reiciendis tenetur est eligendi tempore ad, nihil sint
                        harum. Ab tenetur, cumque consectetur rem eius vero
                        voluptatibus?
                    </p>
                </motion.div>
                <div className="tw-flex tw-flex-wrap">
                    <AnimatedServiceCard
                        icon=""
                        title="1:1 Sesiones"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        path="/"
                        pathText=""
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    />
                    <AnimatedServiceCard
                        icon=""
                        title="1:1 Sesiones"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        path="/"
                        pathText=""
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    />
                    <AnimatedServiceCard
                        icon=""
                        title="1:1 Sesiones"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        path="/"
                        pathText=""
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    />
                    <AnimatedServiceCard
                        icon=""
                        title="1:1 Sesiones"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        path="/"
                        pathText=""
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    />
                </div>
            </div>
        </section>
    );
};

export default FunfactArea;
