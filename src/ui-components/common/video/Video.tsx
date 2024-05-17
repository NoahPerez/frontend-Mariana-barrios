import { forwardRef } from "react";
import clsx from "clsx";
import VideoButton from "@ui/video-button";
import { ImageType, VideoType } from "@utils/types";
import { StrapiImage } from "../StrapiImage";

type TProps = {
    poster: ImageType;
    video: VideoType;
    className?: string;
};

const Video = forwardRef<HTMLDivElement, TProps>(
    ({ poster, video, className }, ref) => {
        return (
            <div
                className={clsx(
                    "tw-relative tw-overflow-hidden tw-group tw-z-20 tw-rounded tw-shadow-none tw-shadow-black/[22%]",
                    className
                )}
                ref={ref}
            >
                {poster?.src && (
                    <StrapiImage
                        className="tw-w-full tw-transition-transform tw-duration-1500 group-hover:tw-scale-110 tw-aspect-video tw-object-cover"
                        src={poster.src}
                        alt={poster?.alt || "video poster"}
                        width={poster?.width || 1170}
                        height={poster?.height || 620}
                    />
                    // <img
                    //     className="tw-w-full tw-transition-transform tw-duration-1500 group-hover:tw-scale-110 tw-aspect-video"
                    //     src={poster.src}
                    //     alt={poster?.alt || "video poster"}
                    //     width={poster?.width || 1170}
                    //     height={poster?.height || 620}
                    //     loading={poster?.loading || "lazy"}
                    // />
                )}
                {video && <VideoButton videoId={video.videoId} />}
            </div>
        );
    }
);

export default Video;
