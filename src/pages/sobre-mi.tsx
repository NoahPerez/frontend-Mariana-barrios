import type { NextPage } from "next";
import { GetStaticProps } from "next";
import SEO from "@components/seo/page-seo";
import Layout from "@layout/layout-01";
// import HeroArea from "@containers/hero/layout-08";


import { IAboutMeResult, getAboutMe } from "services/pages/aboutme";
import {
    IFreeSesionResult,
    getFreeSesion,
} from "services/freeSesion/getFreeSesion";
import { TMyBook, getMyBook } from "services/pages/home";
import HeroArea from "@uic/common/HeroArea";
import MyBook from "@uic/common/mybook/MyBook";
import FreeSession from "@uic/common/freeSesion/FreeSession";
import AboutArea from "@uic/pages/about/AboutArea";
import Wrapper from "@uic/ui/Wrapper-01";
import TestimonialArea from "@uic/common/testimonial/TestimonialArea-06";
import { ICommentResult, getComments } from "services/comments/getComments";

type TProps = {
    data: {
        aboutme: IAboutMeResult;
        freeSesion: IFreeSesionResult;
        myBook: TMyBook;
        comments: ICommentResult[];
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const AboutMe: PageProps = ({
    data: {
        aboutme: { banner, buttonHeader, linkHeader, ourWork, title },
        freeSesion,
        myBook,
        comments,
    },
}) => {
    return (
        <>
            <SEO title="Sobre Mi" />
            <HeroArea
                data={{
                    title,
                    image: banner,
                    button: buttonHeader,
                    link: linkHeader,
                }}
            />
            <AboutArea
                block={ourWork}
                bg="tw-bg-white"
                space="top-bottom-3"
                titleSize="large"
            />

            {myBook.myBook.id && <MyBook data={myBook.myBook} />}
            <Wrapper className="tw-px-4 tw-py-12 md:tw-py-[100px]">
                <TestimonialArea comments={comments} />
            </Wrapper>

            {freeSesion && <FreeSession data={freeSesion} />}
            {/* <NewsletterArea data={content?.["newsletter-area"]} /> */}
        </>
    );
};

AboutMe.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    const response = await getAboutMe();
    const myBook = await getMyBook();
    const comments = await getComments();

    const freeSesion = await getFreeSesion();
    return {
        props: {
            data: {
                aboutme: response,
                myBook,
                comments,
                freeSesion,
            },
        },
        revalidate: 30,
    };
};

export default AboutMe;
