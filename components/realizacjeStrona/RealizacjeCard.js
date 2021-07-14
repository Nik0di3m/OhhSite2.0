import Image from "next/image"
import { RealizacjeCardContaienr, Text } from "./RealizacjeCardElements"

const RealizacjeCard = ({ text, image }) => {
    return (
        <RealizacjeCardContaienr

            whileHover={{
                scale: 1.02,
                transition: { duration: 0.5 },
            }}>

            {/* <Image
                src="/images/ginger.png"
                width={400}
                height={200}
                alt="ginger"
                sizes="contain"
                objectFit="contain"
            /> */}
            <img
                src={image}
                style={{ objectFit: 'contain', width: "100%", borderRadius: '20px' }} />
            <Text>{text}</Text>
        </RealizacjeCardContaienr>
    )
}

export default RealizacjeCard
