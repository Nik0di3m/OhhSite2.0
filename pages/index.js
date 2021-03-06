import Head from "next/head";
import Menu from "../components/menu/Menu";
import Ads from "../components/ads/Ads.js";
import Realizacje from "../components/realizacje/Realizacje";
import Faq from "../components/faq/Faq";
import WhyUs from "../components/whyus/WhyUs";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ContactButton from "../components/utils/ContactButton";
import Hero2 from "../components/hero2/Hero2";

export default function Home({ api }) {

    return (
        <div>
            <Head>
                <title>{api.MetaTitle}</title>
                <meta
                    name="description"
                    content={api.MetaDesc}
                />
                <link rel="icon" href="/favicon1.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,800;1,100;1,300;1,400;1,600;1,800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Menu />
            <div>
                <Hero2
                    title1={api.HeroTitle1}
                    title2={api.HeroTitle2} />
                {/* <Hero
                    title1={api.HeroTitle1}
                    title2={api.HeroTitle2}
                    text={api.HeroDesc}
                    adstitle1={api.ReklamaTitle1}
                    adstitle2={api.ReklamaTitle2}
                    adstext={api.ReklamaDesc}
                /> */}

                <div
                    style={{
                        width: "100vw",
                        backgroundColor: "#0F0F0F",
                        marginTop: "10px",
                        paddingBottom: "10px",
                    }}
                >
                    <Ads
                        title1={api.ReklamaTitle1}
                        title2={api.ReklamaTitle2}
                        text={api.ReklamaDesc}
                    />
                    <Realizacje />
                    <Faq
                        title1={api.FaqTitle1}
                        title2={api.FaqTitle2}
                        answer1={api.FaqAnswer1}
                        answer2={api.FaqAnswer2}
                        answer3={api.FaqAnswer3}
                    />
                </div>
                {/* <Testemonials /> */}
                <WhyUs
                    title1={api.WhyUsTitle}
                    title2={api.WhyUsTitle2}
                    answer1={api.WhyUsAnswer1}
                    answer2={api.WhyUsAnswer2}
                    answer3={api.WhyUsAnswer3}
                />
                <Contact
                    title={api.ContactTitle}
                    text={api.ContactDesc}
                    phone={api.PhoneNumber}
                    mail={api.Email}
                />
                <ContactButton />

                <Footer />
            </div>
        </div >
    );
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://ohhsite.herokuapp.com/home')
    const api = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            api,
        },
    }
}
