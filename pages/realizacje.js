import Head from "next/head";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "../axios";
import ContactButton from "../components/utils/ContactButton";
import Realizacje from "../components/realizacjeStrona/Realizacje";
import styled from "styled-components";

export default function Home() {
    const [api, setApi] = useState([]);
    const getAPI = async () => {
        await axios
            .get("/realizacje")
            .then((res) => {
                setApi(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAPI();
        console.log(api)
    }, []);
    return (
        <div>
            <Head>
                <title>{api.MetaTitle}</title>
                <meta
                    name="description"
                    content={api.MetaDescription}
                />
                <link rel="icon" href="/favicon1.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;0,800;1,100;1,300;1,400;1,600;1,800&display=swap"
                    rel="stylesheet"
                />
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                            page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </Head>
            <Menu />
            <Wrapper>

                <Realizacje />
                <ContactButton />

                <Footer />
            </Wrapper>
        </div >
    );
}

const Wrapper = styled.div`
    max-width: 1536px;
    margin: 0 auto;
    @media (max-width: 768px){
        padding-top: 60px;
    }
`
