import { motion } from "framer-motion";
import BlogCard from "@components/blog-card/blog-03";
import SectionTitle from "@components/section-title";
import { scrollUpVariants } from "@utils/variants";
import { MottoType, TSection } from "@utils/types";
import { Container } from "@components/ui/container";
import Link from "next/link";
import { Text } from "@components/ui/text";
import { IBlogData } from "services/blog/getBlogs";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedBlogCard = motion(BlogCard);

type TProps = TSection & {
    data: {
        title: string;
        motto?: MottoType;
        blogs: IBlogData[];
    };
};

const BlogArea = ({ data: { title, blogs }, titleSize }: TProps) => {
    return (
        <Container clases="blog-area" bg="white">
            <div className="tw-relative">
                {title && (
                    <AnimatedSectionTitle
                        data={{ title }}
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
                            key={blog.id}
                            title={blog.title}
                            path={blog.slug}
                            content={blog.body}
                            postedAt=""
                            shortDescription={blog.shortDescription}
                            image={{
                                src: blog.thumbnail,
                                alt: blog.title,
                                height: 400,
                                width: 400,
                            }}
                            views={100}
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
