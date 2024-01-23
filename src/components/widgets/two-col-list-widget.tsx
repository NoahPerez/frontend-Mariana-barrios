import clsx from "clsx";
import Anchor from "@ui/anchor";
import { Text } from "@components/ui/text";
import WidgetTitle from "./widget-title";

type TProps = {
    className?: string;
    mode?: "light" | "dark";
};

const TwoColumnListWidget = ({ className, mode }: TProps) => {
    return (
        <div className={clsx(className)}>
            <WidgetTitle mode={mode}>Explore</WidgetTitle>
            <ul
                className={clsx(
                    "tw-flex tw-flex-wrap tw-text-md tw-font-medium",
                    mode === "dark" && "tw-text-gray-400"
                )}
            >
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/start-here">Start here</Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/success-story">Success story</Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/blogs/blog-grid">Blog</Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/courses/grid-01">Courses</Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/about-us-01">About us</Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/contact-us">Contact us</Anchor>
                </Text>
            </ul>
        </div>
    );
};

export default TwoColumnListWidget;
