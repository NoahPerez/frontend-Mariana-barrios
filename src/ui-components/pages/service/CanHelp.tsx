import { Container } from "@uic/ui/container";
import { Text } from "@uic/ui/text";
import { TSection } from "@utils/types";

import { IBlock } from "services/pages/home";

type TProps = TSection & {
    data: IBlock;
};

const CanHelp = ({ data: { title, cards } }: TProps) => {
    return (
        <Container clases="mybook-area" bg="white">
            <div className="tw-flex tw-flex-col">
                <div className="tw-mx-auto md:tw-w-1/2">
                    {title && (
                        <Text
                            as="h2"
                            size="xl"
                            color="primary"
                            className="tw-w-full tw-text-center tw-mb-8"
                        >
                            {title}
                        </Text>
                    )}
                </div>
                <div className="tw-auto-2-columns lg:tw-px-[180px] tw-mx-auto tw-mt-10">
                    {cards &&
                        cards.map((e) => (
                            <div
                                key={e.id}
                                className="tw-p-10 tw-border-[1px] tw-border-spring"
                            >
                                <img
                                    src={`/icons/svg/${e.icono ?? ""}.svg`}
                                    alt={title}
                                    width={40}
                                    height={40}
                                    className="tw-mb-4"
                                />
                                <Text type="title" size="lg" as="h3">
                                    {e.titulo}
                                </Text>
                                <Text>{e.cuerpo}</Text>
                            </div>
                        ))}
                </div>
            </div>
        </Container>
    );
};

export default CanHelp;
