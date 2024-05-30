import type { NextPage } from "next";
import { GetStaticProps } from "next";
import SEO from "@components/seo/page-seo";
import Layout from "@layout/layout-01";
// import HeroArea from "@containers/hero/layout-08";


import { IEventResult, getEvent } from "services/pages/events";
import HeroEvent from "@uic/common/HeroEvents";
import { Text } from "@uic/ui/text";
import { Container } from "@uic/ui/container";
import BlogArea from "@uic/common/blog/BlogArea-03";
import { StrapiImage } from "@uic/common/StrapiImage";
import FormPasos from "@uic/ui/forms/form-pasos";
import FormViajes from "@uic/ui/forms/form-viaje";

type TProps = {
    data: {
        events: IEventResult;
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const AboutMe: PageProps = ({
    data: {
        events: { titleHeader, image, titleEvent, textHeader, subtitleHeader, linkHeader, buttonHeader, viaje, pasos,blogs },
     
    },
}) => {
    return (
        <>
            <SEO title="Sobre Mi" />
            <HeroEvent
                data={{
                    title: titleHeader,
                    subtitle: subtitleHeader,
                    texto: textHeader,
                    image: image ?? "/images/noimage.png",
                    button: buttonHeader,
                    link: linkHeader,
                }}
            />

            <Container bg="white">
                <BlogArea
                    data={{
                        showButton: false,
                        title: titleEvent,
                        blogs: blogs,
                    }}
                    titleSize="large"
                />
                <div className="tw-w-full tw-my-10" />

                <div className="tw-flex tw-gap-5 tw-flex-col md:tw-flex-row">
                    <StrapiImage
                        width={300}
                        height={200}
                        src={pasos.img}
                        alt={pasos.title}
                        className="md:tw-w-1/2 tw-w-full tw-aspect-square tw-border-[0.8px] tw-border-gray-200"
                    />
                    {/* <img
                        width={300}
                        src={pasos.img ?? "/images/noimage.png"}
                        alt={pasos.title}
                        className="md:tw-w-1/2 tw-w-full tw-aspect-square tw-border-[0.8px] tw-border-gray-200"
                    /> */}
                    <div className="tw-flex tw-flex-col md:tw-w-1/2 tw-w-full tw-gap-4 tw-justify-center tw-items-start ">
                        <Text size="2xl" className="tw-font-bold">
                            {pasos.title}
                        </Text>
                        <Text>{pasos.text}</Text>
                        <FormPasos button={pasos.textButton} />
                    </div>
                </div>
                <div className="tw-w-full tw-my-20" />
                <div className="tw-flex tw-gap-5 tw-flex-col md:tw-flex-row-reverse">
                    <StrapiImage
                        width={300}
                        height={200}
                        src={viaje.img}
                        alt={viaje.title}
                        className="md:tw-w-1/2 tw-w-full tw-aspect-square tw-border-[0.8px] tw-border-gray-200"
                    />
                    {/* <img
                        width={300}
                        src={viaje.img ?? "/images/noimage.png"}
                        alt={viaje.title}
                        className="md:tw-w-1/2 tw-w-full tw-aspect-square tw-border-[0.8px] tw-border-gray-200"
                    /> */}
                    <div className="tw-flex tw-flex-col md:tw-w-1/2 tw-w-full tw-gap-4 tw-justify-center tw-items-start ">
                        <Text size="2xl" className="tw-font-bold">
                            {viaje.title}
                        </Text>
                        <Text>{viaje.text}</Text>
                        <FormViajes button={pasos.textButton} />
                    </div>
                </div>
            </Container>

            {/* <NewsletterArea data={content?.["newsletter-area"]} /> */}
        </>
    );
};

AboutMe.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    const response = await getEvent() as IEventResult;

    return {
        props: {
            data: {
                events: response,
            },
        },
        revalidate: 30,
    };
};

export default AboutMe;
