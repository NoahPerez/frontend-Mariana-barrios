import clsx from "clsx";
import { Text } from "./text";

type TProps = {
    children: React.ReactNode;
    className?: string;
    color?: string;
    title?: string;
};

const Wrapper = ({ children, className, color }: TProps) => {
    return (
        <div
            className={clsx("wrapper h-auto", className, color)}
            style={{
                backgroundImage: `url("/images/bg/background-pattern-grid-line.png")`,
            }}
        >
            <div className=" tw-w-full tw-max-w-[1200px] tw-m-auto">
                <Text
                    as="h2"
                    size="xl"
                    className="tw-w-full md:tw-w-2/2 tw-text-center md:tw-text-left"
                >
                    Opinión de quienes han comenzado el viaje
                </Text>
                {children}
            </div>
        </div>
    );
};

Wrapper.defaultProps = {
    color: "tw-bg-spring",
};

export default Wrapper;
