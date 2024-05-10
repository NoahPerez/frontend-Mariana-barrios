import { SectionTitleType, ItemType } from "@utils/types";
import { Text } from "@components/ui/text";
import { Container } from "@components/ui/container";
import { motion } from "framer-motion";
import Video from "@ui/video-with-poster/video-02";
import { scrollUpVariants } from "@utils/variants";

const AnimatedVideo = motion(Video);

type TProps = {
    data: {
        section_title?: SectionTitleType;
        paragraph1?: string;
        images?: {
            id?: number;
            src?: string;
        }[];
        items?: ItemType[];
        video?: {
            videoId: string;
            channel?: string;
        };
    };
};
const VideoGuide = ({
    data: { section_title, items, paragraph1, video, images },
}: TProps) => {
    return (
        <Container bg="grey" clases=" tw-mb-[550px] tw-relative">
            <div className="tw-flex tw-flex-col   ">
                <div className="tw-w-full tw-flex-col md:tw-flex-row tw-flex tw-gap-12 tw-justify-between">
                    {section_title && (
                        <div className="tw-flex tw-flex-col tw-w-full md:tw-w-1/2">
                            <Text
                                as="span"
                                size="md"
                                color="primary"
                                className="tw-capitalize tw-w-full tw-block tw-text-left tw-mb-2"
                            >
                                {section_title.subtitle}
                            </Text>
                            <Text
                                as="h1"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-text-left tw-mb-4"
                            >
                                {section_title.title}
                            </Text>
                            <Text>{paragraph1}</Text>
                        </div>
                    )}
                    <div className="tw-flex tw-flex-col tw-w-full md:tw-w-1/2">
                        {items &&
                            items.length > 0 &&
                            items.map((item) => (
                                <div className="tw-flex tw-gap-4 tw-mb-8">
                                    <div className="tw-w-12 tw-h-12 tw-aspect-square tw-bg-white tw-rounded-full tw-self-start tw-flex tw-items-center tw-justify-center">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            width={25}
                                            height={25}
                                            className="tw-mb-0"
                                        />
                                    </div>
                                    <div className="tw-flex tw-flex-col">
                                        <Text as="h3" size="lg">
                                            {item.title}
                                        </Text>
                                        <Text>{item.description}</Text>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="tw-w-full tw-absolute tw-block tw-left-0">
                {video && images?.[0] && (
                    <AnimatedVideo
                        poster={{ ...images[0], width: 700, height: 569, src:'' }}
                        className="tw-max-w-[970px] tw-mx-auto"
                        video={video}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    />
                )}
            </div>
        </Container>
    );
};

export default VideoGuide;
