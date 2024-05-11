import type { GetStaticProps, NextPage } from "next";
import SEO from "@components/seo/page-seo";
import Layout01 from "@layout/layout-01";
import { IBlogData, getBlogs, getMetaBlogs } from "services/blog/getBlogs";
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
    const blogs = await getBlogs();
    const metaBlogs = await getMetaBlogs();

    return {
        props: {
            data: {
                blogs,
                currentPage: 1,
                numberOfPages: Math.ceil(
                    metaBlogs.pagination.total / 5
                ),
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
