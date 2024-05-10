import { forwardRef } from "react";
import clsx from "clsx";
import { Text } from "@components/ui/text";

type TProps = {
    className?: string;
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "right" | "center";
    color?: "A" | "B" | "C";
    titleSize?: "default" | "large";
    subtitleClass?: string;
    titleClass?: string;
    descClass?: string;
};

const SectionTitle = forwardRef<HTMLDivElement, TProps>(
    (
        {
            className,
            title,
            description,
            align,
        },
        ref
    ) => {
        return (
            <div
                className={clsx(
                    "section-title tw-relative tw-z-20",
                    align === "center" && "tw-text-center",
                    className
                )}
                ref={ref}
            >
                {/* {subtitle && (
                    <span
                        className={clsx(
                            "tw-font-medium tw-text-base tw-leading-none -tw-tracking-tightest tw-block tw-mb-2.5 tw-uppercase",
                            color === "A" && "tw-text-secondary-light",
                            color === "B" && "tw-text-secondary",
                            subtitleClass
                        )}
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                )} */}

                <Text as="h2" size="xl" color="primary">
                    {title}
                </Text>
                {description && <Text as="p">{description}</Text>}
            </div>
        );
    }
);

SectionTitle.defaultProps = {
    align: "center" as const,
    color: "A" as const,
};

export default SectionTitle;
