import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import { IBlogData, PAGESIZE, getBlogs, getIdsBlogs, getMetaBlogs, getSlugsBlogs } from "services/blog/getBlogs";
import BlogArea from "@uic/common/blog/BlogArea-03";
import { ParsedUrlQuery } from "querystring";

type TProps = {
    data: {
        blogs: IBlogData[];
        currentPage: number;
        numberOfPages: number;
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout01;
};

const BlogPage: PageProps = ({
    data: { blogs, currentPage, numberOfPages },
}) => {
  console.log({currentPage})
    return (
        <>
            <SEO title="Blog" />
            <BlogArea
                data={{
                    title: "Blog",
                    showButton: false,
                    blogs,
                    pagiData: { currentPage, numberOfPages },
                }}
            />
        </>
    );
};

BlogPage.Layout = Layout01;

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getIdsBlogs();
    const paths = slugs.map((e) => ({
        params: {
            id: `${e.id}`,
        },
    }));


    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<TProps> = async ({
    params,
}) => {
    const metaBlogs = await getMetaBlogs();
    const numberOfPages = Math.ceil(metaBlogs.pagination.total / PAGESIZE);
    let currentPage = Number(params?.id ?? 1);

    if (params?.id && currentPage > numberOfPages) {
        currentPage = numberOfPages;
    }

    const blogs = await getBlogs({ page: currentPage });

    return {
        props: {
            data: {
                blogs,
                currentPage,
                numberOfPages,
            },
            layout: {
                headerShadow: true,
                headerFluid: true,
                footerMode: "light",
            },
        },
    };
};
export default BlogPage;
