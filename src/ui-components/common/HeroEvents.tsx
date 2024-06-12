
import { Text } from "@components/ui/text";
import { StrapiImage } from "./StrapiImage";
import Link from "next/link";


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
const HeroEvent = ({ data: { subtitle, title, texto, button, image, link } }: TProps) => {
    return (
        <div
            className="tw-flex tw-relative tw-min-h-[90vh] md:tw-min-h-[80vh] md:tw-pb-[30px]  tw-bg-spring tw-pt-[60px] tw-bg-cover   bg-none-md"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="tw-bg-black/20 md:tw-bg-transparent tw-px-4 tw-w-full md:tw-w-1/2 tw-py-12 md:tw-py-0 tw-mx-auto tw-flex tw-justify-end   tw-items-center">
                <div className="tw-w-full lg:tw-max-w-[600px] tw-mt-10 tw-block md:tw-pr-16 lg:tw-pr-24">
                    {title && (
                        <>
                            {subtitle && (
                                <Text
                                    as="span"
                                    size="md"
                                    color="custom"
                                    className="tw-text-white md:tw-text-primarytext tw-w-full tw-text-left tw-mb-4 tw-block"
                                >
                                    {subtitle}
                                </Text>
                            )}
                            <Text
                                as="h1"
                                size="big"
                                color="custom"
                                className="tw-text-white md:tw-text-primarytext tw-w-full tw-text-left tw-mb-8"
                            >
                                {title}
                            </Text>
                            {texto && (
                                <Text
                                    as="p"
                                    size="lg"
                                    color="custom"
                                    className="tw-text-white md:tw-text-primarytext tw-w-full tw-mb-12 tw-text-left"
                                >
                                    {texto}
                                </Text>
                            )}
                            {button && (
                                <Link
                                    href={link ?? "/"}
                                    className="tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-transition-colors tw-min-w-max tw-inline-flex  tw-border-primary tw-text-white hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px]  tw-rounded-lg tw-bg-primary tw-p-2 md:tw-p-2 md:tw-px-10"
                                >
                                    {button}
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="tw-bg-spring tw-items-center tw-w-1/2 tw-hidden tw-justify-start md:tw-flex">
                <div className="tw-max-w-[600px] md:tw-px-4 md:tw-pl-16 lg:tw-pl-24  tw-py-12 tw-w-full tw-block">
                    <StrapiImage
                        src={image}
                        alt={title ?? "Eventos y talleres"}
                        width={570}
                        height={360}
                        className="tw-rounded"
                    />
                    {/* <img src={image ?? "/images/noimage.png"} alt={title} /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroEvent;
