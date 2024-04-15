import { motion } from "framer-motion";
import BlogCard from "@components/blog-card/blog-03";
import SectionTitle from "@components/section-title";
import { scrollUpVariants } from "@utils/variants";
import { MottoType, SectionTitleType, IBlog, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import Button from "@components/ui/button";
import Link from "next/link";
import { Text } from "@components/ui/text";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedBlogCard = motion(BlogCard);

type TProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        motto?: MottoType;
        blogs: IBlog[];
    };
};

const BlogArea = ({ data: { section_title, blogs }, titleSize }: TProps) => {
    return (
        <Container clases="blog-area" bg="white">
            <div className="tw-relative">
                {section_title && (
                    <AnimatedSectionTitle
                        {...section_title}
                        titleSize={titleSize}
                        className="tw-mb-7.5 md:tw-mb-15"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                    />
                )}

                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-7.5">
                    {blogs?.map((blog) => (
                        <AnimatedBlogCard
                            key={blog.path}
                            title={blog.title}
                            path={blog.path}
                            category={blog.category}
                            postedAt={blog.postedAt}
                            image={blog.image}
                            views={blog.views}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={scrollUpVariants}
                        />
                    ))}
                </div>
                <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-mt-12">
                    <Link
                        href="/blog"
                        className="tw-rounded-lg tw-bg-primary tw-px-6 tw-py-2 tw-min-w-[200px]"
                    >
                        <Text
                            className="tw-font-bold tw-w-full tw-text-center"
                            color="white"
                        >
                            Leer más artículos
                        </Text>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

BlogArea.defaultProps = {
    bg: "tw-bg-gray-200",
};

export default BlogArea;
