import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
import HeroArea from "@containers/hero/layout-01";

import { normalizedData } from "@utils/methods";
import { IBlog, ICourse } from "@utils/types";

import NewsletterArea from "@containers/newsletter/layout-01";
import CanHelp from "@containers/services/canhelp";
import TransformSection from "@containers/services/transform";
import GoodSection from "@containers/services/good";
import StillQuestionSection from "@containers/services/still-questions";
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
            <CanHelp
                data={{
                    ...content?.["canhelp-area"],
                }}
            />
            <TransformSection
                data={{
                    ...content?.["transform-area"],
                }}
            />
            <GoodSection
                data={{
                    ...content?.["good-area"],
                }}
            />
            <StillQuestionSection
                data={{
                    ...content?.["stillq-area"],
                }}
            />
            <NewsletterArea data={{ ...content?.["newsletter-area"] }} />
        </>
    );
};

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("inner", "services");
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
