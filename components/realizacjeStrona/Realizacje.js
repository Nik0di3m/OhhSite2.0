import RealizacjeCard from "./RealizacjeCard"
import { RealizacjeContainer } from "./RealizacjeElements"

const Realizacje = () => {
    return (
        <RealizacjeContainer>
            <a href="https://gingergarage.pl" target="_blank">
                <RealizacjeCard
                    image="images/ginger.png"
                />
            </a>

            <a href="https://www.as-rent.pl/" target="_blank">
                <RealizacjeCard
                    image="images/as-rent.png"
                />
            </a>
            <a href="https://tas-bialystok.pl/" target="_blank">
                <RealizacjeCard
                    image="images/tas.png"
                />
            </a>
            <a href="https://skibiccy.pl/" target="_blank">
                <RealizacjeCard
                    image="images/skibiccy.png"
                />
            </a>
            <a href="https://instytut-kosmetologii.pl/" target="_blank">
                <RealizacjeCard
                    image="images/ik.png"
                />
            </a>
            <a href="https://domkulturysuraz.pl/" target="_blank">
                <RealizacjeCard
                    image="images/domSuraz.png"
                />
            </a>
            <a href="https://domkulturywyszki.pl/" target="_blank">
                <RealizacjeCard
                    image="images/domWyszki.png"
                />
            </a>
            <a href="https://em-tech.pro/" target="_blank">
                <RealizacjeCard
                    image="images/emtech.png"
                />
            </a>
            <a href="https://rekuperacjepolska.pl/" target="_blank">
                <RealizacjeCard
                    image="images/rekuperecje.png"
                />
            </a>
            <a href="https://pogrzeby-logis.com.pl/" target="_blank">
                <RealizacjeCard
                    image="images/logis.png"
                />
            </a>
        </RealizacjeContainer>
    )
}

export default Realizacje
