import React, { type ReactNode } from "react";
import clsx from "clsx";

interface Props {
    children: ReactNode;
    clases?: string;
    bg: "white" | "grey" | "custom"
}



export const Container: React.FC<Props> = ({ children, bg = "white", clases = "" }) => {
    const classename = clsx(`tw-px-4 tw-py-12 md:tw-py-[100px] ${clases}`, {
        "tw-bg-white": bg === "white",
        "tw-bg-sprint": bg === "grey",
        "": bg === "custom",
    });

    return (
        <div className={classename}>
            <div className="tw-w-full tw-max-w-[1200px] tw-mx-auto">
                {children}
            </div>
        </div>
    );
};
