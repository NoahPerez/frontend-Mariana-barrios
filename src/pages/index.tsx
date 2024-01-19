import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
import Wrapper from "@ui/wrapper/wrapper-01";
import HeroArea from "@containers/hero/layout-01";
import ServiceArea from "@containers/service/layout-01";
// import AboutArea from "@containers/about/layout-01";

// import FunFactArea from "@containers/funfact/layout-01";
import FunfactArea from "@containers/funfact/layout-04";
import TestimonialArea from "@containers/testimonial/layout-06";
// import TestimonialArea from "@containers/testimonial/layout-01";
// import VideoArea from "@containers/video/layout-01";
// import BlogArea from "@containers/blog/layout-01";
import BlogArea from "@containers/blog/layout-03";
import HeroArea2 from "@containers/hero/layout-02";
import AboutArea from "@containers/about/layout-02";
// import NewsletterArea from "@containers/newsletter/layout-01";

import { normalizedData } from "@utils/methods";
import { IBlog, ICourse } from "@utils/types";

import { getPageData } from "../lib/page";
import { getAllBlogs } from "../lib/blog";
import { getallCourses, getFilteredCourse } from "../lib/course";

interface PageContent {
    section: string;
}

type TProps = {
    data: {
        page: {
            content: PageContent[];
        };
        courses: ICourse[];
        popularCourse: ICourse;
        blogs: IBlog[];
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const Home: PageProps = ({ data }) => {
    const content = normalizedData<PageContent>(data.page?.content, "section");

    return (
        <>
            <HeroArea
                data={{
                    ...content?.["hero-area"],
                    popularCourse: data.popularCourse,
                }}
            />
            <div className="tw-w-full tw-p-2 tw-bg-primary">
                <p className="tw-text-md sm:tw-text-[16px] tw-text-white tw-font-medium tw-leading-relaxed sm:tw-mx-auto md:tw-ml-0 md:tw-text-lg tw-text-center">
                    Una Session Gratuita 15min.
                </p>
            </div>
            <FunfactArea
                data={content?.["funfact-area"]}
                space="bottom"
                bg="tw-bg-white"
                titleSize="large"
            />
            <ServiceArea data={content?.["service-area"]} space="none" />

            {/* <AboutArea data={content?.["about-area"]} /> */}
            {/* <Wrapper className="tw-py-[100px]">
                <FunFactArea
                    data={content?.["funfact-area"]}
                    space="bottom-2"
                />
                <TestimonialArea
                    data={content?.["testimonial-area"]}
                    space="none"
                />
            </Wrapper> */}
            <Wrapper className="tw-py-[100px]">
                <TestimonialArea
                    data={content?.["testimonial-area"]}
                    space="none"
                />
            </Wrapper>
            <BlogArea
                data={{ ...content?.["blog-area"], blogs: data.blogs }}
                titleSize="large"
            />
            <HeroArea2 data={content?.["hero-area"]} />

            <AboutArea
                data={content?.["about-area"]}
                titleSize="large"
                space="top-bottom-3"
            />
            {/* <NewsletterArea data={content?.["newsletter-area"]} /> */}
            {/* <VideoArea data={content?.["video-area"]} space="none" /> */}
            {/* <CourseArea
                data={{ ...content?.["course-area"], courses: data.courses }}
            />
            <BlogArea data={{ ...content?.["blog-area"], blogs: data.blogs }} />
            <BrandArea data={content?.["brand-area"]} /> */}
        </>
    );
};

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("home", "index-01");
    const courses = getallCourses(
        ["title", "thumbnail", "price", "currency"],
        0,
        3
    );
    const popularCourse = getFilteredCourse(
        [
            "title",
            "published_at",
            "thumbnail",
            "price",
            "currency",
            "excerpt",
            "isPopular",
        ],
        "isPopular",
        true
    );
    const { blogs } = getAllBlogs(
        ["title", "image", "category", "postedAt", "views"],
        0,
        3
    );
    return {
        props: {
            data: {
                page,
                courses,
                popularCourse,
                blogs,
            },
        },
    };
};

export default Home;
