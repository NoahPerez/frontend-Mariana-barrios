import { Text } from "@components/ui/text";
import Button from "@components/ui/button";
import { StrapiImage } from "./StrapiImage";


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
    data: { title, texto, image, button },
}: TProps) => {
    return (
        <div className="tw-flex tw-relative tw-min-h-[60vh] tw-px-4 tw-bg-spring md:tw-bg-transparent tw-pt-[50px] md:tw-pt-[60px]">
            <div className="tw-w-full md:tw-w-1/2 tw-py-12 md:tw-py-0 tw-mx-auto tw-flex tw-justify-end  md:tw-bg-white tw-items-center">
                <div className="tw-w-full lg:tw-max-w-[600px]  tw-block md:tw-pr-16 lg:tw-pr-24">
                    {title && (
                        <>
                            <Text
                                as="h1"
                                size="big"
                                color="primary"
                                className=" tw-w-full tw-text-left tw-mb-8"
                            >
                                {title}
                            </Text>
                            <Text
                                as="p"
                                size="lg"
                                color="primary"
                                className="tw-w-full tw-mb-12 tw-text-left"
                            >
                                {texto}
                            </Text>
                            <Button>{button}</Button>
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
