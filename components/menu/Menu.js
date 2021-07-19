import {
    CloseIconContainer,
    MenuContainer,
    MenuHamburger,
    MenuItem,
    MenuLogo,
    MenuWrapper,
    SideMenu,
    MenuItemContainert,
    MenuMobile,
    MenuItemDesktop,
    MenuItemsContainerDesktop,
    MenuContainerDesktop,
    MenuContainerDesktopWrapper,
    SocialIconsContainer,
    SocialIcon,
    MenuContainerDesktop2,
    PhoneContainer,
    SocialWrapper,
} from "./MenuElements";
import { PhoneIcon } from "@heroicons/react/outline"
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import { useState } from "react";
const Menu = () => {
    const [active, setActive] = useState(false);
    const sidebarVariants = {
        hidden: {
            opacity: 0.5,
            left: "-100%",
        },
        visable: {
            opacity: 1,
            left: 0,
            display: "visable",
            transition: {
                delay: 0.2,
            },
        },
    };

    return (
        <MenuWrapper>
            <MenuMobile>
                <SideMenu
                    variants={sidebarVariants}
                    initial="hidden"
                    animate={`${active ? "visable" : "hidden"
                        }`}
                >
                    <CloseIconContainer
                        onClick={() => {
                            setActive(!active);
                        }}
                        whileTap={{ scale: 1.5 }}
                    >
                        <CloseIcon fontSize="large" />
                    </CloseIconContainer>
                    <MenuItemContainert>
                        <Link href="strony-www">
                            <MenuItem>Strony WWW</MenuItem>
                        </Link>
                        <Link href="pozycjonowanie">
                            <MenuItem>
                                Pozycjonowanie
                            </MenuItem>
                        </Link>
                        <Link href="realizacje">
                            <MenuItem>Realizacje</MenuItem>
                        </Link>
                        <Link href="kontakt">
                            <MenuItem>Kontakt</MenuItem>
                        </Link>
                    </MenuItemContainert>
                </SideMenu>
                <MenuContainer>
                    <MenuLogo>
                        <Link href="/">
                            <a style={{ display: 'flex' }}>
                                <img src="images/logo.svg" alt="Logo firmy Ohhsite" width="160" height="40" />
                            </a>
                        </Link>
                    </MenuLogo>
                    <MenuHamburger
                        whileTap={{ scale: 1.5 }}
                    >
                        <MenuIcon
                            fontSize="large"
                            onClick={() =>
                                setActive(!active)
                            }
                        />
                    </MenuHamburger>
                </MenuContainer>
            </MenuMobile>
            <MenuContainerDesktopWrapper>
                <MenuContainerDesktop2>
                    <MenuContainerDesktop>
                        <MenuLogo>
                            <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="images/logo.svg" style={{ objectFit: 'contain' }} alt="Logo firmy Ohhsite" width="160" height="40" />
                            </a>
                        </MenuLogo>
                        <MenuItemsContainerDesktop>
                            <MenuItemDesktop>
                                <Link href="strony-www">
                                    Strony WWW
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="pozycjonowanie">
                                    Pozycjonowanie
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="realizacje">
                                    Realizacje
                                </Link>
                            </MenuItemDesktop>
                            <MenuItemDesktop>
                                <Link href="kontakt">
                                    Kontakt
                                </Link>
                            </MenuItemDesktop>

                        </MenuItemsContainerDesktop>
                    </MenuContainerDesktop>
                    <SocialWrapper>
                        <SocialIconsContainer>
                            <SocialIcon>
                                <Link href="https://facebook.com">
                                    <a target="_blank">
                                        <img src="images/facebook.svg" />
                                    </a>
                                </Link>
                            </SocialIcon>
                            <SocialIcon>
                                <Link href="https://instagram.com">
                                    <a target="_blank">
                                        <img src="images/instagram.svg" />
                                    </a>
                                </Link>
                            </SocialIcon>
                        </SocialIconsContainer>
                        <PhoneContainer>
                            <PhoneIcon style={{ height: 24, marginRight: 10 }} />
                            <a href="tel:+48508431649">
                                508431649
                            </a>
                        </PhoneContainer>
                    </SocialWrapper>
                </MenuContainerDesktop2>
            </MenuContainerDesktopWrapper>
        </MenuWrapper >
    );
};

export default Menu;
