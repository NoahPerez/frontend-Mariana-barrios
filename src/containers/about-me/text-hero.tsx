import { Text } from "@components/ui/text";
import { Container } from "@components/ui/container";

type TProps = {
    data?: string;
};

const TextHeroAbout = ({ data }: TProps) => {
    return (
        <Container bg="white">
            <Text
                size="lg"
                className="tw-text-center tw-w-full tw-mx-auto tw-max-w-[800px]"
            >
                {data}
            </Text>
        </Container>
    );
};

export default TextHeroAbout;
