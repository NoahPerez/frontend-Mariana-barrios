import type { NextPage } from "next";
import { GetStaticProps } from "next";
import SEO from "@components/seo/page-seo";
import Layout from "@layout/layout-01";
// import HeroArea from "@containers/hero/layout-08";

import { IEventResult, getEvent } from "services/pages/events";

import { Text } from "@uic/ui/text";
import { Container } from "@uic/ui/container";
import Input from "@components/ui/form-elements/input";
import Link from "next/link";
import HeroCursos from "@uic/common/HeroCursos";
import { ICursoResult, getCursos } from "services/pages/cursos";
import TestimonialCursos from "@uic/common/testimonial/TestimonialCursos";
import { ICommentResult, getComments } from "services/comments/getComments";
import Video from "@uic/common/video/Video";
import { motion } from "framer-motion";
import { StrapiImage } from "@uic/common/StrapiImage";

type TProps = {
    data: {
        cursos: ICursoResult;
        events: IEventResult;
        comments: ICommentResult[];
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const AnimatedVideo = motion(Video);

const AboutMe: PageProps = ({ data: { comments, cursos, events: {pasos, viaje} } }) => {
    return (
        <>
            <SEO title="Sobre Mi" />
            <HeroCursos
                data={{
                    title: cursos.titleHeader,
                    texto: cursos.textHeader,
                    image: cursos.image ?? "/images/noimage.png",
                    button: cursos.buttonHeader,
                    link: cursos.linkHeader,
                }}
            />

            <Container bg="white">
                <div className="tw-flex tw-gap-5 tw-flex-col md:tw-flex-row">
                    <StrapiImage
                        src={pasos.img}
                        alt={pasos.title || ""}
                        width={300}
                        height={250}
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
                        <Input id="input" name="name" placeholder="Nombre" />
                        <Input
                            id="input"
                            name="email"
                            placeholder="email@email.com"
                        />
                        <Text>
                            We care about your data un your privacy policy
                        </Text>
                        <Link
                            href={pasos.link ?? "/"}
                            className="tw-rounded-lg tw-bg-primary tw-text-white tw-px-4 tw-p-2 hover:tw-text-white"
                        >
                            {pasos.textButton}
                        </Link>
                    </div>
                </div>
                <div className="tw-w-full tw-my-20" />
                <div className="tw-flex tw-gap-5 tw-flex-col md:tw-flex-row-reverse">
                    <StrapiImage
                        src={viaje.img}
                        alt={viaje.title || ""}
                        width={300}
                        height={250}
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
                        <Input id="input" name="name" placeholder="Nombre" />
                        <Input
                            id="input"
                            name="email"
                            placeholder="email@email.com"
                        />
                        <Text>
                            We care about your data un your privacy policy
                        </Text>
                        <Link
                            href={viaje.link ?? "/"}
                            className="tw-rounded-lg tw-bg-primary tw-text-white tw-px-4 tw-p-2 hover:tw-text-white"
                        >
                            {viaje.textButton}
                        </Link>
                    </div>
                </div>
                <div className="tw-w-full tw-my-10" />
                <TestimonialCursos
                    data={{
                        subtitle: cursos.subTitleTestimonio ?? "",
                        title: cursos.titleTestimonio,
                        button: cursos.buttonTestimonio,
                        items: comments,
                    }}
                />
            </Container>

            <Container bg="grey" clases=" tw-mb-[250px] sm:tw-mb-[350px] md:tw-mb-[550px] tw-relative">
                <div className="tw-flex tw-flex-col   ">
                    <div className="tw-w-full tw-flex-col md:tw-flex-row tw-flex tw-gap-12 tw-justify-between">
                        {cursos.titleTrasnform && (
                            <div className="tw-flex tw-flex-col tw-w-full md:tw-w-1/2">
                                <Text
                                    as="span"
                                    size="md"
                                    color="primary"
                                    className="tw-capitalize tw-w-full tw-block tw-text-left tw-mb-2"
                                >
                                    {cursos.subtitleTrasnform}
                                </Text>
                                <Text
                                    as="h1"
                                    size="xl"
                                    color="primary"
                                    className="tw-w-full tw-text-left tw-mb-4"
                                >
                                    {cursos.titleTrasnform}
                                </Text>
                                <Text>{cursos.textTransform}</Text>
                            </div>
                        )}
                        <div className="tw-flex tw-flex-col tw-w-full md:tw-w-1/2">
                            {cursos.blocks &&
                                cursos.blocks.length > 0 &&
                                cursos.blocks.map((item) => (
                                    <div
                                        className="tw-flex tw-gap-4 tw-mb-8"
                                        key={item.id}
                                    >
                                        <div className="tw-w-12 tw-h-12 tw-aspect-square tw-bg-white tw-rounded-full tw-self-start tw-flex tw-items-center tw-justify-center">
                                            <img
                                                src={`/icons/svg/${item.icono}.svg`}
                                                alt={item.titulo}
                                                width={25}
                                                height={25}
                                                className="tw-mb-0"
                                            />
                                        </div>
                                        <div className="tw-flex tw-flex-col">
                                            <Text as="h3" size="lg">
                                                {item.titulo}
                                            </Text>
                                            <Text>{item.cuerpo}</Text>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="tw-w-full tw-absolute tw-block tw-left-0">
                    {cursos.linkVideo && (
                        <AnimatedVideo
                            poster={{
                                src: cursos.posterVideo,
                                width: 700,
                                height: 569,
                            }}
                            className="tw-max-w-[970px] tw-mx-auto"
                            video={{ videoId: cursos.linkVideo }}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.4 }}
                        />
                    )}
                </div>
            </Container>
            <Container bg="white" clases="">
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-max-w-[600px] tw-mx-auto ">
                    {cursos.downloadTitle && (
                        <>
                            <Text
                                as="h1"
                                size="xl"
                                color="primary"
                                className="tw-w-full tw-text-center tw-mb-4"
                            >
                                {cursos.downloadTitle}
                            </Text>
                            {cursos.downloadParagraph?.map((e) => (
                                <Text
                                    key={e.id}
                                    className="tw-text-center tw-max-w-[500px] tw-mx-auto tw-mb-6"
                                >
                                    {e.parrafo}
                                </Text>
                            ))}

                            <Link
                                href={cursos.linkDownload}
                                className="tw-mb-24 tw-bg-primary tw-text-white hover:tw-text-white tw-px-4 tw-py-2 tw-rounded-lg"
                            >
                                {cursos.buttonDownload}
                            </Link>
                        </>
                    )}
                </div>
            </Container>

            {/* <NewsletterArea data={content?.["newsletter-area"]} /> */}
        </>
    );
};

AboutMe.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    const response = (await getCursos());
    const events = (await getEvent()) as IEventResult;
    const comments = await getComments();

    return {
        props: {
            data: {
                cursos: response,
                events,
                comments,
            },
        },
        revalidate: 30,
    };
};

export default AboutMe;
