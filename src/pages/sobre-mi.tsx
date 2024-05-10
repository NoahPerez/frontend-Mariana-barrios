import type { NextPage } from "next";
import { GetStaticProps } from "next";
import SEO from "@components/seo/page-seo";
import Layout from "@layout/layout-01";
// import HeroArea from "@containers/hero/layout-08";
import AboutArea from "@containers/about/layout-02";
// import VideoArea from "@containers/video/layout-06";

// import CtaArea from "@containers/cta/layout-02";
// import TeamArea from "@containers/team/layout-02";

import FreeSession from "@containers/free-session";
// import HeroAbout from "@containers/about-me/hero";
import HeroArea from "@containers/hero/layout-01";
import MyBook from "@containers/mybook";

import { IAboutMeResult, getAboutMe } from "services/pages/aboutme";
import {
    IFreeSesionResult,
    getFreeSesion,
} from "services/freeSesion/getFreeSesion";
import { TMyBook, getMyBook } from "services/pages/home";

type TProps = {
    data: {
        aboutme: IAboutMeResult;
        freeSesion: IFreeSesionResult;
        myBook: TMyBook;
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
    },
}) => {
    console.log({ ourWork });
    // const areaData = content["areas-area"];
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
            {/* <TestimonialArea
                data={content?.["testimonial-area"]}
                titleSize="large"
            /> */}

            {freeSesion && <FreeSession data={freeSesion} />}
            {/* <NewsletterArea data={content?.["newsletter-area"]} /> */}
        </>
    );
};

AboutMe.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    const response = await getAboutMe();
    const myBook = await getMyBook();

    const freeSesion = await getFreeSesion();
    return {
        props: {
            data: {
                aboutme: response,
                myBook,
                freeSesion,
            },
        },
    };
};

export default AboutMe;
