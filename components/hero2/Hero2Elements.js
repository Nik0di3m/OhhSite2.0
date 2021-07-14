import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    flex-direction: column;
    margin-bottom: 50px;

`

export const HeroText = styled.h1`
    font-size: 72px;
    text-align: left;
    line-height: 1.3;
    @media (max-width: 768px){
        margin-top: 100px;
    }
    @media (max-width: 640px){
        font-size: 32px;
    }
`

export const HeroText2 = styled.div`
    font-size: 32px;
    letter-spacing: -0.1rem;
    color: #555555;
    font-weight: 500;
    @media (max-width: 640px){
        font-size: 24px;
    }
`

export const TextContainer = styled.div`
    width: 50%;
    margin: 0 auto;

    @media (max-width: 1280px) and (min-width: 768px){
        width: 80%;
    }
    @media (max-width: 1440px) and (min-width: 1280px){
        width: 80%;
    }
    @media (max-width: 640px){
        width: 95%;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 12px;
`