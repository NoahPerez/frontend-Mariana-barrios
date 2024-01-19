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

type TCardProps = {
    title: string;
    description: string;
};
const Card = ({ title, description }: TCardProps) => {
    return (
        <div className="tw-flex tw-flex-col hover:tw-shadow-dark/10 hover:tw-shadow-sm tw-transition-all tw-p-4">
            <h3>{title}</h3>
            <p className="tw-leading-normal tw-px-2.5 tw-mt-3">{description}</p>
        </div>
    );
};

const FunfactArea = ({
    data: { section_title, motto, items },
    titleSize,
}: TProps) => {
    return (
        <section className="funfact-area tw-bg-white tw-px-4 tw-py-12 md:tw-p-12 tw-flex tw-flex-col">
            <div className="tw-w-full tw-max-w-[1200px] tw-m-auto tw-gap-[50px] lg:tw-gap-7.5">
                <motion.div
                    className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-gap-4 md:tw-gap-10 tw-mb-8"
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
                <div className="tw-auto-columns">
                    <Card
                        title="1:1 Sesiones"
                        description="Quos reprehenderit temporibus sunt voluptatibus
                        reiciendis tenetur est eligendi tempore ad, nihil sint
                        harum."
                    />
                    <Card
                        title="1:1 Sesiones"
                        description="Quos reprehenderit temporibus sunt voluptatibus
                        reiciendis tenetur est eligendi tempore ad, nihil sint
                        harum."
                    />
                    <Card
                        title="1:1 Sesiones"
                        description="Quos reprehenderit temporibus sunt voluptatibus
                        reiciendis tenetur est eligendi tempore ad, nihil sint
                        harum."
                    />
                    <Card
                        title="1:1 Sesiones"
                        description="Quos reprehenderit temporibus sunt voluptatibus
                        reiciendis tenetur est eligendi tempore ad, nihil sint
                        harum."
                    />
                </div>
            </div>
        </section>
    );
};

export default FunfactArea;
