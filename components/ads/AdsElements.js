import styled from "styled-components";
import { motion } from "framer-motion";
export const AdsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    max-width: 1536px;
    margin: 0 auto;
    @media (max-width: 1440px) {
        max-width: 1230px;
    }
    @media (max-width: 1280px) {
        max-width: 1150px;
        justify-content: flex-start;
    }
    @media (max-width: 992px) {
        flex-direction: column;
    }
`;
export const ImageContainer = styled(motion.div)`
    @media (max-width: 1280px) {
        img {
            max-width: 500px;
        }
    }
    @media (max-width: 992px) {
        img {
            max-width: 400px;
        }
    }
`;
export const AdsText = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: -15%;
    max-width: 50%;
    @media (max-width: 992px) {
        max-width: 95%;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 1280px) and (min-width: 768px){
        margin-top: -10%;
    }
`;
export const AdsTextH1 = styled.h1`
    font-size: 72px;
    text-shadow: 0px 2px 15px 1px rgba(0, 0, 0, 0.72);
    @media (max-width: 1280px) {
        font-size: 98px;
    }
    @media (max-width: 1440px) and (min-width: 992px) {
        font-size: 78px;
    }
    @media (max-width: 992px) {
        font-size: 42px;
    }
`;
export const AdsGradient = styled.h1`
    font-size: 72px;
    margin-top: -80px;
    color: #24cee5;
    @media (max-width: 992px) {
        font-size: 42px;
        margin-top: -10%;
    }
    @media (max-width: 1440px) and (min-width:993px) {
        font-size: 62px;
    }
`;
export const TextAds = styled.p`
    margin-top: -5%;
    max-width: 80%;
    @media (max-width: 992px) {
        text-align: center;
    }
`;
export const AdsButton = styled.div``;
