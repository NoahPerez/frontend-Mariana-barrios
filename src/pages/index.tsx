import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
import Wrapper from "@ui/wrapper/wrapper-01";
import HeroArea from "@containers/hero/layout-01";
// import AboutArea from "@containers/about/layout-01";

// import FunFactArea from "@containers/funfact/layout-01";
import TestimonialArea from "@containers/testimonial/layout-06";
// import TestimonialArea from "@containers/testimonial/layout-01";
// import VideoArea from "@containers/video/layout-01";
// import BlogArea from "@containers/blog/layout-01";
import BlogArea from "@containers/blog/layout-03";
// import NewsletterArea from "@containers/newsletter/layout-01";

import MyBook from "@containers/mybook";
import FreeSession from "@containers/free-session";
import AreasHome from "@containers/home/areas";

import { IHomeResult, getHome } from "services/pages/home";
import { STRAPI_URL } from "config/config";
import { ICommentResult, getComments } from "services/comments/getComments";
import { IBlogData, getBlogs } from "services/blog/getBlogs";
import {
    IFreeSesionResult,
    getFreeSesion,
} from "services/freeSesion/getFreeSesion";

type TProps = {
    data: {
        home: IHomeResult;
        comments: ICommentResult[];
        blogs: IBlogData[];
        freeSesion: IFreeSesionResult;
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const Home: PageProps = ({ data }) => {
    const {
        home: {
            banner,
            linkButton,
            myBook,
            puedoAyudarteCards,
            puedoAyudarteText,
            puedoAyudarteTitle,
            subtitle,
            text,
            textButton,
            title,
        },
        comments,
        blogs,
        freeSesion,
    } = data;

    return (
        <>
            <HeroArea
                data={{
                    subtitle,
                    title,
                    texto: text,
                    button: textButton,
                    link: linkButton,
                    image: `${STRAPI_URL}${banner}`,
                }}
            />

            <AreasHome
                data={{
                    section_title: puedoAyudarteTitle,
                    paragraph1: puedoAyudarteText,
                    items: puedoAyudarteCards,
                }}
            />

            <Wrapper className="tw-px-4 tw-py-12 md:tw-py-[100px]">
                <TestimonialArea comments={comments} />
            </Wrapper>

            <BlogArea
                data={{
                    title: "Artículos · Post · Entrevistas · Podcast",
                    blogs,
                }}
                titleSize="large"
            />
            {myBook?.id && <MyBook data={myBook} />}
            {freeSesion && <FreeSession data={freeSesion} />}
            {/* <NewsletterArea data={{ ...content?.["newsletter-area"] }} /> */}
        </>
    );
};

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    const response = await getHome();
    const comments = await getComments();
    const blogs = await getBlogs();
    const freeSesion = await getFreeSesion();
    return {
        props: {
            data: {
                home: response,
                comments,
                blogs,
                freeSesion,
            },
        },
    };
};

export default Home;
