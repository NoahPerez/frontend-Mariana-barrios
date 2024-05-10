import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
import HeroArea from "@containers/hero/layout-01";

import FreeSession from "@containers/free-session";
import CanHelp from "@containers/services/canhelp";
import TransformSection from "@containers/services/transform";
import GoodSection from "@containers/services/good";
import StillQuestionSection from "@containers/services/still-questions";

import { getService, IServiceResult } from "services/pages/service";
import { getFaqs, IFaqData } from "services/faqs/getFaqs";
import {
    getFreeSesion,
    IFreeSesionResult,
} from "services/freeSesion/getFreeSesion";

type TProps = {
    data: {
        service: IServiceResult;
        faqs: IFaqData[];
        freeSesion: IFreeSesionResult;
    };
};
type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const Home: PageProps = ({
    data: {
        service: {
            banner,
            faqText,
            faqTitle,
            imgTransform,
            linkButton,
            listTransform,
            moreQuestionsButtonText,
            moreQuestionsLink,
            moreQuestionsText,
            moreQuestionsTitle,
            subtitle,
            subtitleTransform,
            tePropongo,
            tePropongoTitle,
            text,
            textButton,
            textTransform,
            title,
            titleTransform,
        },
        faqs,
        freeSesion,
    },
}) => {
    return (
        <>
            <HeroArea
                data={{
                    image: banner,
                    button: textButton,
                    link: linkButton,
                    subtitle,
                    texto: text,
                    title,
                }}
            />
            <CanHelp
                data={{
                    title: tePropongoTitle,
                    cards: tePropongo,
                }}
            />
            <TransformSection
                data={{
                    title: titleTransform,
                    subtitle: subtitleTransform,
                    paragraphs: [{ id: 1, parrafo: textTransform }],
                    img: imgTransform,
                    cards: listTransform,
                }}
            />
            <GoodSection
                data={{
                    faqs,
                    texts: {
                        title: faqTitle,
                        paragraphs: [{ id: 1, parrafo: faqText }],
                    },
                }}
            />
            <StillQuestionSection
                data={{
                    title: moreQuestionsTitle,
                    link: moreQuestionsLink,
                    buttonText: moreQuestionsButtonText,
                    paragraphs: [{ id: 1, parrafo: moreQuestionsText }],
                }}
            />
            <FreeSession data={freeSesion} />
            {/* <NewsletterArea data={{ ...content?.["newsletter-area"] }} />  */}
        </>
    );
};

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    const response = await getService();
    const faqs = await getFaqs();
    const freeSesion = await getFreeSesion();
    return {
        props: {
            data: {
                service: response,
                faqs,
                freeSesion,
            },
        },
    };
};

export default Home;
