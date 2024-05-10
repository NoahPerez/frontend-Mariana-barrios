import clsx from "clsx";
import TwoColumnListWidget from "@widgets/two-col-list-widget";
import TextWidget from "@widgets/text-widget";
import { Text } from "@components/ui/text";

type TProps = {
    mode?: "light" | "dark";
};

const Footer01 = ({ mode }: TProps) => {
    return (
        <footer
            className={clsx(
                "tw-pt-[70px] tw-pb-[50px]",
                mode === "dark" && "tw-bg-light-100",
                mode === "light" && "tw-bg-light-100"
            )}
        >
            <Text className="tw-sr-only">Footer</Text>
            <div className="tw-container">
                <div className="tw-grid tw-grid-cols-12">
                    <TextWidget
                        mode={mode}
                        className="tw-col-span-3 lg:tw-col-span-3 xl:tw-col-span-3 tw-mb-[43px]"
                    />
                    <TwoColumnListWidget
                        mode={mode}
                        className="tw-col-span-9 md:tw-col-span-9 lg:tw-col-span-9 xl:tw-col-span-9 tw-mb-[25px]"
                    />
                </div>
                <p className="copyright tw-text-center tw-text-md tw-text-gray-400 tw-mt-5">
                    &copy; {new Date().getFullYear()} Mariana Barrios Terapeuta.{" "}
                    <a target="_blank" rel="noopener noreferrer" href="/">
                        All Rights Reserved
                    </a>
                </p>
            </div>
        </footer>
    );
};

Footer01.defaultProps = {
    mode: "dark",
};

export default Footer01;
