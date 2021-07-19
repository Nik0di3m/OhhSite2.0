import Head from "next/head";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import FourOfFour from "../components/404container/404container";
import ContactButton from "../components/utils/ContactButton";
const NotFound = () => {
    return (
        <div>
            <Head>
                <title>
                    OhhSite. Nie znaleźliśmy tego co szukasz
                    :(
                </title>
                <meta
                    name="description"
                    content="404"
                />
                <link rel="icon" href="/favicon1.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,800;1,100;1,300;1,400;1,600;1,800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Menu />
            <FourOfFour />
            <ContactButton />
            <Footer />
        </div>
    );
};

export default NotFound;
