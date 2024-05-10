import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import clsx from "clsx";
import Logo from "@components/logo";
// import SearchForm from "@components/forms/search-form";
import MainMenu from "@components/menu/main-menu";
import BurgerButton from "@ui/burger-button";
import Anchor from "@ui/anchor";
import menu from "@data/menu";
import Button from "@ui/button";
import { useSticky } from "@hooks";
import Link from "next/link";
import { Text } from "@components/ui/text";
// import { useUI } from "@contexts/ui-context";

const MobileMenu = dynamic(() => import("../../components/menu/mobile-menu"), {
    ssr: false,
});
const FlyoutSearchForm = dynamic(
    () => import("../../components/forms/flyout-search-form-01"),
    {
        ssr: false,
    }
);

type TProps = {
    shadow?: boolean;
    fluid?: boolean;
    transparent?: boolean;
    mode?: "light" | "dark";
};

const Header = ({ shadow, fluid, transparent, mode }: TProps) => {
    const router = useRouter();
    const [visibleSearch, setVisibleSearch] = useState(false);
    const [offcanvas, setOffcanvas] = useState(false);
    const { sticky, measuredRef } = useSticky();

    useEffect(() => {
        setOffcanvas(false);
    }, [router]);

    return (
        <>
            <header
                className={clsx(
                    "header",
                    !transparent && "tw-relative",
                    transparent &&
                        "tw-absolute tw-inset-0 tw-bottom-auto tw-bg-transparent"
                )}
            >
                <div
                    ref={measuredRef}
                    className={clsx(
                        "header-inner tw-py-[19px] xl:tw-py-0 tw-z-50 tw-transition-all tw-left-0 tw-top-0 tw-w-full tw-h-auto",
                        !sticky && "tw-absolute",
                        sticky &&
                            "tw-fixed tw-shadow-3md tw-shadow-black/10 tw-animate-headerSlideDown",
                        shadow && "tw-shadow-sm tw-shadow-black/5",
                        !transparent && "tw-bg-white",
                        transparent && !sticky && "tw-bg-transparent",
                        transparent && sticky && "tw-bg-white",
                        transparent &&
                            sticky &&
                            mode === "light" &&
                            "tw-bg-black"
                    )}
                >
                    <div
                        className={clsx(
                            "tw-container tw-grid tw-grid-flow-col xl:tw-grid-cols-[22%_minmax(60%,_1fr)_22%] tw-items-center",
                            fluid && "tw-max-w-[1300px] tw-mx-auto tw-px-4 "
                        )}
                    >
                        <Logo
                            variant={mode}
                            className="tw-max-w-[120px] sm:tw-max-w-[158px]"
                        />
                        <MainMenu
                            className="tw-hidden xl:tw-block"
                            align="right"
                            menu={menu}
                            color={mode}
                        />
                        <div className="tw-flex tw-justify-end tw-items-center tw-ml-2">
                            <Link
                                href="/"
                                className="tw-rounded-lg tw-bg-primary tw-p-1 tw-px-4 md:tw-p-2 md:tw-px-5"
                            >
                                <Text
                                    size="sm"
                                    color="white"
                                    className="tw-font-bold"
                                >
                                    Sesion gratuita
                                </Text>
                            </Link>
                            <BurgerButton
                                className="tw-pl-5 xl:tw-hidden"
                                onClick={() => setOffcanvas(true)}
                                color={mode}
                                label="Toggle Menu"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={offcanvas}
                onClose={() => setOffcanvas(false)}
                menu={menu}
            />
        </>
    );
};

Header.defaultProps = {
    fluid: true,
    mode: "dark",
};

export default Header;
