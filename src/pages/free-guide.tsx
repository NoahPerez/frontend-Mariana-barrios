import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
import { normalizedData } from "@utils/methods";
import NewsletterArea from "@containers/newsletter/layout-01";
import HeroFreeGuide from "@containers/free-guide/hero";
import TestimonialGuide from "@containers/free-guide/testimonials";
import VideoGuide from "@containers/free-guide/video";
import DownloadGuide from "@containers/free-guide/download";
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

const Home: PageProps = ({ data }) => {
    const content = normalizedData<PageContent>(data.page?.content, "section");

    return (
        <>
            <HeroFreeGuide
                data={{
                    ...content?.["hero-area"],
                }}
            />
            <TestimonialGuide
                data={{
                    ...content?.["testimonials-area"],
                }}
            />
            <VideoGuide
                data={{
                    ...content?.["video-area"],
                }}
            />
            <DownloadGuide
                data={{
                    ...content?.["download-area"],
                }}
            />
            <NewsletterArea data={{ ...content?.["newsletter-area"] }} />
        </>
    );
};

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("inner", "free-guide");

    return {
        props: {
            data: {
                page,
            },
        },
    };
};

export default Home;
