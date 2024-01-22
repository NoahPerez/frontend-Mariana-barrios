import clsx from "clsx";
import { Text } from "../text";

type TProps = {
    children: React.ReactNode;
    className?: string;
    color?: string;
};

const Wrapper = ({ children, className, color }: TProps) => {
    return (
        <div
            className={clsx("wrapper tw-overflow-hidden", className, color)}
            style={{
                backgroundImage: `url("/images/bg/background-pattern-grid-line.png")`,
            }}
        >
            <div className=" tw-w-full tw-max-w-[1200px] tw-m-auto">
                <Text
                    as="h2"
                    size="xl"
                    className="tw-w-full md:tw-w-1/2 tw-text-center md:tw-text-left"
                >
                    Que experiencia tuvieron mis clientes
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
