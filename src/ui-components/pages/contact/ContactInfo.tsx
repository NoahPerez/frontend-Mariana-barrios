import clsx from "clsx";
import { motion } from "framer-motion";
import Section from "@ui/section";
import {  TSection } from "@utils/types";
import { scrollUpVariants } from "@utils/variants";
import { IContactResult } from "services/contact/getContact";

type TProps = TSection & {
    data: IContactResult;
};

const ContactInfo = ({ data: { address,hour,title} }: TProps) => {
    return (
        <Section className="contact-info-area" space="none">
            <div className="tw-container">
                {title && (
                    <motion.h2
                        className="tw-max-w-[770px] tw-mx-auto tw-text-center tw-leading-none tw-mb-10 md:tw-mb-15"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    >
                        {title}
                    </motion.h2>
                )}
                <motion.div
                    className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 md:tw-flex md:tw-justify-center tw-gap-x-7.5 tw-gap-y-10 tw-mb-10 md:tw-mb-15"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={scrollUpVariants}
                >
                    <div className="tw-relative tw-pl-12">
                        <i
                            className={clsx(
                                "fas fa-map-marker-alt tw-text-[32px] tw-text-primary tw-absolute tw-left-0 tw-top-0"
                            )}
                        />
                        <h3 className="tw-text-lg tw-mb-3.8">{"Dirección"}</h3>
                        {address &&
                            address.map((add) => (
                                <p
                                    key={add.id}
                                    className="tw-mb-2.5 child:tw-text-heading"
                                    dangerouslySetInnerHTML={{
                                        __html: add.parrafo,
                                    }}
                                />
                            ))}
                    </div>
                    <div className="tw-relative tw-pl-12">
                        <i
                            className={clsx(
                                "fas fa-clock tw-text-[32px] tw-text-primary tw-absolute tw-left-0 tw-top-0"
                            )}
                        />
                        <h3 className="tw-text-lg tw-mb-3.8">{"Horario"}</h3>
                        {hour &&
                            hour.map((h) => (
                                <p
                                    key={h.id}
                                    className="tw-mb-2.5 child:tw-text-heading"
                                    dangerouslySetInnerHTML={{
                                        __html: h.parrafo,
                                    }}
                                />
                            ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default ContactInfo;
