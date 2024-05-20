import { motion } from "framer-motion";
import { scrollUpVariants } from "@utils/variants";
import { MottoType, TSection } from "@utils/types";
import Link from "next/link";
import { IBlogData } from "services/blog/getBlogs";
import BlogCard from "./BlogCard-03";
import { Container } from "@uic/ui/container";
import SectionTitle from "../title/SectionTitle";
import { Text } from "@uic/ui/text";
import Pagination from "./pagination-01";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedBlogCard = motion(BlogCard);

type TProps = TSection & {
    data: {
        title?: string;
        showButton: boolean;
        motto?: MottoType;
        blogs: IBlogData[];
        pagiData?: {
            currentPage: number;
            numberOfPages: number;
        };
    };
};

const BlogArea = ({ data: { title, blogs, pagiData, showButton = true }, titleSize }: TProps) => {

    return (
        <Container clases="blog-area" bg="white">
            <div className="tw-relative">
                {title && (
                    <AnimatedSectionTitle
                        data={{ title }}
                        titleSize={titleSize}
                        className="tw-mt-10 tw-mb-7.5 md:tw-mb-15 lg:tw-mt-4"
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
                            path={`/blog/${blog.slug}`}
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
                {showButton && (
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
                )}
                {pagiData && pagiData.numberOfPages > 1 && (
                    <Pagination
                        className="tw-mt-[50px]"
                        numberOfPages={pagiData.numberOfPages}
                        currentPage={pagiData.currentPage}
                        rootPage="blog"
                    />
                )}
            </div>
        </Container>
    );
};

BlogArea.defaultProps = {
    bg: "tw-bg-gray-200",
};

export default BlogArea;
