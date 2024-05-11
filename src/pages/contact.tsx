import type { NextPage } from "next";
import { GetStaticProps } from "next";
import SEO from "@components/seo/page-seo";
import Layout from "@layout/layout-01";
import Breadcrumb from "@components/breadcrumb";


import { IContactResult, getContact } from "services/contact/getContact";
import ContactInfo from "@uic/pages/contact/ContactInfo";
import ContactFormArea from "@uic/pages/contact/ContactForm";



type TProps = {
    data: {
        contact: IContactResult
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const ContactMe: PageProps = ({ data: { contact } }) => {
   
    console.log({contact})

    return (
        <>
            <SEO title="Contact Us" />
            <Breadcrumb
                pages={[{ path: "/", label: "home" }]}
                currentPage="Contact Us"
                showTitle={false}
            />
            <ContactInfo data={contact} />
            <ContactFormArea data={contact} />
        </>
    );
};

ContactMe.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    const contact = await getContact();
    return {
        props: {
            data: {
                contact,
            },
            layout: {
                headerShadow: true,
                headerFluid: true,
                footerMode: "light",
            },
        },
    };
};

export default ContactMe;
