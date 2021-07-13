import { ContactButtonContainer } from "./ContactButtonElements"
import { PhoneIcon } from "@heroicons/react/outline"
import Link from "next/link"
const ContactButton = () => {
    return (
        <ContactButtonContainer
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
            }}
        >
            <Link href="kontakt">
                <PhoneIcon style={{ height: 36, color: "white" }} />
            </Link>
        </ContactButtonContainer>
    )
}

export default ContactButton
