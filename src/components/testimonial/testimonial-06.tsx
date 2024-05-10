import clsx from "clsx";
import StarRating from "@ui/star-rating";
import { ImageType } from "@utils/types";
import { Text } from "@components/ui/text";

type TProps = {
    name: string;
    designation: string;
    review: string;
    image: ImageType;
    rating: number;
    className?: string;
};

const Testimonial = ({
    name,
    review,
    image,
    rating,
    className,
}: TProps) => {
    return (
        <div
            className={clsx(
                "testimonial tw-flex tw-flex-wrap tw-h-full tw-pt-[31px] tw-pb-[47px] tw-px-[50px] tw-rounded tw-bg-white tw-shadow-2sm tw-shadow-dark/10",
                className
            )}
        >
            <div className="tw-flex tw-flex-col tw-items-center tw-mb-5">
                <Text className="tw-font-medium tw-mb-6 md:tw-mb-[34px]">
                    {review}
                </Text>
                <Text
                    as="h3"
                    className="tw-mb-6 tw-w-full tw-text-left tw-tracking-wider tw-uppercase tw-inline-block"
                >
                    {name}
                </Text>
                <div className="tw-flex tw-flex-col tw-justify-start tw-w-full">
                    {image?.src && (
                        <figure className="image tw-flex-auto0 tw-w-[70px] tw-flex">
                            <img
                                src={image.src}
                                alt={image?.alt || name}
                                width={image?.width || 70}
                                height={image?.height || 70}
                                loading={image?.loading || "lazy"}
                                className="tw-rounded-full"
                            />
                        </figure>
                    )}
                    <StarRating
                        rating={rating}
                        align="left"
                        className="tw-mt-[11px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
