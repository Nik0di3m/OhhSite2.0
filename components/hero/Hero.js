import Link from "next/link";
import Image from 'next/image'
import {
    HeroButton,
    HeroButtonContainer,
    HeroContainer,
    HeroGradient,
    HeroLogo,
    HeroText,
    HeroTextH1,
    Text,
    AdsText,
    AdsTextH1,
    AdsGradient,
    TextAds,
    AdsButton,
    HeroImage,
} from "./HeroElements";
const Hero = ({
    title1,
    title2,
    text,
    adstitle1,
    adstitle2,
    adstext,
}) => {
    const textVariants = {
        hidden: {
            x: -1500,
        },
        visable: {
            x: 0,
            transition: {
                delay: 0.2,
                type: "spring",
            },
        },
    };
    return (
        <HeroContainer>
            <HeroText
                variants={textVariants}
                initial="hidden"
                animate="visable"
            >
                <Link href="strony-www">
                    <a>
                        <HeroTextH1>
                            {title1}
                            <span
                                style={{ color: "#24cee5" }}
                            >
                                {" "}
                                {title2}
                            </span>
                        </HeroTextH1>
                    </a>
                </Link>
                <Text>{text}</Text>
            </HeroText>
            <HeroImage>
                <Image src="/images/logoHero.svg" width={600} height={200} />
            </HeroImage>

            {/* <HeroText
                variants={textVariants}
                initial="hidden"
                animate="visable"
            >
                <Link href="pozycjonowanie">
                    <a>
                        <HeroTextH1>
                            {adstitle1}
                            <span
                                style={{ color: "#24cee5" }}
                            >
                                {" "}
                                {adstitle2}
                            </span>
                        </HeroTextH1>
                    </a>
                </Link>
                <Text>{adstext}</Text>
            </HeroText> */}
        </HeroContainer>
    );
};

export default Hero;
