import Link from "next/link"
import { ButtonContainer } from "./Hero2ButtonElements"

const Hero2Button = ({ text, link }) => {
    return (
        <Link href={link}>
            <ButtonContainer>
                {text}
            </ButtonContainer>
        </Link>
    )
}

export default Hero2Button
