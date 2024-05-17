import React from "react";
import clsx from "clsx";

type Props = {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
    type?: "title" | "custom";
    color?:
        | "primary"
        | "secondary"
        | "white"
        | "error"
        | "success"
        | "warning"
        | "grey"
        | "custom";
    size?: "big" | "xl" | "xlarge" | "lg" | "md" | "sm" | "xs" | "custom";
    className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Text: React.FC<Props> = ({
    size = "md",
    as = "p",
    color = "primary",
    type = "base",
    className = "",
    children,
    ...props
}) => {
    const clases = clsx(
        `${className}`,
        {
            "tw-font-body": type === "title",
            "tw-font-heading": type === "base",
            "": type === "custom",
        },
        {
            "tw-text-primarytext": color === "primary",
            "tw-text-secondarytext": color === "secondary",
            "tw-text-whitetext": color === "white",
            "tw-text-red-500": color === "error",
            "tw-text-green-300": color === "success",
            "tw-text-yellow-200": color === "warning",
            "": color === "custom",
        },
        {
            "tw-text-3xl md:tw-text-4xl": size === "big",
            "tw-text-2xl md:tw-text-3xl": size === "xl",
            "tw-text-lg md:tw-text-xl": size === "xlarge",
            "tw-text-base md:tw-text-lg": size === "lg",
            "tw-text-sm md:tw-text-md": size === "md",
            "tw-text-xs md:tw-text-sm": size === "sm",
            "tw-text-xs md:tw-text-xs": size === "xs",
            "": type === "custom",
        }
    );
    const elementProps: any = {
        ...props,
        className: clases,
    };

    return React.createElement(as, elementProps, children);
};
