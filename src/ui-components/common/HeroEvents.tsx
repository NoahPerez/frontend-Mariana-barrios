
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
const HeroEvent = ({ data: { subtitle, title, texto, button, image } }: TProps) => {
    return (
        <div className="tw-flex tw-relative tw-min-h-[80vh] tw-pb-[30px] tw-px-4 tw-bg-spring tw-pt-[60px]">
            <div className="tw-w-full md:tw-w-1/2 tw-py-12 md:tw-py-0 tw-mx-auto tw-flex tw-justify-end  tw-bg-transparent tw-items-center">
                <div className="tw-w-full lg:tw-max-w-[600px] tw-mt-10 tw-block md:tw-pr-16 lg:tw-pr-24">
                    {title && (
                        <>
                            {subtitle && (
                                <Text
                                    as="span"
                                    size="md"
                                    color="primary"
                                    className="tw-w-full tw-text-left tw-mb-4 tw-block"
                                >
                                    {subtitle}
                                </Text>
                            )}
                            <Text
                                as="h1"
                                size="big"
                                color="primary"
                                className="tw-w-full tw-text-left tw-mb-8"
                            >
                                {title}
                            </Text>
                            {texto && (
                                <Text
                                    as="p"
                                    size="lg"
                                    color="primary"
                                    className="tw-w-full tw-mb-12 tw-text-left"
                                >
                                    {texto}
                                </Text>
                            )}
                            {button && <Button>{button}</Button>}
                        </>
                    )}
                </div>
            </div>
            <div className="tw-bg-spring tw-items-center tw-w-1/2 tw-hidden tw-justify-start md:tw-flex">
                <div className="tw-max-w-[600px] md:tw-px-4 md:tw-pl-16 lg:tw-pl-24  tw-py-12 tw-w-full tw-block">
                    <img src={image ?? '/images/noimage.png'} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default HeroEvent;
