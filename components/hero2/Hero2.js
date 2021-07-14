import Hero2Button from "./Hero2Button"
import { ButtonContainer, HeroContainer, HeroText, HeroText2, TextContainer } from "./Hero2Elements"

const Hero2 = () => {
    return (
        <HeroContainer>
            <TextContainer>
                <HeroText>
                    Najlepszą metodą przewidywania przyszłości<br /> jest jej <span style={{ color: "#24cee5" }}>tworzenie.</span>
                </HeroText>
                <HeroText2>
                    Tworzymy, rozwijamy firmy.<br /> Zobacz co przygotowaliśmy dla Ciebie.
                </HeroText2>
                <ButtonContainer>
                    <Hero2Button link="strony-www" text="Strony Internetowe" />
                    <Hero2Button link="pozycjonowanie" text="Pozycjonowanie" />
                </ButtonContainer>
            </TextContainer>

        </HeroContainer>
    )
}

export default Hero2
