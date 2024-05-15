import type { GetStaticProps, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import { IBlogData, PAGESIZE, getBlogs, getMetaBlogs } from "services/blog/getBlogs";
import BlogArea from "@uic/common/blog/BlogArea-03";

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
    return (
        <>
            <SEO title="Blog" />
            <BlogArea
                data={{
                    title:'Blog',
                    showButton: false,
                    blogs,
                    pagiData: { currentPage, numberOfPages },
                }}
            />
        </>
    );
};

BlogPage.Layout = Layout01;

export const getStaticProps: GetStaticProps = async () => {
    const blogs = await getBlogs({ page: 1});
    const metaBlogs = await getMetaBlogs();

    return {
        props: {
            data: {
                blogs,
                currentPage: 1,
                numberOfPages: Math.ceil(metaBlogs.pagination.total / PAGESIZE),
            },
            layout: {
                headerShadow: true,
                headerFluid: true,
                footerMode: "light",
            },
        },
        revalidate: 30,
    };
};

export default BlogPage;
