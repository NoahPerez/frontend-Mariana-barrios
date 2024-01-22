import React, { type ReactNode } from "react";
import clsx from "clsx";

interface Props {
    children: ReactNode;
    clases?: string;
    bg: "white" | "grey" | "custom";
    py?: string;
}

export const Container: React.FC<Props> = ({
    children,
    bg = "white",
    clases = "",
    py,
}) => {
    const classename = clsx(
        `tw-px-4 ${py ?? "tw-py-12 md:tw-py-[100px]"} ${clases}`,
        {
            "tw-bg-white": bg === "white",
            "tw-bg-spring": bg === "grey",
            "": bg === "custom",
        }
    );

    return (
        <div className={classename}>
            <div className="tw-w-full tw-max-w-[1200px] tw-mx-auto">
                {children}
            </div>
        </div>
    );
};
