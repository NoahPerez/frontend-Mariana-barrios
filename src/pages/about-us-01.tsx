import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
import Wrapper from "@ui/wrapper/wrapper-01";

import TestimonialArea from "@containers/testimonial/layout-06";

import { normalizedData } from "@utils/methods";
import { IBlog, ICourse } from "@utils/types";

import NewsletterArea from "@containers/newsletter/layout-01";
import GoodSection from "@containers/services/good";
import StillQuestionSection from "@containers/services/still-questions";
import HeroAbout from "@containers/about-me/hero";
import TextHeroAbout from "@containers/about-me/text-hero";
import TransformAbout from "@containers/about-me/transform";
import { getPageData } from "../lib/page";

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

const AboutMe: PageProps = ({ data }) => {
    const content = normalizedData<PageContent>(data.page?.content, "section");
    const textHero = content["texthero-area"];
    return (
        <>
            <HeroAbout
                data={{
                    ...content?.["hero-area"],
                    popularCourse: data.popularCourse,
                }}
            />
            <TextHeroAbout data={textHero.paragraph1} />
            <Wrapper className="tw-px-4 tw-py-12 md:tw-py-[100px]">
                <TestimonialArea data={content?.["testimonial-area"]} />
            </Wrapper>
            <TransformAbout
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

AboutMe.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("inner", "about-me");

    return {
        props: {
            data: {
                page,
            },
        },
    };
};

export default AboutMe;