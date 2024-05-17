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
                    <Anchor path="/servicios">Servicios</Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/cursos-online">Cursos online</Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/eventos-y-talleres">
                        Eventos y talleres
                    </Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/blog">
                        Blog
                    </Anchor>
                </Text>
                <Text
                    as="li"
                    className="tw-text-right tw-w-1/2 tw-pr-5 tw-mb-[11px]"
                >
                    <Anchor path="/sobre-mi">Sobre mi</Anchor>
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
