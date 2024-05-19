import { DefaultSeo } from "next-seo";
import siteConfig from "@data/site-config";

const SEO = () => {
    return (
        <DefaultSeo
            title={siteConfig.name}
            titleTemplate={`%s - ${siteConfig.titleTemplate}`}
            defaultTitle={siteConfig.name}
            description={siteConfig.description}
            canonical="https://maxcoach-react.pages.dev/"
            openGraph={{
                type: "website",
                locale: "es_ES",
                site_name: siteConfig.name,
                images: [
                    {
                        url: "https://eu2.contabostorage.com/622f2bac1bfb414e890dd626a2f98454%3Amariana-creativa/herobanner_ddf355ed97.jpg",
                        width: 800,
                        height: 600,
                        alt: "Mariana Barrios",
                    },
                    {
                        url: "https://eu2.contabostorage.com/622f2bac1bfb414e890dd626a2f98454%3Amariana-creativa/herobanner_ddf355ed97.jpg",
                        width: 900,
                        height: 800,
                        alt: "Mariana Barrios",
                    },
                ],
            }}
            twitter={{
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
            }}
            facebook={{
                appId: "1234567890",
            }}
            additionalMetaTags={[
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1 maximum-scale=1",
                },
                {
                    name: "apple-mobile-web-app-capable",
                    content: "yes",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ]}
            additionalLinkTags={[
                {
                    rel: "apple-touch-icon",
                    href: "/icons/icon.png",
                },
                {
                    rel: "manifest",
                    href: "/manifest.json",
                },
            ]}
        />
    );
};
export default SEO;
