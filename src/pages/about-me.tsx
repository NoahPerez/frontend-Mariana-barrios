import type { NextPage } from "next";
import { GetStaticProps } from "next";
import SEO from "@components/seo/page-seo";
import Layout from "@layout/layout-01";
// import HeroArea from "@containers/hero/layout-08";
import AboutArea from "@containers/about/layout-02";
// import VideoArea from "@containers/video/layout-06";
import TestimonialArea from "@containers/testimonial/layout-07";
// import CtaArea from "@containers/cta/layout-02";
// import TeamArea from "@containers/team/layout-02";
import NewsletterArea from "@containers/newsletter/layout-01";
import FreeSession from "@containers/free-session";
// import HeroAbout from "@containers/about-me/hero";
// import HeroArea from "@containers/hero/layout-01";
import MyBook from "@containers/mybook";

import { normalizedData } from "@utils/methods";

import { getPageData } from "../lib/page";

interface PageContent {
    section: string;
}

type TProps = {
    data: {
        page: {
            content: PageContent[];
        };
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const AboutMe: PageProps = ({ data }) => {
    const content = normalizedData<PageContent>(data.page?.content, "section");
    // const areaData = content["areas-area"];
    const myBookData = content["mybook-area"];
    return (
        <>
            <SEO title="Sobre Mi" />
            {/* <HeroArea
                data={{
                    ...content?.["hero-area"], popularCourse: data.popularCourse,
                }}
            /> */}
            {/* <HeroArea data={content?.["hero-area"]} /> */}
            <AboutArea
                data={content?.["about-area"]}
                bg="tw-bg-white"
                space="top-bottom-3"
                titleSize="large"
            />

            <MyBook data={{ ...myBookData }} />
            {/* <VideoArea data={content?.["video-area"]} titleSize="large" /> */}
            <TestimonialArea
                data={content?.["testimonial-area"]}
                titleSize="large"
            />

            {/* <CtaArea
                data={content?.["cta-area"]}
                space="bottom"
                bg="tw-bg-light-100"
            /> */}
            {/* <TeamArea data={content?.["team-area"]} titleSize="large" /> */}
            <FreeSession data={{ ...content?.["freesesion-area"] }} />
            <NewsletterArea data={content?.["newsletter-area"]} />
        </>
    );
};

AboutMe.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("inner", "about-us-01");
    return {
        props: {
            data: {
                page,
            },
            layout: {
                headerShadow: true,
                headerFluid: false,
                footerMode: "light",
            },
        },
    };
};

export default AboutMe;

