import { useMemo } from "react";
import { motion } from "framer-motion";
import { scrollUpVariants } from "@utils/variants";
import { ICommentResult } from "services/comments/getComments";
import Testimonial from "./Testimonail-06";
import Swiper, { SwiperSlide } from "@ui/swiper";

const AnimatedSwiper = motion(Swiper);

type TProps = {
    comments: ICommentResult[];
};

const TestimonialArea = ({ comments }: TProps) => {
    const options = useMemo(() => {
        return {
            slidesPerView: 1,
            autoplay: false,
            autoHeight: true,
            pagination: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        };
    }, []);

    console.log({ comments });
    return (
        <section className="testimonial-area tw-mt-15 md:tw-mt-20">
            <div className="">
                {comments && comments.length > 0 && (
                    <AnimatedSwiper
                        options={options}
                        shadowSize="small"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    >
                        {comments.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Testimonial
                                    name={item.title ?? ""}
                                    review={item.body ?? ""}
                                    image={{
                                        height: 70,
                                        width: 70,
                                        src: item.img,
                                    }}
                                    rating={item.stars}
                                />
                            </SwiperSlide>
                        ))}
                    </AnimatedSwiper>
                )}
            </div>
        </section>
    );
};

export default TestimonialArea;
