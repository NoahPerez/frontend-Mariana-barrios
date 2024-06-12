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
const HeroCursos = ({
    data: { title, texto, image, button, link },
}: TProps) => {
    return (
        <div
            className="tw-flex tw-relative tw-min-h-[90vh] md:tw-min-h-[60vh]  md:tw-px-0 tw-bg-spring md:tw-bg-transparent tw-pt-[50px] md:tw-pt-[60px] tw-bg-cover bg-none-md"
            style={{
                backgroundImage: `url(${image})`,
                backgroundPositionY: "-30px",
            }}
        >
            <div className="md:tw-px-4 tw-px-4 tw-bg-black/20 tw-w-full md:tw-w-1/2 tw-py-12 md:tw-py-0 tw-mx-auto tw-flex tw-justify-end  md:tw-bg-white tw-items-center">
                <div className="tw-self-end md:tw-self-auto tw-w-full lg:tw-max-w-[600px]  tw-block md:tw-pr-16 lg:tw-pr-24">
                    {title && (
                        <>
                            <Text
                                as="h1"
                                size="big"
                                color="custom"
                                className="tw-text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] md:tw-text-primarytext tw-w-full tw-text-left tw-mb-4 md:tw-mb-8"
                            >
                                {title}
                            </Text>
                            <Text
                                as="p"
                                size="lg"
                                color="custom"
                                className="tw-text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] md:tw-text-primarytext tw-w-full tw-mb-12 tw-text-left"
                            >
                                {texto}
                            </Text>
                            <Link
                                href={link ?? "/"}
                                className="tw-font-bold tw-justify-center tw-items-center tw-border tw-border-solid tw-transition-colors tw-min-w-max tw-inline-flex  tw-border-primary tw-text-white hover:tw-bg-primary hover:tw-border-primary hover:tw-text-white tw-text-md tw-px-7 tw-py-1 tw-min-h-[48px] md:tw-min-h-[52px]  tw-rounded-lg tw-bg-primary tw-p-2 md:tw-p-2 md:tw-px-10"
                            >
                                {button}
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="tw-bg-spring tw-items-center tw-w-1/2 tw-hidden tw-justify-start md:tw-flex">
                <div className="tw-max-w-[600px] md:tw-px-4 md:tw-pl-16 lg:tw-pl-24  tw-py-12 tw-w-full tw-block">
                    <StrapiImage
                        src={image}
                        alt={title || ""}
                        width={500}
                        height={250}
                    />
                    {/* <img src={image ?? "/images/noimage.png"} alt={title} /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroCursos;
