import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
import { normalizedData } from "@utils/methods";
import NewsletterArea from "@containers/newsletter/layout-01";
import GoodSection from "@containers/services/good";
import TestimonialGuide from "@containers/free-guide/testimonials";
import VideoGuide from "@containers/free-guide/video";
import HeroExtra from "@containers/extra-sales/hero-extra";
import TransformAbout from "@containers/about-me/transform";
import FreeSession from "@containers/free-session";
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

const ExtraSales: PageProps = ({ data }) => {
    const content = normalizedData<PageContent>(data.page?.content, "section");

    return (
        <>
            <HeroExtra
                data={{
                    ...content?.["hero-area"],
                }}
            />
            <TransformAbout
                data={{
                    ...content?.["transform-area"],
                }}
            />
            <VideoGuide
                data={{
                    ...content?.["video-area"],
                }}
            />
            <TestimonialGuide
                data={{
                    ...content?.["testimonials-area"],
                }}
            />
            <FreeSession data={{ ...content?.["freesesion-area"] }} />
            <GoodSection
                data={{
                    ...content?.["good-area"],
                }}
            />
            <NewsletterArea data={{ ...content?.["newsletter-area"] }} />
        </>
    );
};

ExtraSales.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("inner", "extra-sales");

    return {
        props: {
            data: {
                page,
            },
        },
    };
};

export default ExtraSales;
