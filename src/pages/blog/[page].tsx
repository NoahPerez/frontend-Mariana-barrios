import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";

import {
    IBlogData,
    getBlogBySlug,
    getSlugsBlogs,
} from "services/blog/getBlogs";
import { Text } from "@uic/ui/text";
import { Container } from "@uic/ui/container";
import Markdown from "markdown-to-jsx";

type TProps = {
    data: {
        blog: IBlogData;
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const BlogClassic: PageProps = ({ data: { blog } }) => {
    return (
        <>
            <SEO title={`Blog | ${blog.title}`} />
            {/* <Breadcrumb
                pages={[{ path: "/", label: "home" }]}
                currentPage="Blog"
            /> */}
            <Container bg="white">
                {blog.title && (
                    <Text
                        as="h1"
                        className="tw-font-medium tw-w-full tw-text-center tw-mb-20 tw-mt-10"
                        type="title"
                        size="xl"
                    >
                        {blog.title}
                    </Text>
                )}
                <Markdown>{blog.body ?? ""}</Markdown>
            </Container>
        </>
    );
};

BlogClassic.Layout = Layout01;

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getSlugsBlogs();
    const paths = slugs.map((e) => ({
        params: {
            page: e.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

interface Params extends ParsedUrlQuery {
    page: string;
}

export const getStaticProps: GetStaticProps<TProps, Params> = async ({
    params,
}) => {
    const blog = await getBlogBySlug(params?.page ?? "");
    return {
        props: {
            data: {
                blog,
            },
            layout: {
                headerShadow: true,
                headerFluid: true,
                footerMode: "light",
            },
        },
    };
};

export default BlogClassic;
