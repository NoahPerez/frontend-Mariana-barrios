import { forwardRef } from "react";
import clsx from "clsx";
import { Text } from "@components/ui/text";
import { IBlock } from "services/pages/aboutme";
import Link from "next/link";

type TProps = {
    className?: string;

    align?: "left" | "right" | "center";
    color?: "A" | "B" | "C";
    titleSize?: "default" | "large";
    subtitleClass?: string;
    titleClass?: string;
    descClass?: string;
    data?: IBlock;
};

const SectionTitle = forwardRef<HTMLDivElement, TProps>(
    (
        { className, align, data },
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
                {data?.title && (
                    <Text as="h2" size="xl" color="primary">
                        {data?.title}
                    </Text>
                )}
                {data?.paragraphs?.length &&
                    data?.paragraphs.map((e) => (
                        <Text as="p" key={e.id}>
                            {e.parrafo}
                        </Text>
                    ))}
                <Link href={data?.link ?? ""} className="tw-text-primary">
                    {data?.buttonText}
                </Link>
            </div>
        );
    }
);

SectionTitle.defaultProps = {
    align: "center" as const,
    color: "A" as const,
};

export default SectionTitle;
