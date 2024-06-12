import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
// import AboutArea from "@containers/about/layout-01";

// import FunFactArea from "@containers/funfact/layout-01";

// import TestimonialArea from "@containers/testimonial/layout-01";
// import VideoArea from "@containers/video/layout-01";
// import BlogArea from "@containers/blog/layout-01";
// import NewsletterArea from "@containers/newsletter/layout-01";



import { IHomeResult, getHome } from "services/pages/home";
import { ICommentResult, getComments } from "services/comments/getComments";
import { IBlogData, getBlogs } from "services/blog/getBlogs";
import {
    IFreeSesionResult,
    getFreeSesion,
} from "services/freeSesion/getFreeSesion";
import AreasHome from "@uic/pages/home/AreasHome";
import HeroArea from "@uic/common/HeroArea";
import Wrapper from "@uic/ui/Wrapper-01";
import TestimonialArea from "@uic/common/testimonial/TestimonialArea-06";
import BlogArea from "@uic/common/blog/BlogArea-03";
import MyBook from "@uic/common/mybook/MyBook";
import FreeSession from "@uic/common/freeSesion/FreeSession";

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
                    image: `${banner}`,
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
                    showButton: true,
                    title: "Artículos · Post · Entrevistas · Podcast",
                    blogs: blogs.slice(0,3),
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
    const blogs = await getBlogs({page: 1});
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
        revalidate: 30,
    };
};

export default Home;
