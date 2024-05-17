import { forwardRef } from "react";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import { IBlog } from "@uic/types/types";
import { Text } from "@uic/ui/text";
import { StrapiImage } from "../StrapiImage";

type TProps = Pick<
    IBlog,
    | "image"
    | "path"
    | "title"
    | "postedAt"
    | "views"
    | "content"
    | "shortDescription"
> & {
    className?: string;
};

const BlogCard = forwardRef<HTMLDivElement, TProps>(
    (
        {
            className,
            image,
            path,
            title,
            content,
            shortDescription,
            postedAt,
            views,
        },
        ref
    ) => {
        console.log(content, postedAt, views);
        const shortText = shortDescription?.substring(0, 200).concat("...");
        return (
            <div className={clsx("blog-card tw-group", className)} ref={ref}>
                <div className="tw-relative tw-overflow-hidden tw-rounded tw-h-[250px]">
                    {image?.src && (
                        <figure className="tw-transition-transform tw-duration-1500 tw-h-full group-hover:tw-scale-110">
                            <StrapiImage
                                alt={image?.alt || "Event"}
                                height={image.height || 250}
                                width={image.width || 480}
                                className="tw-w-full tw-h-full tw-object-cover"
                                src={image.src}
                            />
                            {/* <img
                                className="tw-w-full tw-h-full tw-object-cover"
                                src={image.src}
                                alt={image?.alt || "Event"}
                                width={image.width || 480}
                                height={image.height || 250}
                                loading={image.loading || "lazy"}
                            /> */}
                        </figure>
                    )}
                    <Anchor className="link-overlay" path={path}>
                        {title}
                    </Anchor>
                </div>

                <div className="tw-flex tw-flex-col tw-px-6 tw-py-4">
                    {/* <div className="tw-text-base tw-font-medium tw-uppercase -tw-tracking-tightest tw-leading-[1.4] tw-mb-1.5">
                        <Anchor
                            path={category.path}
                            className="tw-text-inherit"
                        >
                            {category.title}
                        </Anchor>
                    </div> */}

                    <Text
                        as="h3"
                        size="lg"
                        className="tw-mb-0 tw-leading-normal"
                    >
                        <Anchor path={path}>{title}</Anchor>
                    </Text>
                    <Text className="tw-mt-4">{shortText}</Text>

                    {/* <ul className="tw-flex tw-gap-7 tw-text-gray-300 tw-text-md">
                        <li className="tw-mt-3.8 tw-mb-0">
                            <i className="far fa-calendar tw-mr-2.5" />
                            {postedAt}
                        </li>
                        <li className="tw-mt-3.8">
                            <i className="far fa-eye tw-mr-2.5" />
                            {views} views
                        </li>
                    </ul> */}
                </div>
            </div>
        );
    }
);

export default BlogCard;
